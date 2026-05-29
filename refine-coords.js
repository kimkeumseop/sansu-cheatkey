const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/mountains.json');

// 정밀 좌표 데이터 (주요 산 보정)
const COORDINATE_FIXES = {
  'gwanaksan': { lat: 37.4443, lng: 126.9634 },
  'palgongsan-gatbawi': { lat: 35.9863, lng: 128.7136 },
  'bukhansan': { lat: 37.6617, lng: 126.9926 },
  'jirisan-cheonwangbong': { lat: 35.3370, lng: 127.7306 },
  'seoraksan-daecheongbong': { lat: 38.1190, lng: 128.4658 },
  'hallasan-baekrokdam': { lat: 33.3617, lng: 126.5292 },
  'gyeryongsan': { lat: 36.3533, lng: 127.2183 },
  'mudeungsan': { lat: 35.1325, lng: 126.9902 },
  'taebaeksan': { lat: 37.0967, lng: 128.9142 },
  'songnisan': { lat: 36.5333, lng: 127.8833 },
  'maisan': { lat: 35.7602, lng: 127.4116 },
  'naejangsan': { lat: 35.4833, lng: 126.8833 },
  'dobongsan': { lat: 37.6994, lng: 127.0161 },
  'deogyusan': { lat: 35.8617, lng: 127.7464 },
  'gayasan': { lat: 35.8217, lng: 128.1183 },
  'woraksan': { lat: 36.8550, lng: 128.1064 },
  'sobaeksan': { lat: 36.8917, lng: 128.4833 },
  'juwangsan': { lat: 36.4022, lng: 129.1481 },
  'wolchulsan': { lat: 34.7583, lng: 126.7083 },
  'namamsan': { lat: 34.7411, lng: 127.9847 }, // 보리암(금산)
  'naksansa': { lat: 38.1250, lng: 128.6283 },
  'bomunsa': { lat: 37.6533, lng: 126.3008 },
  'hyangiram': { lat: 34.5933, lng: 127.8117 },
  'inwangsan': { lat: 37.5817, lng: 126.9583 },
  'guinsa': { lat: 37.0317, lng: 128.5217 },
  'tongdosa': { lat: 35.4853, lng: 129.0645 },
  'haeinsa': { lat: 35.8011, lng: 128.0972 },
  'songgwangsa': { lat: 35.0011, lng: 127.2756 },
  'bulguksa': { lat: 35.7894, lng: 129.3322 },
  'unmunsa': { lat: 35.6517, lng: 128.9500 },
};

try {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);

  data.mountains.forEach(m => {
    if (COORDINATE_FIXES[m.id]) {
      m.lat = COORDINATE_FIXES[m.id].lat;
      m.lng = COORDINATE_FIXES[m.id].lng;
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully refined coordinates in mountains.json');
} catch (err) {
  console.error('Error refining coordinates:', err);
  process.exit(1);
}
