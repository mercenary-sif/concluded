import Card from '../components/Card'
import { icon_10, icon_11, icon_12, icon_13, icon_14, icon_15, icon_16, icon_17, icon_18, icon_19 } from './import'

const Objective = () => {
  return (
    <div className='flex flex-col justify-center items-center p-2 lg:p-[2rem] gap-[4rem] '>
       <div className="group flex justify-center items-center px-[3rem] py-[1rem] gap-[1rem] 
       rounded-full outline-none hover:border-[2px] bg-[#CCD4FF] hover:bg-transparent hover:cursor-pointer hover:border-[#00001A] ">
           <img className={` w-[50px] h-[50px] object-fill group-hover:hidden`} src={icon_10} alt="section icon" />
            <img className={` w-[50px] h-[50px] object-fill hidden group-hover:block hover-animation`} src={icon_11} alt="section icon" />
              <h3 className="text-[#00001A] font-bold h-full text-[18px] sm:text-[22px] md:text-[28px]" > أهدافنا </h3>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <Card
          icon={icon_12}
          icHover={icon_13}
          Ic_width={'135px'}
          Ic_hight={'135px'}
          content={'تـعزيز حضـور المشاريـع العقاريـة في السوق بشكل واضح وجذاب.'}
        />

        <Card
          icon={icon_14}
          icHover={icon_15}
          Ic_width={'175px'}
          Ic_hight={'175px'}
          content={'رفـع مـعايــير التـسويق العقاري عبرتقديم حــلــول تســويقية احتـرافـيــة ومــبــتكــرة.'}
        />

        <Card
          icon={icon_16}
          icHover={icon_17}
          Ic_width={'135px'}
          Ic_hight={'135px'}
          content={'استخدام خبراتنا في المجال العقاري لـخـدمــة عــمـلائــنــا بـكفـاءة عــالـيــة.'}
        />

        <Card
          icon={icon_18}
          icHover={icon_19}
          Ic_width={'135px'}
          Ic_hight={'135px'}
          content={'بناء شراكات طويلة المدى مع عملائنا قـائـمـة عـلى الـثقـة وتـحـقـيـق الـنـتـائـج.'}
        />
      </div>
    </div>
  )
}

export default Objective
