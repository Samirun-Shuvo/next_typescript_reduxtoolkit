import React from "react";
import Link from "next/link"; // If using Next.js for routing

interface User {
  id: number;
  name: string;
  avatarUrl?: string;
}

interface NavbarProps {
  user?: User; // `user` is optional
  theme: "light" | "dark"; // Example of a theme prop (light or dark mode)
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  return (
    <nav className={`bg-${theme === "dark" ? "gray-800" : "gray-100"} p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold text-white">
          <Link href="/">MyApp</Link>
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
