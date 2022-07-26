import Head from "next/head";
import Layout from "../components/Layout";
import MemberCard from "../components/MemberCard";
import data from "../data/members.json";

export default function Members() {
  return (
    <Layout>
      <Head>
        <title>Members | Jolshylar</title>
      </Head>
      <div className="p-5 m-0">
        <h1 className="text-5xl text-center font-bold my-4">Our Members</h1>
        <div className="flex items-center justify-center">
          <div className="overflow-x-scroll flex flex-nowrap md:grid md:grid-cols-3">
            {data.map((member) => (
              <MemberCard key={member.element} member={member} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
