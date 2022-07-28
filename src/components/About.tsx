import { AiFillInstagram } from "react-icons/ai";

export default function About() {
  return (
    <div className="p-5 h-[600px]">
      <h1 className="text-3xl md:text-6xl mb-6 m-auto max-w-[1080px]">
        Jolshylar was a group of nerds who{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-primary to-secondary">
          loved creating open-source software
        </span>
      </h1>
      <div className="flex justify-center">
        <a className="mt-10" href="https://www.instagram.com/p/CghXcwisARk/">
          <button className="text-2xl w-40 h-12">
            <AiFillInstagram style={{ width: 24, height: 24 }} />
            More
          </button>
        </a>
      </div>
    </div>
  );
}
