import { AiTwotoneMail, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Interests from "./Interests";

const Member = ({ member }: Member) => {
  return (
    <div className="p-3 m-4 border-primary border-2 rounded-md items-center max-w-[260px]">
      <Image
        alt="member"
        src={`/images/members/${member.element}.png`}
        width={256}
        height={256}
      />
      <div>
        <h2 className="text-center">{member.name}</h2>
        <h3 className="text-orange text-center text-4">{member.role}</h3>
        <div className="flex justify-center mt-2">
          <a href={`mailto:${member.email}`}>
            <button>
              <AiTwotoneMail /> Email
            </button>
          </a>
          <a href={`https://instagram.com/${member.profile}`}>
            <button>
              <AiFillInstagram /> Instagram
            </button>
          </a>
        </div>
        <p className="leading-1 text-center mt-1">{member.quote}</p>
        <Interests key={member.name} member={member} />
      </div>
    </div>
  );
};

export default Member;
