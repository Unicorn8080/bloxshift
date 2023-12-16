import Image from 'next/image';
import UnReal from '../assets/image/unreal.png';
import Unity from '../assets/image/unity.png';
import Oculus from '../assets/image/oculus.png';
import Vive from '../assets/image/vive.png';

const logos = [
  { id: 1, source: UnReal, size: 174 },
  { id: 2, source: Unity, size: 252 },
  { id: 3, source: Oculus, size: 263 },
  { id: 4, source: Vive, size: 282 },
];

export const TechLogos = () => {
  return (
    <div className='flex flex-wrap xs:flex-col lg:px-16 xl:px-0 md:flex-row justify-between lg:gap-x-64 xl:gap-x-64 2xl:gap-x-24 items-center gap-x-24 gap-y-0'>
      {logos.map((i) => (
        <div
          key={i.id}
          className='flex flex-wrap flex-row justify-between content-center'
        >
          <Image
            src={i.source}
            alt={`techlogo${i.id}`}
            width={i.size}
            height={i.size}
          />
        </div>
      ))}
    </div>
  );
};
