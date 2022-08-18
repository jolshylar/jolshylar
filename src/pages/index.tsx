import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
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

const Home: NextPage = ({ repos }: any) => {
  return (
    <Layout>
      <Head>
        <title>Jolshylar Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Members members={members} />
      <Projects repos={repos} />
    </Layout>
  );
};

export default Home;
