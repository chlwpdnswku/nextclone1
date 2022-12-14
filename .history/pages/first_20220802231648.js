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
        {/* 여기서 props 값을넣으면 오류가나네 */}
        <h1>Project }</h1>
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
  // 서버쪽에서 찍히는 거
  console.log(`project : ${project2}`);
  return {
    // 여기에 프로젝트를  즉 데이터 파일들을 넣고 바깥으로넘기기
    // project2를 넣으면 오류가남
    props: { projects },
  };
}
