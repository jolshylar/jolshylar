import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="flex flex-col p-5 justify-center items-center min-h-screen text-left">
      <h1 className="text-center text-5xl font-extrabold">Jolshylar</h1>
      <h1 className="my-4 text-center text-3xl font-extrabold mb-6 mx-auto max-w-[1080px]">
        a group of nerds who{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          love creating open-source software
        </span>
      </h1>
      <Link href="#about">
        <a className="text-2xl px-4 py-2 flex justify-center items-center gap-2 border-[1px] border-gray-400 rounded-xl">
          More
          <IoChevronDownSharp style={{ width: 24, height: 24 }} />
        </a>
      </Link>
    </div>
  );
}
