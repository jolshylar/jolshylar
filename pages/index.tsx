import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import About from "../components/About";
import Links from "../components/Links";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Jolshylar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <hr />
      <Links />
    </Layout>
  );
};

export default Home;
