
const Card = ({icon , icHover , content , Ic_width , Ic_hight}) => {
  return (
    <div className='group flex justify-center items-center gap-[1rem] p-[3rem] rounded-[3rem] hover:rounded-full bg-[#CCD4FF] hover:bg-[#00001A] '>
        <div className="flex justify-center items-center gap-[1rem]">
        <img className={` w-[${Ic_width}] h-[${Ic_hight}] object-fill group-hover:hidden`} src={icon} alt="article icon" />
        <img className={` w-[${Ic_width}] h-[${Ic_hight}] object-fill hidden group-hover:block `} src={icHover} alt="article icon" />
       </div>
      
       <h3 className="text-[#00001A] font-normal  text-[18px] sm:text-[22px] lg:text-[25px]  group-hover:text-[#ffffff]" > {content} </h3>

    </div>
  )
}

export default Card
