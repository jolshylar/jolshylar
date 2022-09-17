import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoMail,
} from "react-icons/io5";
import Scroll from "./layouts/Scroll";

export default function Footer() {
  return (
    <footer className="p-4">
      <div className="flex justify-center gap-4 py-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jolshylar/"
        >
          <IoLogoGithub size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.com/invite/6dSpCGtJuB"
        >
          <IoLogoDiscord size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/jolshylar"
        >
          <IoLogoTwitter size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/jolshylar"
        >
          <IoLogoInstagram size={24} />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:jolshylar@gmail.com">
          <IoMail size={24} />
        </a>
      </div>
      <p className="text-center py-4">
        &copy; Jolshylar 2022. All rights reserved.
      </p>
      <div className="max-w-max mx-auto">
        <Scroll up href="/">
          go up
        </Scroll>
      </div>
    </footer>
  );
}
