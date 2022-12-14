import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../confog';
import ProjectItem from '../components/projects/project-item';
function first({ projects }) {
  // 두번째로 들어올때 클라이언트 : 브라우저에서 진행이 된다.
  // console.log(projects);
  return (
    <>
      <Layout className='flex flex-col items-center justify-center'>
        <Head>
          <title>타이틀은 별로</title>
          <meta name='description' content='go1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {/* 가면갈수록 작아지는 것 */}
        <h1 className='text-4xl font-bold sm:text-6xl'>
          총 프로젝트 :
          {/* props에 projects 만 찍으면 오류가걸림 왜그런지는나중에알기 */}
          <span className='pl-4 text-blue-500'>{projects.results.length}</span>
        </h1>
        {/* 오류생기는데 이거 */}
        <div className='grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 sm:w-full'>
          {projects.results.map((a) => (
            // <h1>{a.properties.이름.title[0]?.plain_text}</h1>
            //데이터로 들어가는 페이지가 이거라서 여기에 적어줌
            //또한 고유의 키값을 정해줘야되는데 a.id값이그냥 고유한값음
            <ProjectItem key={a.id} data={a} />
          ))}
        </div>
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
    body: JSON.stringify({
      // 정렬방법 오류 나중에 수정하기
      sorts: [
        {
          property: '이름',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
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
