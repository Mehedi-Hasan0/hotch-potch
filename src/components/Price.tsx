import PricingCard from "./PricingCard";

export default function Price() {
  return (
    <div className="section-padding main-container flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-16 pb-6 md:pb-8 lg:pb-12 xl:pb-14">
      <div className="flex flex-col gap-4 lg:gap-5 xl:gap-7 items-center">
        <h2 className="sub-heading text-secondary text-center lg:leading-tight">
          Make the wise decision <br /> for your business
        </h2>
        <p className="desc-text text-secondary/70 text-center">
          With lots of unique
        </p>
      </div>
      <PricingCard />
    </div>
  );
}
