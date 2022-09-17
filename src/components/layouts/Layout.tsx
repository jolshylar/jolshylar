import Head from "next/head";
import Footer from "../Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Jolshylar Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">{children}</main>
      <Footer />
    </>
  );
}
