import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="main-container flex-center gap-5 py-6 2xl:py-8">
      <div className="flex items-center gap-5">
        <Logo />
        <NavLink />
      </div>
    </header>
  );
}
