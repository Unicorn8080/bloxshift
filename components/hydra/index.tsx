import Image from 'next/image';
import Hr from '../assets/image/header-horizontal-divider.png';
import InputComponent from '../common/input';

const JoinHydra = () => {
  return (
    <div className='flex flex-col items-center gap-8 rounded-[80px] bg-gradient-radial from-[#555] to-[#111] md:px-16 xs:px-8 py-24'>
      <div className='hydra-header flex flex-col items-center gap-4 text-white'>
        <h3 className=' font-bold text-2xl'>JOIN HYDRA</h3>
        <Image src={Hr} alt='horizontal divider' width={414} height={1} />
        <h3 className='text-2xl'>Lets Build Your Experience</h3>
      </div>
      <div className='flex flex-col gap-8 items-center w-full'>
        <div className='flex md:flex-row xs:flex-col flex-warp gap-4 w-full'>
          <InputComponent text='Fisrt Name' />
          <InputComponent text='Last name' />
        </div>
        <div className='flex md:flex-row xs:flex-col flex-warp gap-4 w-full'>
          <InputComponent text='Email' />
          <InputComponent text='Phone Number' />
        </div>
        <div className='flex flex-row gap-4 w-full'>
          <InputComponent text='Subject' />
        </div>
        <div className='flex flex-row gap-4 w-full'>
          <InputComponent text='No' mutiple />
        </div>
      </div>
      <button className='w-[210px] h-[44px] rounded-3xl text-center text-black bg-gradient-to-l to-buttongradientto from-buttongradientfrom'>
        SEND TO HYDRA
      </button>
    </div>
  );
};
export default JoinHydra;
