interface PeopleCardProps {
  className?: string;
  source: string;
  text: string;
}
const ppp = 'https://c.animaapp.com/MIdk6guf/img/mask-group@2x.png';
const PeopleCard = (props: PeopleCardProps) => {
  return (
    <div className={`w-[310px] h-[511px] relative ${props.className}`}>
      <div className='fixed w-[314px] h-[511px] top-0 left-0 absolute'>
        <div className='relative w-[310px] h-[511px] rounded-[40px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(66.94,60.56,95.62)_0%,rgb(32.92,30.08,45.69)_100%)]'>
          <div className='absolute w-[219px] h-[219px] top-[23px] left-[46px] bg-[#0d0d0d52] rounded-[109.5px]'>
            <img
              className='absolute w-[191px] h-[191px] top-[14px] left-[14px]'
              alt='Mask group'
              src={props.source}
            />
          </div>
          <div className="absolute top-[263px] left-[76px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
            {props.text}
          </div>
          <img
            className='absolute w-[154px] h-px top-[309px] left-[78px] object-cover'
            alt='Vector'
            src='https://c.animaapp.com/MIdk6guf/img/vector-10.svg'
          />
          <div className='flex flex-col items-start gap-[6px] absolute w-[250px] h-[57px] top-[331px] left-[45px]'>
            <p className="relative self-stretch [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0]">
                Vitae sapien pellentesque habitant morbi
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0]">
                nunc. Viverra aliquet&nbsp;&nbsp;porttitor rhoncus <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0]">
                libero justo laoreet sit amet vitae.
              </span>
            </p>
          </div>
          <div className='absolute flex flex-row justify-center items-center w-[154px] h-[48px] top-[423px] left-[78px] rounded-[40px] [background:linear-gradient(180deg,rgb(128.7,118.34,175.31)_0%,rgb(192.14,183.37,231.63)_100%)]'>
            <span className='text-center font-bold'>Try it now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeopleCard;
