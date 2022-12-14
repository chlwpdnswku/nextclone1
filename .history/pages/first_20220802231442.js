import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../confog';

function first({ projects }) {
  // 두번째로 들어올때 클라이언트 : 브라우저에서 진행이 된다.
  // console.log(projects);
  return (
    <>
      <Layout>
        <Head>
          <title>타이틀은 별로</title>
          <meta name='description' content='go1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1>Project : {projects}</h1>
      </Layout>
    </>
  );
}

export default first;

// 첫번째 데이터 로 안에읃ㄹ
export async function getStaticProps(context) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      // 이거 버전이 너무달라서 힘듬
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  // 문제 해결 !
  const project2 = projects.results.map(
    (aProject) => aProject.properties.이름.title[0]?.plain_text
  );

  console.log(`project : ${project2}`);
  return {
    // 여기에 프로젝트를  즉 데이터 파일들을 넣고 바깥으로넘기기
    // project2를 넣으면 오류가남
    props: { projects },
  };
}

// // 데이터 가져오기
// // 처음에 빌드될때(빌드타임 때 호출) 데이터를이미가져온 다음에 화면에 랜더링을함
// // 1.번 빌드시간에 서버에서하는부분이고
// export async function getServerSideProps() {
//   const options = {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Notion-Version': '2022-02-22',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${TOKEN}`,
//     },
//     body: JSON.stringify({ page_size: 100 }),
//   };
//   // 비동기로 가져오니까 res 로받아주고 다받아질때까지 기다리는 것 변수로받을때 백틱을 쓰고 config로 변수로 하나만들어서 받아옴
//   const res = await fetch(
//     `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
//     options
//   );

//   // 응답값을 json으로 불러와준다.
//   const projects = await res.json();
//   // 신기한게이걸찍으면 데이터가 들어오는것을 알 수가있다.
//   // console.log(projects);

//   // config.example 을만들어서 project들의 id값을을 가져오기

//   const project2 = projects.results.map(
//     (aProject) => aProject.properties.이름.title
//   );

//   console.log(`project2: ${project2}`);

//   return {
//     props: { project2 }, // will be passed to the page component as props
//   };
// }
