import Link from "next/link";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

export default function Scroll({
  href,
  up = false,
  children,
}: {
  href: string;
  up?: boolean;
  children: React.ReactNode;
}) {
  const style = { width: 24, height: 24 };
  return (
    <Link href={href}>
      <a className="text-lg sm:text-2xl px-4 py-2 flex justify-center items-center gap-2 border-[1px] border-gray-400 rounded-xl hover:text-gray-700 hover:bg-gray-200 hover:duration-500">
        {children}
        {up ? (
          <IoChevronUpSharp style={style} />
        ) : (
          <IoChevronDownSharp style={style} />
        )}
      </a>
    </Link>
  );
}
