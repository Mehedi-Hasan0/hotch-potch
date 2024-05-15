import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  console.log("server");
  return (
    <main className="mobile-nav-margin min-h-[300vh]">
      <Banner />
    </main>
  );
}
