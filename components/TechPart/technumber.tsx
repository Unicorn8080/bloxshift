import Image from 'next/image';
import Arrow from '../assets/image/arrow-small-right.png'

const techNumberInfos = [
  {
    id: '01',
    text: '3D Conception & Design',
  },
  {
    id: '02',
    text: 'Interaction Design',
  },
  {
    id: '03',
    text: 'VR World Design',
  },
  {
    id: '04',
    text: 'Hydra VR Deploy',
  },
];

export const TechNumber = () => {
  return (
    <div className="flex flex-wrap xs:flex-col md:flex-row justify-between lg:gap-x-64 xl:gap-x-64 2xl:gap-x-24 content-center gap-x-24 gap-y-8">
      {techNumberInfos.map((i) => (
        <NumberComponent key={i.id} id={i.id} text={i.text} />
      ))}
    </div>
  );
};

const NumberComponent = (props: {id: string, text: string}) => {
  return (
    <div className='flex flex-col gap-6 xs:px-0 lg:px-8 2xl:px-0 items-center'>
      <div className='Group4 w-48 h-48 relative'>
        <div className='Ellipse7 w-48 h-48 left-0 top-0 absolute bg-stone-950 bg-opacity-30 rounded-full' />
        <div className='Ellipse8 w-40 h-40 left-[17px] top-[16px] absolute bg-gradient-to-l from-violet-300 to-slate-500 rounded-full' />
        <div className=" left-[64px] top-[60px] absolute text-zinc-700 text-6xl font-bold font-['Montserrat']">
          {props.id}
        </div>
          </div>
          <div className="flex flex-row gap-4">
              <Image src={Arrow} alt='small-arrow' width={67} height={67} />
              <div className="DConceptionDesign w-48  text-white text-2xl font-bold font-['Montserrat']">{props.text}</div>
          </div>
    </div>
  );
};
