export default function ProjectItem({ data }) {
  return (
    <div>
      <h1>{data.properties.이름.title[0]?.plain_text}</h1>
    </div>
  );
}
