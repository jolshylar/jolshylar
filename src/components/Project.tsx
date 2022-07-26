import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import Topics from "./Topics";

export default function Project({ project }: any) {
  return (
    <div className="p-3 m-4 border-2 border-primary rounded-md items-center text-center max-w-[260px] min-w-[260px]">
      <Image
        src={`/images/previews/${project.name}.png`}
        width={256}
        height={256}
      />
      <div>
        <h2 className="text-center">{project.name}</h2>
        <div className="flex justify-center mt-2">
          <ul className="p-0 list-none flex items-center justify-center gap-4">
            <li className="flex items-center gap-1 bg-bg">
              Stars: {project.stargazers_count} <AiOutlineStar />
            </li>
            <li className="bg-bg">Lang: {project.language}</li>
          </ul>
        </div>
        <a
          className="flex justify-center my-2"
          href={project.homepage || project.html_url}
        >
          <button>
            <BiLinkExternal /> Visit
          </button>
        </a>
        <p>{project.description}</p>
        <Topics topics={project.topics} />
      </div>
    </div>
  );
}
