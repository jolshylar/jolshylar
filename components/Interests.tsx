function Interests({ member }: Member) {
  return (
    <div className="flex flex-wrap max-w-[260px]">
      {member.interests &&
        member.interests.map((interest) => {
          return (
            <small className="m-1 text-[0.7em] p-1 border-[1px] border-orange rounded-md">
              {interest}
            </small>
          );
        })}
    </div>
  );
}

export default Interests;
