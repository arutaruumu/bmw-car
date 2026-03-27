interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyles = "px-9 py-4 rounded-sm text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(28,110,243,0.25)]",
    secondary: "bg-transparent text-gray-400 hover:text-white flex items-center gap-2"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};