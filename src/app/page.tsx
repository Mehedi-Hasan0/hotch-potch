import Banner from "@/components/Banner";
import Company from "@/components/Company";
import Content from "@/components/Content";

export default function Home() {
  console.log("server");
  return (
    <main className="mobile-nav-margin min-h-[300vh] overflow-hidden">
      <div className="relative">
        {/* blur elements */}
        <div className="absolute -right-[100px] -bottom-[100px] w-[200px] h-[200px] rounded-full bg-[#f2369114] blur-3xl hidden md:block" />
        <div className="absolute -left-[150px] bottom-[100px] w-[200px] h-[200px] rounded-full bg-[#ffce7317] blur-3xl hidden md:block" />
        <Banner />
      </div>
      <Company />
      <Content
        key={1}
        className="flex flex-col md:flex-row items-center justify-evenly"
        imgSrc="/assets/images/trial/trial-img-1.webp"
        heading="Create content efficiently and quickly with great AI writing tools"
        desc="150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
        imgPositionStyle="-left-7 md:-left-0"
      />
    </main>
  );
}
