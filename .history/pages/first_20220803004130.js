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

        <h1 className='text-4xl font-bold sm:text-6xl'>
          총 프로젝트 :
          {/* props에 projects 만 찍으면 오류가걸림 왜그런지는나중에알기 */}
          <span className='pl-4 text-blue-500'>{projects.results.length}</span>
        </h1>
        {/* 오류생기는데 이거 */}
        {projects.results.map((a) => (
          <h1>{a.properties.이름.title[0]?.plain_text}</h1>
        ))}
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
    // project2를 넣으면 오류가남 프로젝트 자체를넘김
    props: { projects },
  };
}
