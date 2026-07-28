/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * 루트(/)를 리다이렉트가 아닌 rewrite로 처리한다.
   *
   * 예전에는 src/app/page.tsx에서 redirect('/sansu')를 했는데, 그러면 / 요청이
   * 307을 반환한다. Search Console은 속성 URL을 직접 가져와 200 본문에서
   * 소유권 확인 태그를 찾기 때문에 이 리다이렉트 때문에 확인이 실패했다.
   *
   * rewrite는 URL을 / 로 유지한 채 /sansu 라우트를 200으로 렌더한다.
   * 중복 색인은 루트 레이아웃의 alternates.canonical('/sansu')가 막아 준다.
   */
  async rewrites() {
    return [{ source: '/', destination: '/sansu' }];
  },
};

export default nextConfig;
