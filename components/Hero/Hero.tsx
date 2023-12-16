import HeroSlide from "./heroslide";
import { OutlineArrowSmallRight7 } from "@/public/icons/OutlineArrowSmallRight7";

export const Hero = (): JSX.Element => {
  return (
    <>
      <div className="lg:flex flex-row-reverse justify-between items-center mt-[50px] mr-[20px]">
        <div className="mx-auto w-[345px] h-[300px] sm:w-[460px] sm:h-[400px]  max-w-[70vw] lg:mr-[0] lg:w-[524px] lg:h-[455px] bg-[#00000021] rounded-[100px_100px_100px_240px] relative">
          <img
            className="w-[95%] h-[95%] object-contain top-[-45%] left-[-45%] transform translate-x-1/2 translate-y-1/2 absolute"
            alt="Mask group"
            src="https://c.animaapp.com/ToChNZZY/img/mask-group-6@2x.png"
          />
        </div>
        <div className="flex flex-col items-center mt-[20px] lg:items-start lg:mt-0 justify-evenly">
          <img
            className="w-[451px] h-[44px]"
            alt="Dive into the depths"
            src="https://c.animaapp.com/ToChNZZY/img/dive-into-the-depths@2x.png"
          />
          <img
            className="w-[400px] h-[45px] mt-[10px]"
            alt="Of virtual reality"
            src="https://c.animaapp.com/ToChNZZY/img/of-virtual-reality@2x.png"
          />
          <div className="hidden m-auto lg:flex gap-[6px] w-[500px] h-[72px] top-[401px] left-0 flex-col items-start mt-[40px]">
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0]">
                sed do eiusmod tempor incididunt ut labore et dolore <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0]">
                nisl tincidunt eget. Lectus mauris eros in vitae .
              </span>
            </p>
          </div>
          <div className="mt-[30px] relative lg:mt-[30px]">
            {/* <div className="w-[214px] h-[48px] relative rounded-[40px] [background:linear-gradient(180deg,rgb(128.7,118.34,175.31)_0%,rgb(192.14,183.37,231.63)_100%)]"> */}
            <div className="w-[214px] h-[48px] relative rounded-[40px] [background:linear-gradient(180deg,rgb(128.7,128.34,128.31)_0%,rgb(192.14,192.37,192.63)_100%)]">
              <div className="absolute top-[17px] left-[38px] [font-family:'Montserrat',Helvetica] font-bold text-hero text-[12px] tracking-[0] leading-[normal]">
                BUILD YOUR WORLD
              </div>
            </div>
            <OutlineArrowSmallRight7 className="hidden m-auto !w-[200px] lg:block absolute !w-[100px] !h-[100px] !top-[-27px] !left-[200px]" />
          </div>
        </div>
      </div>

      <HeroSlide />
    </>
  );
};
