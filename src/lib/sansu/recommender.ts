import { Mountain } from '@/types/mountain';
import { ZODIAC_TO_ELEMENT, getZodiacByYear } from './zodiac';
import { SUPPLEMENT_RULE, ELEMENT_TO_SHAPE, getDayBonus } from './element';

// Temporary mock for database. In real app, replace with Firestore call.
import data from '../../mountains.json';

export interface RecommendationInput {
  birthYear: number;
  category?: string;
  date?: Date;
  userLat?: number;
  userLng?: number;
}

export interface MountainRecommendation {
  mountain: Mountain;
  score: number;
  reason: string;
}

export async function getMountainsByShape(shapeType: string): Promise<Mountain[]> {
  const mountains = data.mountains as Mountain[];
  return mountains.filter(m => m.shape_type === shapeType);
}

export async function getAllMountains(): Promise<Mountain[]> {
  return data.mountains as Mountain[];
}

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export async function recommend(input: RecommendationInput): Promise<MountainRecommendation[]> {
  const zodiac = getZodiacByYear(input.birthYear);
  const userElement = ZODIAC_TO_ELEMENT[zodiac];
  const supplementElement = SUPPLEMENT_RULE[userElement];
  const recommendedShape = ELEMENT_TO_SHAPE[supplementElement];

  const mountains = await getAllMountains();

  return mountains
    .map(m => {
      let score = 100;
      
      // Base condition: Does it match the recommended shape? If not, penalize heavily.
      if (m.shape_type !== recommendedShape) {
        score -= 80;
      }
      
      if (input.category && m.wish_categories.includes(input.category)) score += 50;
      if (m.best_for_zodiac.includes(zodiac)) score += 30;
      
      // Distance bonus: If within 50km, +40 points. Within 100km, +20 points.
      if (input.userLat && input.userLng) {
        const dist = getDistance(input.userLat, input.userLng, m.lat, m.lng);
        if (dist < 50) score += 40;
        else if (dist < 100) score += 20;
      }

      score *= getDayBonus(input.date || new Date(), m.shape_type);
      
      return {
        mountain: m,
        score,
        reason: `${zodiac}는 ${userElement}의 기운. ${supplementElement}를 보충하면 균형이 맞춰집니다. ${m.name_ko}는 ${m.shape_ko} 산형으로 ${supplementElement}의 기운이 강합니다.`
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}
