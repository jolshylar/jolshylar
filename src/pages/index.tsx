import Hero from "../components/Hero";
import About from "../components/About";
import Projects, { ProjectProps } from "../components/Projects";
import Members from "../components/Members";
import members from "../data/members.json";

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/jolshylar/repos");
  const projects = await response.json();
  return { props: { projects } };
}

export default function Home({ projects }: { projects: ProjectProps[] }) {
  return (
    <>
      <Hero />
      <About />
      <Members members={members} />
      <Projects projects={projects} />
    </>
  );
}
