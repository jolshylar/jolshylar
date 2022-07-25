import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/images/logo.png"
          height={56}
          width={212}
        />
      </Link>
      <div className="flex gap-4 font-bold text-logo text-2xl">
        <Link href="/projects">
          <a>/projects</a>
        </Link>
        <Link href="/members">
          <a>/members</a>
        </Link>
      </div>
    </nav>
  );
}
