### create-next-app 으로 설치하면
<li>1. 컴파일과 번들링이 자동으로 된다.(webpack 과 babel)</li>
<li>2. 자동 리프레쉬 기능으로 수정하면 홤녀에 바로 반영된다.</li>
<li>3. 서버사이드 렌더링이 지원된다.</li>
<li>4. 스태틱 파일을 지원한다.</li>

Next js 모든 페이지 사전 렌더링 (Pre-rendering)
기본적으로 모든 페이지 pre-render
사전에 HTML 파일들을 만든다는 의미
더 좋은 퍼포먼스 
검색엔진최적화 (SEO)

1. Static Generation : 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 html 파일을 생성하는가

[정적 생성]
- 프로젝트가 빌드하는 시점에 html파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths

미리 만들어 두는 경우
<li>마케팅 페이지</li>
<li>블로그 게시물</li>
<li>제품 목록</li>
<li>도움말, 문서</li>

[서버사이드 랜더링] 은 매 요청마다 html을 생성
- 항상 최신 상태 유지
- getServerSideProps

<li>관리자 페이지</li>
<li>분석 차트</li>