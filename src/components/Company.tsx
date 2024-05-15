import ComLogo from "./ComLogo";

export default function Company() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-14 section-padding main-container">
      <h3 className="title-heading font-outfit font-medium">
        Trusted by nearly 5000+ paying customers
      </h3>
      <ComLogo />
    </div>
  );
}
