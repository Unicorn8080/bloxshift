'use client'
import { OutlineMail } from "@/public/icons/OutlineMail";
import { OutlinePhoneCall } from "@/public/icons/OutlinePhoneCall";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSlide = () => {
  return (
    <>
      <div className="hidden lg:flex w-full flex-row rounded-full mt-[1vh] h-[167px] mx-auto justify-between shadow-[4px_4px_4px_#555555] [background:radial-gradient(50%_50%_at_50%_50%,rgba(50.9,51.00,50.96,0.95)_0%,rgb(32.92,33.08,33.69)_100%)]">
      {/* <div className="hidden lg:flex w-full flex-row rounded-full mt-[1vh] h-[167px] mx-auto justify-between shadow-[0px_4px_4px_#c0b7e703] [background:radial-gradient(50%_50%_at_50%_50%,rgba(57.9,51.64,86.06,0.95)_0%,rgb(32.92,30.08,45.69)_100%)]"> */}
        <div className="flex mx-auto items-center p-[20px]">
          <img
            className="w-[70px] h-[70px] top-[49px] left-[39px]"
            alt="Location icon"
            src="https://c.animaapp.com/ToChNZZY/img/location-icon.svg"
          />
          <div>
            <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
              Pay Us a Visit
            </div>
            <p className="mt-[10px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
          <img
            className="hidden lg:block w-px h-[116px] ml-[40px]"
            alt="Vector"
            src="https://c.animaapp.com/ToChNZZY/img/vector-5.svg"
          />
        </div>
        <div className="flex mx-auto items-center p-[20px]">
          <OutlinePhoneCall className="!w-[59px] !h-[59px]" />
          <div>
            <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
              Give Us a Call
            </div>
            <div className="mt-[10px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
              (110) 1111-1010
            </div>
          </div>
          <img
            className="w-px h-[116px] ml-[80px]"
            alt="Vector"
            src="https://c.animaapp.com/ToChNZZY/img/vector-6.svg"
          />
        </div>
        <div className="flex mx-auto items-center p-[20px]">
          <OutlineMail className="!w-[65px] !h-[65px] !top-[50px] !left-[862px]" />
          <div>
            <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
              Send Us a Message
            </div>
            <div className="mt-[10px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
              Contact@HydraVTech.com
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-full mt-[1vh] mx-auto shadow-[0px_4px_4px_#c0b7e703] [background:radial-gradient(50%_50%_at_50%_50%,rgba(57.9,51.64,86.06,0.95)_0%,rgb(32.92,30.08,45.69)_100%)] lg:hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <div className="swiper-button-next">
            
          </div>
          <div className="swiper-button-prev">
            
          </div>
          <SwiperSlide>
            <div className="flex justify-center items-center p-[20px]">
              <img
                className="w-[70px] h-[70px] top-[49px] left-[39px]"
                alt="Location icon"
                src="https://c.animaapp.com/ToChNZZY/img/location-icon.svg"
              />
              <div>
                <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
                  Pay Us a Visit
                </div>
                <p className="mt-[10px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                  Union St, Seattle, WA 98101, United States
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center p-[20px]">
              <OutlinePhoneCall className="!w-[59px] !h-[59px]" />
              <div>
                <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
                  Give Us a Call
                </div>
                <div className="mt-[10px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                  (110) 1111-1010
                </div>
              </div>              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center p-[20px]">
              <OutlineMail className="!w-[65px] !h-[65px] !top-[50px] !left-[862px]" />
              <div>
                <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
                  Send Us a Message
                </div>
                <div className="mt-[10px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                  Contact@HydraVTech.com
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlide;
