import Link from "next/link";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { BUTTON } from "../../styles";

export default function Scroll({
  href,
  up = false,
  children,
}: {
  href: string;
  up?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <a className={BUTTON}>
        {children}
        {up ? <IoChevronUpSharp size={24} /> : <IoChevronDownSharp size={24} />}
      </a>
    </Link>
  );
}
