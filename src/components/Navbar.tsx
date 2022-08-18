import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center fixed p-1 bg-black/60 z-50">
      <Link href="/">
        <a>
          <Image src="/images/logo.png" height={51} width={192} />
        </a>
      </Link>
    </nav>
  );
}
