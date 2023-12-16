import { OutlineChevronSmallDown1 } from '@/public/icons/OutlineChevronSmallDown1';

const TechWoman = () => {
  return (
    <div className='xl:flex flex-row justify-center items-center xs:hidden 2xl:flex'>
      <div className='w-[1282px] h-[353px] relative'>
        <div className='relative w-[1286px] h-[353px] left-[-4px]'>
          <img
            className='absolute w-[1286px] h-[311px] top-0 left-0'
            alt='Mask group'
            src='https://c.animaapp.com/ToChNZZY/img/mask-group.png'
          />
          <div className="absolute top-[108px] left-[347px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[36px] tracking-[0] leading-[normal]">
            TECHNOLOGIES &amp; HARDWARE
          </div>
          <div className="absolute top-[163px] left-[442px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[36px] tracking-[0] leading-[normal]">
            USED BY HYDRA VR.
          </div>
          <div className='absolute w-[100px] h-[100px] top-[253px] left-[590px] bg-[#0d0d0d52] rounded-[50px]' />
          <div className='absolute w-[70px] h-[70px] top-[268px] left-[605px] rounded-[35px] [background:linear-gradient(180deg,rgb(192.14,183.37,231.63)_0%,rgb(128.7,118.34,175.31)_100%)]' />
          <OutlineChevronSmallDown1 className='!absolute !w-[60px] !h-[60px] !top-[273px] !left-[610px]' />
        </div>
      </div>
    </div>
  );
};
export default TechWoman;
