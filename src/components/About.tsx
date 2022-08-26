import H from "./layouts/Text";
import Scroll from "./layouts/Scroll";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 gap-10"
    >
      {/* What is Jolshylar */}
      <div className="max-w-[60ch] mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          What is Jolshylar?
        </h1>
        <p className="text-lg sm:text-2xl my-4">
          Jolshylar is a Kazakhstani <H>Software Development</H> team mostly
          focused on Web/Mobile Development.
        </p>
      </div>
      {/* Why Jolshylar */}
      <div className="text-right max-w-[60ch] mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Why Jolshylar?</h1>
        <p className="text-lg sm:text-2xl my-4">
          Jolshylar comes from the Kazakh <H>`road builders`</H>, referencing
          the people who build their road to the future.
        </p>
        <p className="text-lg sm:text-2xl my-4">
          Jolshylar is a team formed during local school hackathon in{" "}
          <H>April 30th, 2022</H>.
        </p>
        <p className="text-lg sm:text-2xl my-4">
          We went to the hackathon with the project called <H>Jazbahana</H>, but
          our initial product was called <H>Joldar</H>, where our team name
          kicked in.
        </p>
        <p className="text-lg sm:text-2xl my-4">
          Today, our team consists of <H>10 members</H>, where everybody has
          their own role and team spirit.
        </p>
      </div>
      {/* Go to Members */}
      <Scroll href="#members">members</Scroll>
    </div>
  );
}

export default About;
