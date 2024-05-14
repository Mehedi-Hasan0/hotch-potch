import CustomButton from "@/components/ui/CustomButton";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Header() {
  return (
    <header className="main-container flex-center gap-5 py-6 2xl:py-8">
      <div className="flex items-center gap-7">
        <Logo />
        <NavLink />
      </div>
      {/* btn */}
      <div className="flex-center gap-4">
        <Link href={"/"}>
          <CustomButton key={1} textLabel="Sign in" />
        </Link>
        <Link href={"/"}>
          <CustomButton
            key={2}
            textLabel="Get started free"
            btnBgColor="primary-gradient"
            borderColor="border-none"
            hoverColor1="bg-[#FFC947]"
            hoverColor2="bg-accent"
            hoverColor3="bg-primary"
          />
        </Link>
      </div>
    </header>
  );
}
