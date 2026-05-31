'use client';

interface MapProps {
  lat: number;
  lng: number;
  level?: number;
  className?: string;
  mountainName: string;
}

export default function GoogleMap({ lat, lng, level = 15, className = "w-full h-64", mountainName }: MapProps) {
  // Google Maps Embed URL (No API Key version using search query)
  // Note: For production use, it's better to use the formal Embed API with a key.
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=ko&z=${level}&t=&ie=UTF8&iwloc=&output=embed`;
  const externalUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-md border border-gray-100 ${className}`}>
      <iframe
        title={`${mountainName} 지도`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      
      <a 
        href={externalUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 z-10 bg-white/90 px-2 py-1.5 rounded-lg text-[9px] font-black text-[#7C3AED] border border-purple-100 shadow-sm"
      >
        구글 지도로 보기
      </a>
    </div>
  );
}
