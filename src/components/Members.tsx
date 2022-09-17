import { IoLogoLinkedin } from "react-icons/io5";
import { HIGHLIGHT } from "../styles";
import Topics from "./Topics";

interface MemberProps {
  id: string;
  name: string;
  role: string;
  interests: string[];
  linkedin?: string;
}

export default function Members({ members }: { members: MemberProps[] }) {
  return (
    <div id="members">
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold py-4">Members</h1>
        <p className="text-xl">
          there is a plenty of people with different roles that invest their
          time in the product development.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-3">
          {members.length > 0 &&
            members.map((member) => (
              <div className="p-3 m-4 border-gray-400 border-[1px] rounded-md items-center max-w-[300px]">
                <div className="text-center">
                  <h1 className="text-2xl">{member.name}</h1>
                  <span className={HIGHLIGHT}>{member.role}</span>
                </div>
                {member.linkedin && (
                  <a
                    className="text-sm flex items-center gap-2 px-4 py-2 border rounded-xl w-max mx-auto my-2"
                    href={`https://linkedin.com/in/${member.linkedin}`}
                  >
                    <IoLogoLinkedin size={16} /> Linkedin
                  </a>
                )}
                <Topics key={member.name} topics={member.interests} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
