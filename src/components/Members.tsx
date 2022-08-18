import { AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Topics from "./Topics";
import Button from "./Button";

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="p-3 m-4 border-gray-400 border-[1px] rounded-md items-center min-w-[260px] max-w-[260px]">
      <Image
        src={`/images/members/${member.element}.png`}
        width={256}
        height={256}
      />
      <div>
        <h2 className="text-center">{member.name}</h2>
        <h3 className="text-secondary text-center text-4">{member.role}</h3>
        <div className="flex justify-center gap-4 mt-2">
          <a href={`mailto:${member.email}`}>
            <Button>
              <AiTwotoneMail /> Email
            </Button>
          </a>
          {member.linkedin && (
            <a href={`https://linkedin.com/in/${member.linkedin}`}>
              <Button>
                <AiFillLinkedin /> Linkedin
              </Button>
            </a>
          )}
        </div>
        <p className="leading-1 text-center mt-1">{member.quote}</p>
        <Topics key={member.name} topics={member.interests} />
      </div>
    </div>
  );
}

export default function Members({ members }: { members: Member[] }) {
  return (
    <div id="members" className="py-16 m-0 min-h-screen">
      <h1 className="text-3xl sm:text-5xl text-center font-extrabold my-4">
        Our Members
      </h1>
      <div className="flex items-center justify-center">
        <div className="overflow-x-scroll flex flex-nowrap md:grid md:grid-cols-3">
          {members.map((member) => (
            <MemberCard key={member.element} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
