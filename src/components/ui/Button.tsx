export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded text-sm uppercase tracking-widest">
      {children}
    </button>
  );
}