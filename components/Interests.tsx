interface InterestProps {
  member: InterestChildProps;
}

interface InterestChildProps {
  interests: [];
}

function Interests(props: InterestProps) {
  const member = props.member;

  return (
    <div className="flex flex-wrap max-w-[260px]">
      {member.interests &&
        member.interests.map((interest) => {
          return (
            <small className="m-[3px] text-[0.7em] p-[4px] border-[1px] border-[#faac75] rounded-[5px]">
              {interest}
            </small>
          );
        })}
    </div>
  );
}

export default Interests;
