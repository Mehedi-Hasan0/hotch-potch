import { companyLogo } from "@/data";
import Image from "next/image";

const ComLogo = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mx-auto">
      {companyLogo.map((logo) => (
        <div key={logo.label}>
          <Image
            src={logo.icon}
            alt={logo.label}
            width={187}
            height={37}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            quality={90}
            className="h-5 md:h-6 lg:h-7 xl:h-[30px] 2xl:h-9 object-contain opacity-50"
          />
        </div>
      ))}
    </div>
  );
};

export default ComLogo;
