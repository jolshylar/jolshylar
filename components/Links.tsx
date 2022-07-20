import { FaDiscord } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Links() {
  const styles = { width: 18, height: 18 };
  return (
    <div className="bg-[url('../public/images/mirrorbg.png')] bg-center h-[600px] pt-[10vh]">
      <h1 className="m-auto text-white text-center text-5xl font-bold py-4 max-w-[720px]">
        As of today, Jolshylar team has 10 members (2 working actually).
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
          You can contact us via links below:
        </span>
      </h1>
      <ul className="max-w-[480px] m-auto">
        <li className="bg-[#fffa] rounded-full">
          <a
            className="flex flex-row justify-center items-center gap-2 p-4"
            href="https://github.com/jolshylar"
          >
            <AiFillGithub style={styles} /> Github
          </a>
        </li>
        <li className="bg-[#fffa] rounded-full my-4">
          <a
            className="flex flex-row justify-center items-center gap-2 p-4"
            href="https://instagram.com/jolshylar"
          >
            <AiFillInstagram style={styles} /> Instagram
          </a>
        </li>
        <li className="bg-[#fffa] rounded-full">
          <a
            className="flex flex-row justify-center items-center gap-2 p-4"
            href="https://discord.gg/6dSpCGtJuB"
          >
            <FaDiscord style={styles} /> Discord
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
