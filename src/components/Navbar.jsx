import logo from '../assets/ESTADEL-logo.png'
import icon_1 from '../assets/Icon-1.png'
import icHover from '../assets/icon-1-hover.png'
const Navbar = () => {
  return (
    <div className='w-full lg:w-[1173px] flex flex-row justify-between items-center md:px-[2rem] px-[1rem] py-1 md:py-2 bg-[#000833] h-[94px] rounded-full '>
        <div className=" w-[48px] h-[42px] md:w-[70px] md:h-[49px]">
            <img src={logo} alt="ESTADEL-logo" />
        </div>
        <button className="group inline-flex border-[#FFFFFF] border-[3px] outline-none bg-[#000068] rounded-tr-full rounded-bl-full justify-center items-center gap-[1rem] px-[2rem] md:px-[4rem] py-[8px] hover:rounded-md hover:cursor-pointer ">
            <div className=" flex items-center justify-center ">
                {/* Default icon */}
                <img 
                  className="object-contain  w-full h-full group-hover:hidden" 
                  src={icon_1} 
                  alt="login-icon" 
                />
                {/* Hover icon */}
                <img 
                  className="object-contain  w-[34px] h-[34px] hidden group-hover:block" 
                  src={icHover} 
                  alt="login-icon-hover" 
                />
            </div>
            <p className=" text-[#FFFFFF] font-normal h-full text-[14px] sm:text-[16px] md:text-[22px]">تواصل معنا</p>
            
        </button>
    </div>
  )
}

export default Navbar
