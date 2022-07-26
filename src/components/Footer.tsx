export default function Footer() {
  return (
    <footer className="text-center border-t-2">
      <ul className="flex justify-around py-4">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jolshylar"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/invite/6dSpCGtJuB"
          >
            Discord
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/jolshylar"
          >
            Instagram
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="mailto:jolshylar@gmail.com">
            E-mail
          </a>
        </li>
      </ul>
      <div className="py-4">&copy; Jolshylar 2022. All rights reserved.</div>
    </footer>
  );
}
