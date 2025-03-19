import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex-none tracking-wider font-mono text-4xl
             underline decoration-teal-300   font-bold"
    >
      Quizex
    </Link>
  );
};
