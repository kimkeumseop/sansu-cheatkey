import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description:
    '개운산(GAEUNSAN)의 개인정보 수집·이용·보관, 쿠키 및 구글 애드센스 등 제3자 광고 쿠키 사용, 이용자 권리에 관한 안내입니다.',
  alternates: { canonical: '/sansu/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="p-6 pt-12 prose prose-sm max-w-none">
      <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>
      <p className="text-gray-600 mb-4">
        개운산(GAEUNSAN, 이하 &apos;서비스&apos;)은 이용자의 개인정보를 중요하게 생각하며, &quot;개인정보 보호법&quot; 및
        &quot;정보통신망 이용촉진 및 정보보호 등에 관한 법률&quot; 등 관련 법령을 준수합니다. 본 방침은 서비스가 어떤 정보를
        수집하고 어떻게 이용·보관·파기하는지를 설명합니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">1. 수집하는 개인정보 항목과 수집 방법</h2>
      <p className="text-gray-600 mb-4">
        서비스는 회원가입 절차가 없으며, 이름·연락처·주민등록번호 등 개인을 직접 식별할 수 있는 정보를 수집하지 않습니다.
      </p>
      <ul className="list-disc ml-5 text-gray-600 mb-4 space-y-1">
        <li>
          <strong>이용자가 직접 입력하는 정보</strong>: 태어난 해(띠 계산용), 소원·관심 분야. 이 값은 추천 결과를 계산하기
          위해 브라우저와 URL 파라미터 안에서만 사용되며 서버에 별도로 저장하지 않습니다.
        </li>
        <li>
          <strong>자동으로 생성·수집되는 정보</strong>: IP 주소, 브라우저 및 기기 정보, 방문 일시, 방문 페이지, 쿠키.
          서비스 운영·보안 및 광고 게재 과정에서 자동으로 생성됩니다.
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-8 mb-4">2. 개인정보의 이용 목적</h2>
      <ul className="list-disc ml-5 text-gray-600 mb-4 space-y-1">
        <li>사주 오행·띠 기반 맞춤 산 추천 결과 제공</li>
        <li>서비스 이용 통계 분석 및 콘텐츠 개선</li>
        <li>문의 응대 및 오류 대응</li>
        <li>광고 게재 및 광고 성과 측정</li>
      </ul>

      <h2 className="text-lg font-bold mt-8 mb-4">3. 쿠키(Cookie)의 사용</h2>
      <p className="text-gray-600 mb-4">
        서비스는 이용자 경험 개선과 광고 게재를 위해 쿠키를 사용합니다. 쿠키는 브라우저에 저장되는 아주 작은 텍스트
        파일입니다. 이용자는 언제든지 브라우저 설정(예: Chrome &gt; 설정 &gt; 개인정보 보호 및 보안)에서 쿠키 저장을
        거부하거나 삭제할 수 있습니다. 다만 쿠키를 차단하면 일부 기능이 정상 동작하지 않을 수 있습니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">4. 제3자 광고 및 애드센스 고지</h2>
      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 mb-4 space-y-3 text-gray-600">
        <p>
          본 서비스는 <strong className="text-gray-900">구글 애드센스(Google AdSense)</strong>를 포함한 제3자 광고 서비스를
          이용하고 있습니다.
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>구글을 포함한 제3자 광고 사업자는 쿠키를 사용하여 이용자의 이전 방문 기록을 바탕으로 광고를 게재합니다.</li>
          <li>
            구글이 광고 쿠키를 사용함으로써 구글과 그 파트너는 본 사이트 및 다른 사이트 방문 기록에 기반해 광고를 게재할 수
            있습니다.
          </li>
          <li>
            이용자는{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#7C3AED] font-bold underline"
            >
              구글 광고 설정
            </a>
            에서 맞춤 광고를 해제할 수 있습니다.
          </li>
          <li>
            제3자 공급업체의 광고 쿠키를 일괄 거부하려면{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#7C3AED] font-bold underline"
            >
              www.aboutads.info
            </a>
            를 방문하시기 바랍니다.
          </li>
          <li>
            구글의 데이터 처리 방식은{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#7C3AED] font-bold underline"
            >
              구글 파트너 사이트 정책
            </a>
            에서 확인할 수 있습니다.
          </li>
        </ul>
      </div>

      <h2 className="text-lg font-bold mt-8 mb-4">5. 개인정보의 제3자 제공 및 처리 위탁</h2>
      <p className="text-gray-600 mb-4">
        서비스는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만 아래와 같이 서비스 운영에 필요한 범위에서
        외부 사업자의 인프라를 이용하고 있으며, 이 과정에서 정보가 국외에 저장·처리될 수 있습니다.
      </p>
      <ul className="list-disc ml-5 text-gray-600 mb-4 space-y-1">
        <li>
          <strong>Vercel Inc.</strong> — 웹사이트 호스팅 및 접속 로그 처리 (미국)
        </li>
        <li>
          <strong>Google LLC</strong> — 광고 게재 및 성과 측정 (미국)
        </li>
        <li>
          <strong>Kakao Corp.</strong> — 지도 표시 및 공유 기능 (대한민국)
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-8 mb-4">6. 개인정보의 보유 및 파기</h2>
      <p className="text-gray-600 mb-4">
        이용자가 입력한 생년·관심 분야는 서버에 저장되지 않으며 브라우저를 닫으면 사라집니다. 자동 수집되는 접속 로그는
        서비스 운영·보안 목적으로 최대 1년간 보관한 뒤 지체 없이 파기합니다. 다만 관련 법령에서 별도 보존 기간을 정한 경우
        해당 기간 동안 보관합니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">7. 이용자의 권리와 행사 방법</h2>
      <p className="text-gray-600 mb-4">
        이용자는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요구할 수 있습니다. 아래 문의처로 요청하시면
        관련 법령이 정한 기간 내에 조치하고 결과를 알려드립니다. 또한 브라우저 설정을 통해 쿠키 수집을 직접 거부할 수
        있습니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">8. 만 14세 미만 아동의 개인정보</h2>
      <p className="text-gray-600 mb-4">
        서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.
        아동의 정보가 수집된 사실을 알게 된 경우 즉시 파기합니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">9. 개인정보 보호책임자 및 문의처</h2>
      <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 text-purple-900 mb-4">
        <p className="text-sm leading-relaxed">
          <strong>개인정보 보호책임자</strong>: 김금섭
          <br />
          <strong>이메일</strong>: support@gaeunsan.com
          <br />
          <span className="text-xs opacity-80">문의 접수 후 영업일 기준 2~3일 내에 회신드립니다.</span>
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        개인정보 침해에 대한 신고나 상담이 필요한 경우 개인정보침해신고센터(privacy.kisa.or.kr, 국번없이 118), 개인정보
        분쟁조정위원회(kopico.go.kr, 1833-6972) 등에 문의하실 수 있습니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">10. 방침의 변경</h2>
      <p className="text-gray-600 mb-4">
        본 방침의 내용이 추가·삭제·수정되는 경우 시행 최소 7일 전에 본 페이지를 통해 공지합니다.
      </p>

      <p className="mt-12 text-xs text-gray-400">
        공고일자: 2026년 7월 21일
        <br />
        시행일자: 2026년 7월 28일
      </p>
    </div>
  );
}
