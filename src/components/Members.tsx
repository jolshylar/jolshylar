import Image from "next/image";
import H from "./layouts/Text";
import Topics from "./Topics";

interface Member {
  element: string;
  name: string;
  role: string;
  interests: string[];
  linkedin?: string;
}

function MemberCard({ member }: { member: Member }) {
  return (
    <a
      href={member.linkedin && `https://linkedin.com/in/${member.linkedin}`}
      className="p-3 m-4 border-gray-400 border-[1px] rounded-md items-center min-w-[260px] max-w-[260px]"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={`/images/members/${member.element}.png`}
        width={256}
        height={256}
      />
      <div className="text-center">
        <h2>{member.name}</h2>
        <H>{member.role}</H>
      </div>
      <Topics key={member.name} topics={member.interests} />
    </a>
  );
}

export default function Members({ members }: { members: Member[] }) {
  return (
    <div id="members">
      <h1 className="text-3xl sm:text-5xl text-center font-extrabold py-4">
        Our Members
      </h1>
      <div className="flex items-center justify-center">
        <div className="overflow-x-scroll flex flex-nowrap md:grid md:grid-cols-3">
          {members.length > 0 &&
            members.map((member) => (
              <MemberCard key={member.element} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
}
