import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Project from "../components/Project";
import { useState, useEffect } from "react";

const Projects: NextPage = () => {
  const [githubData, setGithubData] = useState([]);

  const fetchRepos = () => {
    return fetch("https://api.github.com/users/jolshylar/repos")
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Projects | Jolshylar</title>
      </Head>
      <div className="bg-white p-5 m-0">
        <h1 className="text-5xl text-[#282d35] text-center font-bold">
          Our Projects
        </h1>
        <div className="flex items-center justify-center">
          <div className="overflow-x-scroll flex flex-nowrap md:grid md:grid-cols-3">
            {githubData.length > 0 &&
              githubData.map((project: any) => (
                <Project key={project.name} project={project} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
