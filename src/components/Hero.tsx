import Image from "next/image";
import Scroll from "./layouts/Scroll";
import { Gradient } from "./layouts/Text";

export default function Hero() {
  return (
    <div className="flex flex-col p-5 justify-center items-center min-h-screen text-left">
      <Image src="/images/logo.png" height={80} width={300} />
      <h1 className="my-4 text-center text-3xl font-extrabold mb-6 mx-auto max-w-[1080px]">
        a group of nerds who{" "}
        <Gradient>love creating open-source software</Gradient>
      </h1>
      <Scroll href="#about">more</Scroll>
    </div>
  );
}
