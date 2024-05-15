import Image from "next/image";
import Link from "next/link";
import CustomButton from "./ui/CustomButton";

interface ContentProps {
  className?: string;
  imgSrc: string;
  heading: string;
  desc: string;
  imgPositionStyle: string;
}

const Content: React.FC<ContentProps> = ({
  className,
  imgSrc,
  heading,
  desc,
  imgPositionStyle,
}) => {
  return (
    <section className="section-padding main-container">
      <div className={`${className} relative`}>
        {/* blob blur */}
        <div className="absolute left-[100px] lg:left-[200px] 2xl:left-[300px] top-0 bg-[#a136f214] w-[200px] h-[200px] md:w-[300px] xl:w-[400px] md:h-[300px] xl:h-[400px] rounded-full blur-2xl" />
        <Image
          src={imgSrc}
          alt="Seo content written by ai"
          width={690}
          height={650}
          className={`md:h-[350px] lg:h-[450px] xl:h-[530px] 2xl:h-[650px] md:object-contain xl:object-none relative z-10 ${imgPositionStyle}`}
        />

        <div className="flex flex-col gap-4 lg:gap-7">
          <h2 className="sub-heading max-w-[497px] font-semibold xl:leading-tight 2xl:leading-tight">
            {heading}
          </h2>

          <p className="desc-text text-secondary/70 max-w-[487px]">{desc}</p>

          <div className="max-w-[180px] lg:max-w-[220px] mt-3">
            <Link href={"/"}>
              <CustomButton
                key={1}
                textLabel="Get started free"
                btnBgColor="primary-gradient"
                borderColor="border border-gradient"
                hoverColor1="bg-primary"
                hoverColor2="bg-[#FFC947]"
                hoverColor3="accent-gradient"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
