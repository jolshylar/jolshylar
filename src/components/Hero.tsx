import Image from "next/image";
import { GRADIENT } from "../styles";
import Scroll from "./layouts/Scroll";

export default function Hero() {
  return (
    <div className="flex flex-col p-5 justify-center items-center min-h-screen text-left">
      <Image src="/images/logo.png" height={80} width={300} />
      <h1 className="my-4 text-center text-3xl font-extrabold mb-6 mx-auto max-w-[1080px]">
        a group of nerds who{" "}
        <span className={GRADIENT}>love creating open-source software</span>
      </h1>
      <Scroll href="#about">more</Scroll>
    </div>
  );
}
