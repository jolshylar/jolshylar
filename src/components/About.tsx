import { AiFillInstagram } from "react-icons/ai";

export default function About() {
  const iconStyles = { width: 24, height: 24 };

  return (
    <div className="p-5 h-[600px] bg-hero bg-no-repeat bg-center">
      <h1 className="text-3xl md:text-6xl mb-6 m-auto max-w-[1080px]">
        Jolshylar is a group of nerds who{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          love creating open-source software
        </span>
      </h1>
      <div className="flex justify-center">
        <a href="https://www.instagram.com/jolshylar/">
          <button className="mt-10 text-2xl w-40 h-12">
            <AiFillInstagram style={iconStyles} />
            <p>More</p>
          </button>
        </a>
      </div>
    </div>
  );
}
