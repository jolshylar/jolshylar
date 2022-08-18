const Button = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`border-[1px] rounded-xl p-2 flex items-center justify-center gap-2 hover:bg-white hover:text-black hover:duration-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
