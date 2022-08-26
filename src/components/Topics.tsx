export default function Topics({ topics }: { topics: string[] }) {
  return (
    <div className="flex flex-wrap justify-center">
      {topics &&
        topics.map((topic) => (
          <span
            key={topic}
            className="m-1 text-xs p-1 border-[1px] border-orange-400 rounded-md"
          >
            {topic}
          </span>
        ))}
    </div>
  );
}
