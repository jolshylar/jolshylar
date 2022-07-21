import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

function Project({ project }: any) {
  return (
    <div className="p-[1vw] m-[2vw] border-2 border-gray-800 rounded text-center max-w-[260px]">
      <Image
        src={`/images/previews/${project.name}.png`}
        width={256}
        height={256}
      />
      <div>
        <h2>{project.name}</h2>
        <div>
          <ul className="p-0 list-none flex items-center justify-center gap-4">
            <li className="flex items-center gap-1">
              Stars: {project.stargazers_count} <AiOutlineStar />
            </li>
            <li>Lang: {project.language}</li>
          </ul>
        </div>
        <a
          className="flex justify-center my-2"
          href={project.homepage || project.html_url}
        >
          <button className="flex items-center justify-center bg-transparent border-2 border-[#282d35] rounded-3xl w-[124px] h-[30px] text-[#282d35] no-underline hover:text-white hover:bg-[#282d35] hover:duration-500">
            <BiLinkExternal /> Visit
          </button>
        </a>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Project;
