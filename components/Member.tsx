import { AiTwotoneMail, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Interests from "./Interests";

const Member = ({ member }: Member) => {
  return (
    <div className="p-3 m-4 border-[#282d35] border-2 rounded-[5px] items-center max-w-[260px]">
      <Image
        alt="member"
        src={`/images/members/${member.element}.png`}
        width={256}
        height={256}
      />
      <div className="content">
        <h2 className="text-center">{member.name}</h2>
        <h3 className="text-[#faac75] text-center text-4">{member.role}</h3>
        <div className="flex justify-center mt-2">
          <a href={`mailto:${member.email}`}>
            <button className="border-[1.5px] border-[#282d35] rounded-[10px] w-[120px] h-[30px] text-[#282d35] my-0 mx-[2px] hover:bg-[#282d35] hover:text-white flex items-center justify-center gap-2">
              <AiTwotoneMail /> Email
            </button>
          </a>
          <a href={`https://instagram.com/${member.profile}`}>
            <button className="border-[1.5px] border-[#282d35] rounded-[10px] w-[120px] h-[30px] text-[#282d35] my-0 mx-[2px] hover:bg-[#282d35] hover:text-white flex items-center justify-center gap-2">
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
