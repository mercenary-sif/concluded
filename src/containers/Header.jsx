import { NavBar } from '../components/export'
import { headerCover, icon_2, icon_3 } from './import'
const Header = () => {
  return (
    <div className="relative flex flex-col justify-center items-center p-2 md:p-[2rem] overflow-hidden">
        {/* background image */}
           <img
                src={headerCover}
                alt="header cover"
                className="absolute inset-0 w-full h-full object-cover -z-20"
            />

            {/* exact gradient but blended with the image and partially transparent */}
            <div
                className="absolute inset-0 pointer-events-none -z-10"
                style={{
                backgroundImage:
                    'linear-gradient(90deg,rgba(0, 0, 104, 1) 35%, rgba(215, 209, 202, 1) 100%)',
                opacity: 0.45,
               
                }}
            />
            <div className="relative z-10 w-full flex flex-col justify-center items-center gap-[1rem] md:gap[2rem]">
                <NavBar />
                <div className="flex flex-col w-full justify-center items-center gap-[1rem] md:gap-[2rem] py-[1rem] md:py-[2rem]">
                    <div className="w-full md:w-[80%] flex justify-center md:justify-start items-center gap-[1rem] ">
                         <img className='w-[35px] h-[35px] object-fill' src={icon_2} alt="title-icon" />
                        <h1 className="text-font-1 text-[#000000] font-extrabold text-center h-full text-[20px] md:text-[32px]">
                            استدل على عقارك المثالي بسهولة!
                        </h1>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-[2rem]">
                         <h1 className="text-font-1 text-[#FFFFFF] font-normal h-full text-[20px] md:text-[40px]"> 
                            استدل .. خبرة ترشدك ، وفرص تبني مستقبلك
                         </h1>
                         <button className="inline-flex outline-none border-[#FFFFFF] border-[3px] bg-[#000068] rounded-tr-full rounded-bl-full justify-center items-center gap-[1rem] px-[2rem] md:px-[4rem] py-[8px] hover:rounded-md hover:cursor-pointer ">
                        <div className="flex items-center justify-center w-6 h-full">
                            <img className="object-contain w-[20px] h-[20px] md:w-full md:h-full" src={icon_3} alt="login-icon" />
                        </div>
                        <p className=" text-[#FFFFFF] font-normal h-full text-[14px] sm:text-[16px] md:text-[22px]">تواصل معنا</p>
                        
                    </button>
                    </div>
                </div>
            </div>
    </div>

  )
}

export default Header
