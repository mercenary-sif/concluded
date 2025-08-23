
const Reason = ({icon , reason}) => {
  return (
    <div className='flex justify-center items-center p-2 md:p-[2rem] gap-2 md:gap-[1rem] '>
           <img className={`w-[43px] h-[43px] md:w-[53px] md:h-[53px] object-fill group-hover:hidden`} src={icon} alt="article icon" />
           <h3 className="text-[#00001A] font-bold text-[16px] sm:text-[22px] md:text-[26px]" > {reason} </h3>
    </div>
  )
}

export default Reason
