import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Jolshylar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </Layout>
  );
};

export default Home;
