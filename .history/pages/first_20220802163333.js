import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../confog';

function first() {
  return (
    <>
      <Layout>
        <Head>
          <title>타이틀은 별로</title>
          <meta name='description' content='go1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1>Project</h1>
      </Layout>
    </>
  );
}

export default first;

// 데이터 가져오기
// 처음에 빌드될때(빌드타임 때 호출) 데이터를이미가져온 다음에 화면에 랜더링을함

export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };
  // 비동기로 가져오니까 res 로받아주고 다받아질때까지 기다리는 것 변수로받을때 백틱을 쓰고 config로 변수로 하나만들어서 받아옴
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  // 응답값을 json으로 불러와준다.
  const projects = await res.json();
  // 신기한게이걸찍으면 데이터가 들어오는것을 알 수가있다.
  // console.log(projects);
  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // .catch((err) => console.error(err));

  // config.example 을만들어서 project들의 id값을을 가져오기

  const projectsIds = projects.results.map((a) => a.id);

  console.log(`projectsIds:${projectsIds}`);

  return {
    props: {}, // will be passed to the page component as props
  };
}
