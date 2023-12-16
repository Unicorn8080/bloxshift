'use client'
import Image from 'next/image';
import Logo from '../assets/image/logo.png';
import { useState } from 'react';

const sections = [
  { id: 1, name: 'ABOUT' },
  { id: 1, name: 'SERVICES' },
  { id: 1, name: 'TECHNOLOGIES' },
  { id: 1, name: 'HOWTO' },
];
export const HeaderComponent = () => {
  const [selected, toggleSelected] = useState<boolean>(false);
  return (
    <div className='flex flex-row flex-wrap justify-between items-center pt-[40px]'>
      {/* <Image src={Logo} alt='logo' width={193} height={103} /> */}
      <Image src={Logo} alt='logo' width={353} height={203} />
      <div className='hidden flex-row  flex-wrap text-white justify-between gap-8 content-center 2xl:flex xs:hidden'>
        {sections.map((i) => (
          <label key={i.name + i.id}>{i.name}</label>
        ))}
      </div>
      <div className='flex flex-row md:flex xs:hidden flex-wrap justify-between content-center gap-8 text-white'>
        <button className='rounded-[40px] h-16 w-48 px-8 py-2 border-white border-2'>
          CONTACT US
        </button>
        <button className='rounded-[40px] h-16 w-48 py-2 border-white border-2'>
          JOIN HYDRA
        </button>
      </div>
      <div
        className='float-right flex flex-col gap-2 md:hidden relative top-[-16px] pr-4'
        onClick={() => toggleSelected(true)}
      >
        <div className='w-16 h-2 bg-white rounded-full'></div>
        <div className='w-16 h-2 bg-white rounded-full'></div>
        <div className='w-16 h-2 bg-white rounded-full'></div>
      </div>
      <div className={`${!selected ? 'hidden' : 'block'}`}>
        <div
          className='xs:flex md:hidden w-[100vw] h-[100vh] z-[900] bg-gray-800 opacity-50 fixed top-0 left-0'
          onClick={() => toggleSelected(false)}
        ></div>
        <ul className='xs:flex fixed z-[1000] top-0 left-0 bg-white w-[250px] h-[100vh] md:hidden transition-all flex-col items-center gap-8 pt-16'>
          <li>
            <a
              className='text-md font-bold text-gray-600 hover:text-gray-900'
              href='#'
            >
              About
            </a>
          </li>
          <li>
            <a className='text-md font-bold text-gray-600 hover:text-gray-900' href='#'>
              Technologes
            </a>
          </li>
          <li>
            <a
              className='text-md font-bold text-gray-600 hover:text-gray-900'
              href='#'
            >
              Services
            </a>
          </li>
          <li>
            <a
              className='text-md font-bold text-gray-600 hover:text-gray-900'
              href='#'
            >
              How To
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
