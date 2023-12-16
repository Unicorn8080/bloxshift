import Image from 'next/image';
import FooterLogo from '../assets/image/Frame.png';
import HrDiv from '../assets/image/hrDiv.png';
import FacebookIcon from '../assets/image/facebook.png';
import InstagramIcon from '../assets/image/instagram.png';
import LinkedinIcon from '../assets/image/linkedin.png';
import PinterestIcon from '../assets/image/pinterest.png';
import TwitterIcon from '../assets/image/twitter.png';
import YoutubeIcon from '../assets/image/youtube.png';
import HDivder from '../assets/image/header-horizontal-divider.png';

const sections = ['ABOUT', 'SERVICES', 'TECHNOLOGIES', 'HOW TO', 'JOIN HYDRA'];
const extraInfos = ['F.A.Q', 'SITEMAP', 'CONDITIONS', 'LISENCES'];
const icons = [
  { name: 'facebook', source: FacebookIcon },
  { name: 'twitter', source: TwitterIcon },
  { name: 'linkedin', source: LinkedinIcon },
  { name: 'youtube', source: YoutubeIcon },
  { name: 'instagram', source: InstagramIcon },
  { name: 'pinterest', source: PinterestIcon },
];

export const Footer = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-14 pt-32 pb-16'>
      <div className='flex flex-row flex-wrap align-middle xl:justify-between xs:justify-evenly'>
        <Image
          className='xl:inline xs:hidden'
          src={FooterLogo}
          alt='footer-logo'
          width={185}
          height={185}
        />
        <Image
          className='xl:inline xs:hidden'
          src={HrDiv}
          alt='footer-logo'
          width={4}
          height={196}
        />
        <div className='flex flex-col justify-between text-white'>
          {sections.map((i) => (
            <label key={i}>{i}</label>
          ))}
        </div>
        <Image className="md:inline xs:hidden" src={HrDiv} alt='footer-logo' width={4} height={196} />
        <div className='flex flex-col justify-between text-white'>
          {extraInfos.map((i) => (
            <label key={i}>{i}</label>
          ))}
        </div>
        <Image
          className='xl:inline xs:hidden'
          src={HrDiv}
          alt='footer-logo'
          width={4}
          height={196}
        />
        <div className='xl:flex xs:hidden flex flex-col justify-between text-white'>
          <label>SOCIALIZE WITH HYDRA</label>
          <div className='flex flex-row gap-4'>
            {icons.map((i) => (
              <Image
                key={i.name}
                src={i.source}
                alt={i.name}
                width={32}
                height={32}
              />
            ))}
          </div>
          <button className='w-[210px] h-[44px] rounded-3xl text-center text-black bg-gradient-to-l to-buttongradientto from-buttongradientfrom'>
            Build Your World
          </button>
        </div>
      </div>
      <div className='xs:flex xl:hidden flex-row self-center gap-4'>
        {icons.map((i) => (
          <Image
            key={i.name}
            src={i.source}
            alt={i.name}
            width={32}
            height={32}
          />
        ))}
      </div>
      <Image src={HDivder} alt='h-divider' sizes='100%' height={2} />
      <p className='text-center text-white'>
        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
      </p>
    </div>
  );
};
