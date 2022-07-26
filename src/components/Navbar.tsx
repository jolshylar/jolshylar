import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/images/logo.png"
          height={51}
          width={192}
        />
      </Link>
      <div className="flex gap-4 font-bold text-primary text-xl sm:text-2xl">
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/members">
          <a>Members</a>
        </Link>
      </div>
    </nav>
  );
}
