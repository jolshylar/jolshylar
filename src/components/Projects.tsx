import { BiBookBookmark } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import { HIGHLIGHT } from "../styles";
import Topics from "./Topics";

export interface ProjectProps {
  name: string;
  description: string;
  stargazers_count: number;
  archived: boolean;
  private: boolean;
  language: string;
  homepage: string;
  html_url: string;
  topics: string[];
}

function Project({ project }: { project: ProjectProps }) {
  return (
    <div className="p-4 m-4 border-[1px] border-gray-400 rounded-md items-center">
      {/* Project Header */}
      <div className="flex items-center gap-2">
        <BiBookBookmark className="w-5 h-5" />
        <a href={project.homepage || project.html_url}>
          <span className={`${HIGHLIGHT} text-2xl`}>{project.name}</span>
        </a>
        <span className="text-sm px-2 border-[1px] rounded-full">
          {project.private ? "Private" : "Public"}
        </span>
      </div>
      {/* Project Details */}
      <p className="my-2">{project.description}</p>
      <Topics topics={project.topics} />
      <div className="flex items-center gap-4 my-2">
        <div className="flex items-center justify-center gap-1">
          <IoStar />
          <p>{project.stargazers_count}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          {project.language}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects }: { projects: ProjectProps[] }) {
  const data = projects.filter((repo) => !repo.archived);
  return (
    <div id="projects">
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl text-center font-extrabold my-4">
        Our Projects
      </h1>
      {/* Project Cards */}
      <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-3">
          {data.length > 0 &&
            data.map((project) => (
              <Project key={project.name} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}
