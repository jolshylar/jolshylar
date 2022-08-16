import { AiFillInstagram } from "react-icons/ai";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-5 bg-no-repeat bg-center">
      <h1 className="text-3xl md:text-6xl mb-6 mx-auto max-w-[1080px]">
        Jolshylar is a group of nerds who{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          love creating open-source software
        </span>
      </h1>
      <div className="flex justify-center">
        <a href="https://www.instagram.com/jolshylar/">
          <button className="mt-4 text-2xl w-40 h-12">
            <AiFillInstagram style={{ width: 24, height: 24 }} />
            More
          </button>
        </a>
      </div>
    </div>
  );
}
