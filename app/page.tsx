'use Client'

import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { PeopleCards } from "@/components/PeopleCards";
import TechPart from "@/components/TechPart";
import JoinHydra from "@/components/hydra";


export default function Home() {
  return (
    <div className="flex flex-col gap-[72px]">
      <Hero />
      <Intro />
      <PeopleCards />
      <TechPart />
      <JoinHydra />
    </div>
  )
}
