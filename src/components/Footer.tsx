import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoMail,
} from "react-icons/io5";

export default function Footer() {
  const iconStyles = { width: 24, height: 24 };
  return (
    <footer>
      <div className="flex justify-center gap-4 py-4">
        <a target="_blank" rel="noreferrer" href="https://github.com/jolshylar">
          <IoLogoGithub style={iconStyles} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.com/invite/6dSpCGtJuB"
        >
          <IoLogoDiscord style={iconStyles} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/jolshylar"
        >
          <IoLogoTwitter style={iconStyles} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/jolshylar"
        >
          <IoLogoInstagram style={iconStyles} />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:jolshylar@gmail.com">
          <IoMail style={iconStyles} />
        </a>
      </div>
      <div className="text-center py-4">
        &copy; Jolshylar 2022. All rights reserved.
      </div>
    </footer>
  );
}
