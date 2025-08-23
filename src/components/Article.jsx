
const Article = ({icon , icHover , title ,Ic_width , Ic_hight , content , isAnimation}) => {
  
  return (
    <div className='group flex flex-col justify-center items-center gap-[2rem] p-[2rem] rounded-[2rem] bg-[#FFFFFF] 
    shadow-dual outline-none hover:border-[2px] hover:border-[#00001A]'>
       <div className="flex w-full justify-center items-center gap-[1rem]">
        <img className={` w-[${Ic_width}] h-[${Ic_hight}] object-fill group-hover:hidden`} src={icon} alt="article icon" />
        <img className={` w-[${Ic_width}] h-[${Ic_hight}] object-fill hidden group-hover:block ${isAnimation ? "hover-anim" : ""}`} src={icHover} alt="article icon" />
         <h3 className="text-[#00001A] font-bold h-full text-[18px] sm:text-[22px] md:text-[28px]" > {title} </h3>
       </div>
       <p className="text-[#00001A] font-bold h-full text-center text-[18px] sm:text-[22px]  md:leading-[36px]" >
           {content}
       </p>
    </div>
  )
}

export default Article
