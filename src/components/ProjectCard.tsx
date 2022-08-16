import { BiBookBookmark } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import Topics from "./Topics";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-3 m-4 border-[1px] border-gray-400 rounded-md items-center">
      <div className="repo-card" data-repo="jolshylar/jazbahana" />
      <div className="flex items-center gap-2 mx-1">
        <BiBookBookmark className="w-5 h-5" />
        <a href={project.homepage || project.html_url}>
          <h2 className="text-2xl font-bold text-primary">{project.name}</h2>
        </a>
        <span className="text-sm px-2 border-[1px] rounded-full">
          {project.private ? "Private" : "Public"}
        </span>
      </div>
      <p className="mx-1 my-2">{project.description}</p>
      <Topics topics={project.topics} />
      <div className="flex mt-2">
        <ul className="px-1 list-none flex items-center justify-start gap-4">
          <li className="flex items-center justify-center gap-1">
            <IoStar />
            <p>{project.stargazers_count}</p>
          </li>
          <li className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            {project.language}
          </li>
        </ul>
      </div>
    </div>
  );
}
