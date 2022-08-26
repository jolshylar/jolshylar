import { BiBookBookmark } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import Topics from "./Topics";
import H from "./layouts/Text";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-4 m-4 border-[1px] border-gray-400 rounded-md items-center min-w-[260px] max-w-[260px]">
      {/* Project Header */}
      <div className="flex items-center gap-2">
        <BiBookBookmark className="w-5 h-5" />
        <a href={project.homepage || project.html_url}>
          <H className="text-2xl">{project.name}</H>
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

export default function Projects({ repos }: { repos: Project[] }) {
  const projects = repos.filter((repo) => !repo.archived);
  return (
    <div id="projects">
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl text-center font-extrabold my-4">
        Our Projects
      </h1>
      {/* Project Cards */}
      <div className="flex items-center justify-center">
        <div className="overflow-x-scroll flex flex-nowrap md:grid md:grid-cols-3">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}
