import { navLinks } from "@/constant";
import Link from "next/link";

export default function NavLink() {
  return (
    <nav className="flex items-center">
      {navLinks.map((link, idx) => (
        <Link
          key={idx}
          href={link.link}
          className="desc-text text-secondary px-7 hover:text-gradient-foreground color-transition"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
