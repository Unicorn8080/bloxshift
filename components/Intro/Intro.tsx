import { Component } from "@/components/Component";
export const Intro = () => {
  return (
    <div className="mt-[10vh]">
      <div className="flex flex-col items-center justify-between">
        <div className="gap-[0px] lg:flex flex-row items-center lg:gap-[250px]">
          <div className="flex-initial">
            <div className="relative top-0 left-0">
              <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[36px] tracking-[0] leading-[normal]">
                INTRODUCTION
              </div>
              <Component className="hidden xl:block !absolute !left-[281px] !top-[26px]" />
              <div className="[font-family:'Montserrat',Helvetica] font-light text-white text-[36px] tracking-[0] leading-[normal]">
                TO HYDRA VR
              </div>
            </div>
          </div>
          <div className="hidden lg:block flex flex-col gap-[6px] flex-1">
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0]">
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
                <br />
              </span>
            </p>
          </div>
        </div>

        <div className="mt-[10vh]">
          <div className="lg:flex flex-row gap-[100px]">
            <img
              className="mx-[auto] w-[300px] h-[300px] md:w-[400px] md:h-[400px] max-w-[532px]"
              alt="Mask group"
              src="https://c.animaapp.com/ToChNZZY/img/mask-group-5.png"
            />

            <div className="flex flex-col items-evenly gap-[20px] justify-between">
              <div>
                <div className="hidden lg:flex flex-col gap-[20px]">
                  <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[36px] tracking-[0] leading-[normal]">
                    ABOUT
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-light text-[#fffffff2] text-[36px] tracking-[0] leading-[normal]">
                    HYDRA VR
                  </div>
                </div>

                <div className="gap-[6px] flex flex-col items-start mt-[40px]">
                  <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] tracking-[0]">
                      Eget mi proin sed libero enim sed faucibus turpis. Nisl
                      rhoncus mattis rhoncus urna neque viverra justo. Vivamus
                      at augue eget arcu dictum. Ultrices gravida dictum fusce
                      ut placerat orci. Aenean et tortor at risus viverra
                      adipiscing at in. Mattis aliquam faucibus purus in massa.
                      Est placerat in egestas erat imperdiet sed. Consequat
                      semper viverra nam libero justo laoreet sit amet. Aliquam
                      etiam erat velit scelerisque in dictum non consectetur a.
                      Laoreet sit amet cursus sit amet. Vel eros donec ac odio
                      tempor orci dapibus. Sem nulla pha retra diam sit amet
                      nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                      n tempor.
                    </span>
                  </p>
                </div>
                <div className="mx-[auto] lg:ml-[0] mt-[50px] relative w-[214px] h-[48px] rounded-[40px] [background:linear-gradient(180deg,rgb(128.7,118.34,175.31)_0%,rgb(192.14,183.37,231.63)_100%)]">
                  <div className="absolute top-[17px] left-[39px] [font-family:'Montserrat',Helvetica] font-bold text-hero text-[12px] tracking-[0] leading-[normal]">
                    LET’S GET IN TOUCH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
