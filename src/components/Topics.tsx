export default function Topics({ topics }: { topics: string[] }) {
  return (
    <div className="flex flex-wrap">
      {topics &&
        topics.map((topic) => (
          <span
            key={topic}
            className="m-1 text-xs p-1 border-[1px] border-secondary rounded-md"
          >
            {topic}
          </span>
        ))}
    </div>
  );
}
