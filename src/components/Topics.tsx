export default function Topics({ topics }: any) {
  return (
    <div className="flex flex-wrap max-w-[260px]">
      {topics &&
        topics.map((topic: string) => (
          <span className="m-1 text-[0.7em] p-1 border-[1px] border-orange rounded-md">
            {topic}
          </span>
        ))}
    </div>
  );
}
