import Scroll from "./layouts/Scroll";
import { HIGHLIGHT } from "../styles";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 gap-10"
    >
      {/* What is Jolshylar */}
      <div className="text-center max-w-[60ch] mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          What is Jolshylar?
        </h1>
        <p className="text-lg sm:text-2xl my-4">
          Jolshylar is a Kazakhstani{" "}
          <span className={HIGHLIGHT}>Software Development</span> team mostly
          focused on Web/Mobile Development.
        </p>
      </div>
      {/* Go to Members */}
      <Scroll href="#members">members</Scroll>
    </div>
  );
}

export default About;
