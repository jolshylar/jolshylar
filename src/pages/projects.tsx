import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Project from "../components/ProjectCard";

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/jolshylar/repos");
  const repos = await res.json();

  return {
    props: {
      repos,
    },
  };
}

const Projects: NextPage = ({ repos }: any) => {
  return (
    <Layout>
      <Head>
        <title>Projects | Jolshylar</title>
      </Head>
      <div className="p-5 m-0">
        <h1 className="text-5xl text-center font-bold my-4">Our Projects</h1>
        <div className="flex items-center justify-center">
          <div className="overflow-x-scroll flex flex-nowrap md:grid md:grid-cols-3">
            {repos &&
              repos.map((project: any) => (
                <Project key={project.name} project={project} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
