export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      className={`px-6 py-3 uppercase text-xs tracking-widest transition ${
        variant === "primary"
          ? "bg-blue-600 hover:bg-blue-500 text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}