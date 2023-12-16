import { Arrow } from '@/public/icons/Arrow';

export const TechText = () => {
  return (
    <div className='flex justify-between items-center xl:flex-row xs:flex-col '>
      <div className='flex flex-col gap-4 align-middle flex-wrap content-center'>
        <div className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[36px] tracking-[0] leading-[normal]">
          HOW WE BUILD
        </div>
        <div className="[font-family:'Montserrat-Light',Helvetica] font-light text-white text-[36px] tracking-[0] leading-[normal]">
          WITH HYDRA VR?
        </div>
      </div>
      <div className='w-[228px] h-[100px] xl:visible xs:invisible'>
        <div className='relative h-[100px]'>
          <Arrow className='!absolute !w-[100px] !h-[100px] !top-0 !left-[128px]' />
          <img
            className='absolute w-[158px] h-[3px] top-[48px] left-0'
            alt='Vector'
            src='vector-11.svg'
          />
        </div>
      </div>
      <div className='md:w-[652px] xs:w-[350px] md:mt-0 xs:mb-12 h-[98px] text-white'>
        <p className='md:px-0 xs:px-4'>
          Vitae sapien pellentesque habitant morbi tristique senectus et
          netuset. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi
          sitamet mauris commodo quis imperdiet massa tincidunt nunc.
          Viverraaliquet eget sit amet tellus. Ornare lectus sit amet
          estplacerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
    </div>
  );
};
