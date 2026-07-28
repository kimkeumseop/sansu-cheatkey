import type { Metadata } from 'next';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

export const metadata: Metadata = {
  title: '팔공산 갓바위, 소원 하나는 들어준다는 기도처 완전 가이드',
  description:
    '합격 기도의 대명사 팔공산 갓바위. 관봉 석조여래좌상까지 가는 세 갈래 길과 계단, 기도하는 순서, 사람이 가장 몰리는 시기와 준비물을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/gatbawi-prayer' },
  openGraph: {
    type: 'article',
    title: '팔공산 갓바위, 소원 하나는 들어준다는 기도처 완전 가이드',
    description: '합격 기도의 대명사. 가는 길, 계단, 기도 순서까지.',
    url: '/sansu/articles/gatbawi-prayer',
  },
};

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.26"
      title={
        <>
          팔공산 갓바위,
          <br />
          소원 하나는 들어준다는 기도처
        </>
      }
      ctaTitle="합격운을 부르는 산, 갓바위만 있을까요?"
      ctaDesc={
        <>
          태어난 해와 소원 분야를 고르면
          <br />
          나에게 맞는 기도처를 찾아드립니다.
        </>
      }
      ctaLabel="내 합격 명산 찾기"
    >
      <p>
        수능이 다가오면 전국의 수험생 부모가 향하는 곳이 있습니다. 대구 동구와 경산 사이, 팔공산 관봉(冠峰) 정상에 앉아
        있는 석불 &mdash; <strong className="text-gray-900">갓바위</strong>입니다. 정식 이름은 관봉석조여래좌상이며 보물로
        지정되어 있습니다. 머리 위에 넓적한 판석을 얹은 모습이 갓을 쓴 것처럼 보여 갓바위라는 이름이 붙었습니다.
      </p>
      <p>
        이곳이 특별히 유명해진 이유는 &quot;정성껏 빌면 한 가지 소원은 꼭 들어준다&quot;는 이야기 때문입니다. 그중에서도
        시험 합격에 영험하다는 믿음이 널리 퍼져, 수능 100일 전부터는 새벽마다 계단에 사람이 끊이지 않습니다.
      </p>

      <H2 accent="border-amber-500">왜 합격 기도의 대명사가 되었나</H2>
      <p>
        풍수로 보면 팔공산은 대구 분지를 북쪽에서 감싸는 큰 산줄기이고, 갓바위가 있는 관봉은 그 줄기가 남쪽으로 뻗어 나온
        끝자락의 봉우리입니다. 사방이 트인 바위 봉우리 위에 불상이 앉아 있어, 기운이 한 점으로 모이는 자리로 해석해
        왔습니다. &apos;관(冠)&apos;이라는 이름 자체가 갓, 곧 벼슬과 명예를 뜻한다는 점도 합격·시험과 연결되는 배경이
        되었습니다.
      </p>
      <p>
        오성체로 분류하면 팔공산 일대는 바위가 드러난 험준한 능선이 이어지는 화(火)의 성질을 띱니다. 화형산의 기운은
        결단과 돌파를 상징하고, 이는 승부처를 앞둔 사람에게 어울리는 성질로 읽힙니다.
      </p>

      <H2 accent="border-amber-500">가는 길: 세 갈래 중 어디로</H2>
      <p>체력과 시간에 따라 선택이 갈립니다. 가장 많이 쓰이는 세 가지 경로입니다.</p>
      <div className="not-prose space-y-3">
        {[
          {
            n: '1',
            t: '갓바위 주차장 → 관암사 → 계단 (대구 방면)',
            d: '가장 대중적인 코스입니다. 주차장에서 올라 관암사를 지나면 정상까지 이어지는 돌계단이 시작됩니다. 왕복 1시간 30분~2시간 정도를 잡으면 넉넉합니다.',
          },
          {
            n: '2',
            t: '경산 선본사 방면',
            d: '경산 와촌 쪽에서 오르는 길입니다. 선본사까지 차로 올라갈 수 있어 실제 걷는 구간이 짧습니다. 다리가 불편한 어르신과 함께라면 이쪽이 부담이 덜합니다.',
          },
          {
            n: '3',
            t: '팔공산 종주 능선에서 접근',
            d: '갓바위만 보는 것이 아니라 산행을 겸하려는 경우입니다. 난이도와 소요 시간이 크게 올라가므로 초보자에게는 권하지 않습니다.',
          },
        ].map((c) => (
          <div key={c.n} className="flex gap-3 border border-gray-100 rounded-2xl p-4">
            <span className="shrink-0 grid place-items-center w-6 h-6 rounded-lg bg-[#7C3AED] text-white text-[11px] font-bold">
              {c.n}
            </span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">{c.t}</p>
              <p className="text-[13px] text-gray-600 leading-relaxed">{c.d}</p>
            </div>
          </div>
        ))}
      </div>

      <Note title="계단이 관건입니다">
        어느 길로 가든 마지막은 가파른 돌계단입니다. 흔히 1,365개(1년 365일에 빗댄 숫자)라고 이야기되며, 실제로도 쉬지
        않고 오르기는 어려운 경사입니다. 난간을 잡을 수 있는 쪽으로 붙어 천천히, 서너 번 나눠 오르는 것을 권합니다.
      </Note>

      <H2 accent="border-amber-500">기도하는 순서</H2>
      <p>
        정해진 규칙이 있는 것은 아니지만, 오래 다닌 분들이 지키는 일반적인 순서는 다음과 같습니다. 종교가 다르거나
        낯설다면 그냥 조용히 서 있다 내려와도 무방합니다.
      </p>
      <ol className="list-decimal ml-5 space-y-2">
        <li>관암사(또는 선본사)에서 잠시 숨을 고르고 마음을 정리합니다.</li>
        <li>계단을 오르며 서두르지 않습니다. 오르는 과정 자체를 기도로 여기는 사람이 많습니다.</li>
        <li>정상에 도착하면 먼저 자리를 잡고 앉거나 섭니다. 방석은 현장에 마련되어 있습니다.</li>
        <li>소원은 <strong className="text-gray-900">한 가지만</strong> 구체적으로 빕니다. 여럿을 늘어놓지 않는 것이 이곳의 오랜 관습입니다.</li>
        <li>내려올 때는 앞사람과 간격을 두고, 계단에서 뒤돌아보지 않도록 발밑에 집중합니다.</li>
      </ol>

      <H2 accent="border-amber-500">언제 가야 할까</H2>
      <div className="not-prose overflow-x-auto -mx-1 px-1 my-4">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-100 px-3 py-2 text-left font-bold text-gray-900">시기</th>
              <th className="border border-gray-100 px-3 py-2 text-left font-bold text-gray-900">혼잡도와 특징</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr>
              <td className="border border-gray-100 px-3 py-2 font-bold">수능 100일 전~수능일</td>
              <td className="border border-gray-100 px-3 py-2">1년 중 가장 붐빕니다. 새벽 4~6시에도 계단이 찹니다.</td>
            </tr>
            <tr>
              <td className="border border-gray-100 px-3 py-2 font-bold">정초·정월대보름</td>
              <td className="border border-gray-100 px-3 py-2">한 해 운을 비는 사람들로 매우 혼잡합니다.</td>
            </tr>
            <tr>
              <td className="border border-gray-100 px-3 py-2 font-bold">초하루·보름 (음력)</td>
              <td className="border border-gray-100 px-3 py-2">불교 기도일이라 평소보다 사람이 많습니다.</td>
            </tr>
            <tr>
              <td className="border border-gray-100 px-3 py-2 font-bold">평일 오전</td>
              <td className="border border-gray-100 px-3 py-2">가장 여유롭습니다. 조용히 머물고 싶다면 이 시간대입니다.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <H2 accent="border-amber-500">준비물</H2>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">미끄럽지 않은 신발</strong> &mdash; 돌계단이라 구두나 슬리퍼는 위험합니다.
          운동화 이상을 신으세요.
        </li>
        <li>
          <strong className="text-gray-900">여벌 상의</strong> &mdash; 관봉은 사방이 트여 있어 바람이 강합니다. 아래쪽과
          체감 온도가 크게 다릅니다.
        </li>
        <li>
          <strong className="text-gray-900">물</strong> &mdash; 계단 구간에는 매점이 없습니다.
        </li>
        <li>
          <strong className="text-gray-900">현금 약간</strong> &mdash; 초·공양물 등을 준비할 때 필요할 수 있습니다.
        </li>
        <li>
          <strong className="text-gray-900">무릎 보호대</strong> &mdash; 오를 때보다 내려올 때 무릎에 부담이 큽니다.
        </li>
      </ul>

      <H2 accent="border-amber-500">자주 묻는 질문</H2>
      <div className="not-prose space-y-4">
        <Faq q="불교 신자가 아니어도 괜찮나요?">
          네. 종교와 무관하게 찾는 분이 많습니다. 절을 하지 않아도 되고, 조용히 서서 마음속으로 빌어도 됩니다. 다른 분들의
          기도를 방해하지 않는 것이 유일한 원칙입니다.
        </Faq>
        <Faq q="꼭 새벽에 가야 효험이 있나요?">
          시간에 따라 효험이 다르다는 근거는 없습니다. 새벽에 사람이 몰리는 것은 조용한 시간에 정성을 들이려는 마음과,
          낮에는 사람이 너무 많다는 현실적인 이유 때문입니다.
        </Faq>
        <Faq q="아이나 어르신과 함께 가도 되나요?">
          계단 구간이 부담스럽다면 선본사 방면이 훨씬 수월합니다. 그래도 마지막 구간은 계단이므로, 시간을 넉넉히 잡고
          중간에 여러 번 쉬는 것을 전제로 계획하세요.
        </Faq>
        <Faq q="산불 조심 기간에도 갈 수 있나요?">
          갓바위 참배로는 대체로 개방되지만, 팔공산 능선 구간은 통제될 수 있습니다. 출발 전 팔공산국립공원 또는 관할
          지자체 공지를 확인하세요.
        </Faq>
      </div>
    </ArticleShell>
  );
}
