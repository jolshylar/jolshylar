import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Members from "../components/Members";
import members from "../data/members.json";

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/jolshylar/repos");
  const repos = await response.json();
  return { props: { repos } };
}

export default function Home({ repos }: { repos: Project[] }) {
  return (
    <>
      <Hero />
      <About />
      <Members members={members} />
      <Projects repos={repos} />
    </>
  );
}
