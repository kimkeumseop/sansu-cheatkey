export interface FamousSpot {
  name: string;
  desc: string;
}

export interface Course {
  name: string;
  duration_min: number;
  difficulty: string;
  transit: string;
}

export interface Mountain {
  id: string;
  name_ko: string;
  name_hanja: string;
  region: string;
  address: string;
  lat: number;
  lng: number;
  elevation_m: number;
  shape_type: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  shape_ko: string;
  five_element: '木' | '火' | '土' | '金' | '水';
  energy_keywords: string[];
  wish_categories: string[];
  best_for_zodiac: string[];
  famous_spots: FamousSpot[];
  best_courses: Course[];
  story: string;
  trend_note: string;
  best_day_of_week: string[];
  level: 'easy' | 'intermediate' | 'hard';
}
