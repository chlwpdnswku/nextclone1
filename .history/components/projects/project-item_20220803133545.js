export default function ProjectItem({ data }) {
  // 외부에서데이터로넘어오면 텍스트를 정리해줌
  const title = data.properties.이름.title[0]?.plain_text;

  const github = data.properties.Github.url;

  return (
    <div className='p-6 m-3 bg-slate-800 rounded-md '>
      <h1>{title}</h1>
      {/* 링크 */}
      <a href={github}>깃허브 바로가기</a>
    </div>
  );
}
