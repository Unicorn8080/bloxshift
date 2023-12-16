"use client";
import PeopleCard from "../common/people-card";
import TechWoman from "./tech-woman";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const card = [
  {
    id: 1,
    name: "simulation",
    sourcePeople: "https://c.animaapp.com/MIdk6guf/img/mask-group@2x.png",
    text: "SIMULATION",
  },
  {
    id: 2,
    name: "education",
    sourcePeople: "https://c.animaapp.com/ToChNZZY/img/mask-group-2@2x.png",
    text: "EDUCATION",
  },
  {
    id: 3,
    name: "selfcare",
    sourcePeople: "https://c.animaapp.com/ToChNZZY/img/mask-group-3@2x.png",
    text: "SELFCARE",
  },
  {
    id: 4,
    name: "outdoor",
    sourcePeople: "https://c.animaapp.com/ToChNZZY/img/mask-group-4@2x.png",
    text: "OUTDOOR",
  },
];

export const PeopleCards = () => {
  return (
    <>
      <div className="relative md:hidden">
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
          
          {card.map((i, index) => (
            <SwiperSlide key={index}>
              <PeopleCard
                className="mx-auto"
                key={i.name + i.id}
                source={i.sourcePeople}
                text={i.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-20 align-middle">
        <div className="hidden md:flex flex-wrap flex-row xs:flex-col md:flex-row justify-between lg:px-24 xl:px-0 content-center gap-x-6 gap-y-4">
          {card.map((i) => (
            <PeopleCard
              key={i.name + i.id}
              source={i.sourcePeople}
              text={i.text}
            />
          ))}
        </div>
        <div>
          <TechWoman />
        </div>
      </div>
    </>
  );
};
