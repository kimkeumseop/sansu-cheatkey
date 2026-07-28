import type { Metadata } from 'next';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

export const metadata: Metadata = {
  title: '기도터 예절과 산행 매너: 하지 말아야 할 것들',
  description:
    '사찰 기도처에서의 기본 예의, 다른 사람의 기도를 방해하지 않는 법, 산에서 지켜야 할 최소한의 규칙을 정리했습니다. 종교가 없어도 알아 두면 좋은 내용입니다.',
  alternates: { canonical: '/sansu/articles/prayer-etiquette' },
  openGraph: {
    type: 'article',
    title: '기도터 예절과 산행 매너: 하지 말아야 할 것들',
    description: '종교가 없어도 알아 두면 좋은 최소한의 규칙.',
    url: '/sansu/articles/prayer-etiquette',
  },
};

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.13"
      title={
        <>
          기도터 예절과 산행 매너:
          <br />
          하지 말아야 할 것들
        </>
      }
      ctaTitle="어느 기도처로 가야 할까요?"
      ctaDesc={
        <>
          소원 분야에 따라
          <br />
          어울리는 자리가 다릅니다.
        </>
      }
      ctaLabel="내 기도처 찾기"
    >
      <p>
        갓바위든 보리암이든, 이름난 기도처에 처음 가면 가장 신경 쓰이는 것이 &quot;내가 뭘 잘못하고 있는 건 아닐까&quot;
        하는 마음입니다. 결론부터 말하면 대부분의 사찰은 방문객에게 관대하고, 종교가 없다는 이유로 제지받는 일은 거의
        없습니다. 다만 그 공간이 누군가에게는 아주 절실한 자리라는 점만 기억하면 대부분의 예절은 자연스럽게 따라옵니다.
      </p>

      <H2 accent="border-amber-500">사찰에 들어설 때</H2>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">모자와 선글라스는 벗습니다.</strong> 법당 안에서는 물론이고, 불상 앞에서도
          벗는 것이 기본입니다.
        </li>
        <li>
          <strong className="text-gray-900">법당은 옆문으로 드나듭니다.</strong> 가운데 문은 전통적으로 예를 갖춘 출입구로
          여겨집니다. 모르고 지나쳐도 탓하는 사람은 없지만, 알고 있으면 좋습니다.
        </li>
        <li>
          <strong className="text-gray-900">신발은 가지런히.</strong> 좁은 암자일수록 신발이 엉키면 다음 사람이
          곤란해집니다.
        </li>
        <li>
          <strong className="text-gray-900">큰 소리로 대화하지 않습니다.</strong> 특히 통화는 밖으로 나와서 하세요.
        </li>
        <li>
          <strong className="text-gray-900">복장은 단정하면 충분합니다.</strong> 등산복 차림으로 참배하는 것은 전혀 문제가
          되지 않습니다.
        </li>
      </ul>

      <Note title="절을 꼭 해야 하나요?">
        하지 않아도 됩니다. 종교가 다르거나 방식이 낯설다면 조용히 서서 마음속으로 빌고 나와도 무례가 아닙니다. 반대로
        절을 하고 싶은데 방법을 모른다면, 앞사람의 동작을 따라 하되 서두르지 않으면 됩니다.
      </Note>

      <H2 accent="border-amber-500">다른 사람의 기도를 방해하지 않으려면</H2>
      <p>
        기도처에서 가장 흔한 갈등은 종교적 차이가 아니라 &apos;공간을 나누는 방식&apos;에서 생깁니다. 아래 다섯 가지만
        지켜도 충분합니다.
      </p>
      <ol className="list-decimal ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">기도 중인 사람의 앞을 가로지르지 않습니다.</strong> 뒤로 돌아가는 것이
          원칙입니다.
        </li>
        <li>
          <strong className="text-gray-900">사진 촬영은 사람이 없을 때만.</strong> 절하는 사람이 프레임에 들어가는 순간
          그것은 남의 가장 사적인 시간을 찍는 일이 됩니다. 촬영 금지 표시가 있는 곳에서는 당연히 찍지 않습니다.
        </li>
        <li>
          <strong className="text-gray-900">좋은 자리를 오래 차지하지 않습니다.</strong> 사람이 몰리는 시기에는 특히
          그렇습니다.
        </li>
        <li>
          <strong className="text-gray-900">동영상 촬영이나 라이브 방송은 하지 않습니다.</strong> 소리까지 담기면 주변
          사람의 기도 내용이 그대로 기록됩니다.
        </li>
        <li>
          <strong className="text-gray-900">남의 소원을 묻지 않습니다.</strong> 함께 간 사이라도 마찬가지입니다.
        </li>
      </ol>

      <H2 accent="border-amber-500">공양물과 시주</H2>
      <p>
        꼭 준비해야 하는 것은 아닙니다. 빈손으로 가도 됩니다. 준비한다면 아래 정도를 참고하세요.
      </p>
      <ul className="list-disc ml-5 space-y-2">
        <li>초, 향, 쌀, 과일이 일반적입니다. 대부분 현장에서 살 수 있습니다.</li>
        <li>육류와 술은 사찰에 가져가지 않습니다.</li>
        <li>시주 금액에 정해진 기준은 없습니다. 형편에 맞게 하면 됩니다.</li>
        <li>
          기도를 대신 올려 주는 유료 서비스나 부적 판매를 강하게 권하는 곳이 있다면, 부담을 느낄 필요 없이 거절해도
          됩니다.
        </li>
      </ul>

      <H2 accent="border-green-600">산에서 지켜야 할 최소한</H2>
      <p>기도처까지 가는 길 역시 남의 공간입니다. 산행 매너의 핵심은 짧습니다.</p>
      <div className="not-prose space-y-3 my-4">
        {[
          ['쓰레기는 전부 가지고 내려온다', '과일 껍질과 음식물도 포함입니다. 자연 분해된다는 말은 산에서는 잘 통하지 않고, 야생동물의 먹이 습성을 바꿉니다.'],
          ['올라오는 사람에게 길을 양보한다', '좁은 길에서는 내려가는 쪽이 비켜 서는 것이 관행입니다. 오르는 사람은 시야가 좁고 호흡이 가쁩니다.'],
          ['블루투스 스피커를 켜지 않는다', '산에서 가장 많은 민원이 나오는 항목입니다. 음악은 이어폰으로 들으세요.'],
          ['정해진 곳에서만 취사·흡연', '산에서의 불은 대부분 금지입니다. 산불 조심 기간에는 라이터 소지 자체가 제한되는 구역도 있습니다.'],
          ['야생 동식물을 채취하지 않는다', '국립공원 안에서는 나물이나 열매 채취가 법으로 금지되어 있고 과태료 대상입니다.'],
          ['드론은 허가 구역에서만', '국립공원 대부분이 비행 제한 구역입니다.'],
        ].map(([t, d], i) => (
          <div key={i} className="flex gap-3 border border-gray-100 rounded-2xl p-4">
            <span className="shrink-0 grid place-items-center w-6 h-6 rounded-lg bg-green-600 text-white text-[11px] font-bold">
              {i + 1}
            </span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">{t}</p>
              <p className="text-[13px] text-gray-600 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>

      <H2 accent="border-[#7C3AED]">기도터에서 자주 보이는 오해</H2>
      <div className="not-prose space-y-4">
        <Faq q="소원을 여러 개 빌면 안 되나요?">
          금지된 것은 아닙니다. 다만 갓바위처럼 &quot;한 가지 소원&quot;이라는 이야기가 붙은 곳에서는 하나만 비는 것이
          오랜 관습입니다. 실용적으로도 여러 개를 늘어놓는 것보다 하나를 구체적으로 정리하는 편이 마음에 남습니다.
        </Faq>
        <Faq q="기도하고 나면 뒤돌아보면 안 된다는 말이 있던데요?">
          지역과 사람에 따라 전해지는 이야기이고 통일된 규칙은 아닙니다. 다만 가파른 계단에서 뒤를 돌아보는 것은 실제로
          위험하니, 그 부분만큼은 지키는 편이 좋습니다.
        </Faq>
        <Faq q="다른 종교를 믿는데 사찰 기도처에 가도 되나요?">
          방문 자체를 막는 곳은 거의 없습니다. 문화유산으로 둘러보는 사람도 많습니다. 예를 갖추어 조용히 머물다 나오면
          충분합니다.
        </Faq>
        <Faq q="아이와 함께 가도 되나요?">
          됩니다. 다만 법당 안이나 좁은 기도 공간에서 뛰지 않도록 미리 일러 두세요. 아이가 지루해할 수 있으니 머무는
          시간을 짧게 잡는 편이 낫습니다.
        </Faq>
      </div>
    </ArticleShell>
  );
}
