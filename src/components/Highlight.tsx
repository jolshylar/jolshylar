const Highlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={`text-primary font-bold ${className}`}>{children}</span>
  );
};

export default Highlight;
