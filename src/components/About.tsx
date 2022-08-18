import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import Highlight from "./Highlight";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen p-4 gap-10"
    >
      <div className="text-center max-w-[60ch] mx-auto">
        <h1 className="text-5xl font-extrabold">What is Jolshylar?</h1>
        <p className="text-2xl my-4">
          Jolshylar is a Kazakhstani <Highlight>Software Development</Highlight>{" "}
          team mostly focused on Web.
        </p>
        <p className="text-2xl my-4">
          Today, we have a little more than <Highlight>10 projects</Highlight>{" "}
          where each is trying to make the world a{" "}
          <Highlight>better place</Highlight>.
        </p>
      </div>
      <div className="text-center max-w-[60ch] mx-auto">
        <h1 className="text-5xl font-extrabold">Why Jolshylar?</h1>
        <p className="text-2xl my-4">
          Jolshylar comes from the Kazakh <Highlight>`road builders`</Highlight>
          , referencing the people who build their road to the future.
        </p>
        <p className="text-2xl my-4">
          Jolshylar is a team formed during local school hackathon in{" "}
          <Highlight>April 30th, 2022</Highlight>.
        </p>
        <p className="text-2xl my-4">
          We went to the hackathon with the project called{" "}
          <Highlight>Jazbahana</Highlight>, but our initial product was called{" "}
          <Highlight>Joldar</Highlight>, where our team name kicked in.
        </p>
        <p className="text-2xl my-4">
          Today, our team consists of <Highlight>10 members</Highlight>, where
          everybody has their own role and team spirit.
        </p>
      </div>
      <Link href="#members">
        <a className="text-2xl px-4 py-2 flex justify-center items-center gap-2 border-[1px] border-gray-400 rounded-xl">
          Members
          <IoChevronDownSharp style={{ width: 24, height: 24 }} />
        </a>
      </Link>
    </div>
  );
}

export default About;
