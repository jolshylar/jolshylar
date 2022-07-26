import { AiFillInstagram } from "react-icons/ai";

export default function About() {
  const iconStyles = { width: 24, height: 24 };

  return (
    <div className="p-[20px] h-[600px] text-center bg-hero bg-no-repeat bg-center">
      <h1 className="font-bold text-3xl md:text-6xl mb-6 m-auto max-w-[1080px]">
        Jolshylar is a group of people dedicated to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-pink">
          beating closed-source software.
        </span>
      </h1>
      <div className="flex justify-center">
        <a href="https://www.instagram.com/jolshylar/">
          <button className="mt-10 text-2xl">
            <AiFillInstagram style={iconStyles} />
            <p>More</p>
          </button>
        </a>
      </div>
    </div>
  );
}
