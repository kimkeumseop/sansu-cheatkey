export default function PrivacyPage() {
  return (
    <div className="p-6 pt-12 prose prose-sm max-w-none">
      <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>
      <p className="text-gray-600 mb-4">
        GAEUNSAN(이하 &apos;회사&apos;)은 이용자의 개인정보를 중요시하며, &quot;개인정보 보호법&quot; 및 관련 법령을 준수하고 있습니다.
      </p>
      
      <h2 className="text-lg font-bold mt-8 mb-4">1. 개인정보의 수집 및 이용 목적</h2>
      <p className="text-gray-600 mb-4">
        회사는 다음의 목적을 위하여 최소한의 개인정보를 수집하고 있습니다. 수집된 개인정보는 다음의 목적 이외의 용도로는 사용되지 않습니다.
      </p>
      <ul className="list-disc ml-5 text-gray-600 mb-4">
        <li>서비스 제공 및 운명 맞춤 콘텐츠 추천</li>
        <li>사용자 문의 응대 및 서비스 개선</li>
      </ul>

      <h2 className="text-lg font-bold mt-8 mb-4">2. 수집하는 개인정보 항목</h2>
      <p className="text-gray-600 mb-4">
        회사는 서비스 제공을 위해 다음과 같은 항목을 수집할 수 있습니다.
      </p>
      <ul className="list-disc ml-5 text-gray-600 mb-4">
        <li>필수항목: 태어난 연도, 관심 분야</li>
        <li>자동수집항목: IP 주소, 쿠키, 방문 기록 등</li>
      </ul>

      <h2 className="text-lg font-bold mt-8 mb-4">3. 개인정보의 보유 및 이용 기간</h2>
      <p className="text-gray-600 mb-4">
        이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 법령의 규정에 의하여 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">4. 제3자 제공 및 위탁</h2>
      <p className="text-gray-600 mb-4">
        회사는 이용자의 동의 없이 개인정보를 외부에 제공하거나 위탁하지 않습니다. 단, 구글 애드센스 등 광고 서비스를 위해 비식별화된 정보가 활용될 수 있습니다.
      </p>

      <p className="mt-12 text-xs text-gray-400">
        시행일자: 2026년 5월 31일
      </p>
    </div>
  );
}
