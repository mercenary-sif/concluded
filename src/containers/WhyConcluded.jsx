import Reason from "../components/Reason"
import { icon_20, icon_21, icon_22, icon_23, icon_24, img_3, img_4 } from "./import"


const WhyConcluded = () => {
  return (
    <div className='flex flex-col justify-center items-center p-[2rem] gap-[4rem] '>
       <div className="group flex justify-center items-center px-[2rem] py-2 gap-[1rem] 
       rounded-[1rem] outline-none border-r-[1rem] hover:bg-[#00001A] border-[2px]   hover:cursor-pointer border-[#00001A] ">
           <img className={` w-[50px] h-[50px] object-fill group-hover:hidden`} src={icon_20} alt="section icon" />
            <img className={` w-[50px] h-[50px] object-fill hidden group-hover:block hover-anim`} src={icon_21} alt="section icon" />
              <h3 className="text-[#00001A] group-hover:text-white font-bold h-full text-[18px] sm:text-[22px] md:text-[28px]" > لماذا استدل؟ </h3>
       </div>
       <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 md:gap-[2rem] p-2 md:p-[2rem] ">
            <div className="flex flex-[0.75] flex-col justify-start items-start gap-[1rem] p-2 lg:p-[2rem] ">
                 <Reason 
                   icon={icon_22}
                   reason={'لأننا نملك فهمًا عميقًا للتسويق العـقـاري ومـتطـلباتـه المـتـغيـرة'}
                 />
                  <Reason 
                   icon={icon_23}
                   reason={'نقدم خدمات تـسويقـية مخصصـة حسب احتياج كل عميل أو مشروع'}
                 />
                 <Reason 
                   icon={icon_24}
                   reason={'تميز بالابتكار في تقديم الحلول بعيدًا عـن الأسالـيب التـقليديـة'}
                 />
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img className="object-fill block md:hidden lg:w-[171px] lg:h-[327px] " src={img_4} alt="why concluded cover" />
                <img className="object-fill hidden md:block lg:w-[808px] lg:h-[475px] " src={img_3} alt="why concluded cover" />
            </div>
       </div>
    </div>
  )
}

export default WhyConcluded
