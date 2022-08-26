export function Gradient({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-[#FAAC75] ${className}`}
    >
      {children}
    </span>
  );
}

export default function Highlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`text-[#61DAFB] font-bold ${className}`}>{children}</span>
  );
}
