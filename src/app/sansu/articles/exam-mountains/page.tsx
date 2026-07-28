import type { Metadata } from 'next';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

export const metadata: Metadata = {
  title: '합격 기원 명산 5곳: 시험을 앞두고 어디로 가야 할까',
  description:
    '갓바위, 관악산 연주대, 북한산, 계룡산, 팔공산 동화사 — 시험 유형별로 어울리는 산과 방문 시기, 무리하지 않는 산행 계획을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/exam-mountains' },
  openGraph: {
    type: 'article',
    title: '합격 기원 명산 5곳: 시험을 앞두고 어디로 가야 할까',
    description: '시험 유형별로 어울리는 산과 방문 시기.',
    url: '/sansu/articles/exam-mountains',
  },
};

const PLACES = [
  {
    n: '1',
    name: '팔공산 갓바위',
    region: '대구 동구 · 경북 경산',
    element: '화(火)',
    fit: '수능, 국가고시처럼 결과가 하루에 판가름 나는 시험',
    why: '“정성껏 빌면 한 가지 소원은 들어준다”는 이야기로 전국에서 가장 잘 알려진 합격 기도처입니다. 관봉(冠峰)이라는 이름 자체가 갓, 곧 벼슬과 명예를 뜻합니다.',
    tip: '수능 100일 전부터는 새벽에도 붐빕니다. 조용히 기도하려면 평일 오전을 노리세요. 마지막 구간의 가파른 돌계단이 관건입니다.',
  },
  {
    n: '2',
    name: '관악산 연주대',
    region: '서울 관악 · 경기 안양·과천',
    element: '화(火)',
    fit: '재수·장수생, 오래 준비했는데 결과가 안 나오는 경우',
    why: '불꽃처럼 갈라진 암릉이 이어지는 전형적인 화형산입니다. 정체된 흐름을 흔들어 깨우는 기운으로 해석해 왔습니다. 절벽 위 응진전은 같은 소원을 세 번 빌면 이뤄진다는 이야기가 전해집니다.',
    tip: '수도권에서 접근성이 가장 좋습니다. 다만 사당능선·팔봉능선은 바위 구간이 많으니, 기도가 목적이라면 과천향교 코스가 무난합니다.',
  },
  {
    n: '3',
    name: '북한산 승가사 · 문수봉 일대',
    region: '서울 · 경기 고양',
    element: '화(火) · 금(金)',
    fit: '면접, 임용, 승진 시험처럼 사람에게 평가받는 시험',
    why: '서울을 감싸는 조종산(祖宗山)으로, 조선 도읍의 배경이 된 산입니다. 명예와 귀인을 상징하는 기운이 함께 읽히는 자리로 여겨집니다.',
    tip: '코스가 매우 다양합니다. 체력이 부담되면 승가사까지만 다녀오는 것으로도 충분합니다.',
  },
  {
    n: '4',
    name: '계룡산 갑사 · 동학사',
    region: '충남 공주 · 계룡',
    element: '목(木) · 화(火)',
    fit: '장기전 시험, 공부의 지구력이 필요한 경우',
    why: '예로부터 기도발이 세다고 알려진 산입니다. 능선의 실루엣이 위로 뻗은 형태를 이루는 구간이 있어 학문과 문필의 기운으로 해석되기도 합니다.',
    tip: '갑사와 동학사를 잇는 코스가 대표적입니다. 계곡을 끼고 있어 여름에도 비교적 시원합니다.',
  },
  {
    n: '5',
    name: '남산 (경주 남산)',
    region: '경북 경주',
    element: '토(土)',
    fit: '마음이 흔들릴 때, 시험 직전 안정이 필요한 경우',
    why: '산 전체가 노천 박물관이라 불릴 만큼 석불과 마애불이 흩어져 있습니다. 기운이 세다기보다 차분하게 가라앉히는 자리로 이야기됩니다.',
    tip: '난이도가 낮아 시험 직전에도 부담이 적습니다. 하루 전 컨디션 관리 목적이라면 이쪽이 적합합니다.',
  },
];

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.22"
      title={
        <>
          합격 기원 명산 5곳:
          <br />
          시험을 앞두고 어디로 가야 할까
        </>
      }
      ctaTitle="내 사주에 맞는 합격 명산은?"
      ctaDesc={
        <>
          태어난 해와 소원 분야를 고르면
          <br />
          어울리는 산을 바로 찾아드립니다.
        </>
      }
      ctaLabel="합격 명산 추천받기"
    >
      <p>
        시험을 앞두고 산을 찾는 것은 오래된 풍습입니다. 합격을 보장하는 장소가 있어서가 아니라, 준비 기간이 길어질수록
        마음이 무너지기 쉽고 그것을 다잡는 의식이 필요하기 때문입니다. 몇 시간 걸어 올라가 한 가지만 빌고 내려오는
        과정은, 흩어진 각오를 한 문장으로 정리하는 시간이기도 합니다.
      </p>
      <p>
        아래는 전통적으로 합격·명예와 연결되어 온 다섯 곳입니다. 시험의 성격에 따라 어울리는 산이 다릅니다.
      </p>

      {PLACES.map((p) => (
        <section key={p.n} className="not-prose border border-gray-100 rounded-[2rem] p-6 my-6 shadow-sm">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="grid place-items-center w-6 h-6 rounded-lg bg-[#7C3AED] text-white text-[11px] font-bold shrink-0">
              {p.n}
            </span>
            <h2 className="text-lg font-bold text-gray-900">{p.name}</h2>
          </div>
          <p className="text-[11px] font-bold text-gray-400 mb-4 tracking-wide">
            {p.region} · {p.element}
          </p>

          <div className="space-y-3 text-[14px] text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">이런 시험에</strong>
              <br />
              {p.fit}
            </p>
            <p>
              <strong className="text-gray-900">왜 이곳인가</strong>
              <br />
              {p.why}
            </p>
            <p className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-[13px] text-gray-600">
              <strong className="text-gray-800">실전 팁</strong>
              <br />
              {p.tip}
            </p>
          </div>
        </section>
      ))}

      <H2>언제 가는 것이 좋을까</H2>
      <p>시기 선택에서 가장 흔한 실수는 &quot;시험 직전에 큰맘 먹고 멀리 다녀오는 것&quot;입니다.</p>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">100일 전후</strong> &mdash; 각오를 세우기에 가장 좋은 시점입니다. 체력적으로도
          여유가 있습니다.
        </li>
        <li>
          <strong className="text-gray-900">한 달 전</strong> &mdash; 슬럼프가 오는 시기입니다. 짧은 코스로 다녀오면 환기에
          도움이 됩니다.
        </li>
        <li>
          <strong className="text-gray-900">일주일 이내</strong> &mdash; 장거리 이동과 긴 산행은 피하세요. 근육통과 피로가
          시험 당일까지 남습니다. 가까운 낮은 산으로 짧게 다녀오는 정도가 적당합니다.
        </li>
      </ul>

      <Note title="가족이 대신 가는 경우">
        수험생 본인은 공부해야 하니 부모가 대신 다녀오는 경우가 많습니다. 전통적으로도 이는 자연스러운 방식으로 여겨져
        왔습니다. 다만 대신 다녀왔다는 사실을 수험생에게 부담스럽게 전달하지 않는 편이 좋습니다. 정성이 압박이 되면
        역효과입니다.
      </Note>

      <H2>기도만큼 중요한 것</H2>
      <p>
        어떤 산을 골랐든 이 부분은 같습니다. 산행 자체가 무리가 되면 얻는 것보다 잃는 것이 큽니다.
      </p>
      <ul className="list-disc ml-5 space-y-2">
        <li>일몰 2시간 전에는 하산을 시작합니다.</li>
        <li>새 등산화를 시험 직전에 처음 신지 않습니다. 물집은 생각보다 오래 갑니다.</li>
        <li>수면 시간을 깎아 새벽 산행을 강행하지 않습니다.</li>
        <li>봄·가을 산불 조심 기간에는 통제 구간이 생기므로 출발 전 확인이 필요합니다.</li>
      </ul>

      <H2>자주 묻는 질문</H2>
      <div className="not-prose space-y-4">
        <Faq q="꼭 유명한 산이어야 하나요?">
          그렇지 않습니다. 오히려 집 근처의 산을 정해 두고 꾸준히 오르는 편이 실질적입니다. 중요한 것은 장소의 유명세가
          아니라 반복되는 루틴입니다.
        </Faq>
        <Faq q="몇 번을 가야 하나요?">
          정해진 횟수는 없습니다. 흔히 세 번이나 백일이라는 말이 쓰이지만, 이는 정성을 이어 가라는 뜻에 가깝습니다.
          한 번 다녀오고 마음이 정리됐다면 그것으로 충분합니다.
        </Faq>
        <Faq q="비 오는 날 가도 되나요?">
          바위가 많은 산은 젖으면 매우 미끄럽습니다. 관악산이나 북한산의 암릉 구간은 비 예보가 있으면 일정을 미루세요.
        </Faq>
      </div>
    </ArticleShell>
  );
}
