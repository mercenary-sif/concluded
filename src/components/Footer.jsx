import logo from '../assets/logo-ESTADEL.png'
import location from '../assets/Icon 25.png'
import locationHover from '../assets/Icon 26.png'
import phone from '../assets/Icon 27.png'
import phoneHover from '../assets/Icon 28.png'
import mail from '../assets/Icon 29.png'
import mailHover from '../assets/Icon 30.png'
import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import X from '../assets/X.png'
const Footer = () => {
  return (
   <div className='flex flex-col  justify-center items-center gap-[1rem] py-[2rem] px-[2rem] rounded-t-[5rem]'
    style={{
    background: "linear-gradient(90deg, rgba(0,25,173,1) 35%,  rgba(100, 91, 122, 1) 100%)"
  }}>
     <div className='flex flex-col lg:flex-row justify-center items-center gap-[1rem]'>
      <div className="flex flex-1 items-center justify-center cursor-pointer">
         <img className='w-[151px] h-[120px] object-fill ' src={logo} alt="logo" />
      </div>
      <div className="flex group flex-1 items-center justify-center gap-4 p-2 cursor-pointer">
        <img className={` w-[68px] h-[68px] object-fill group-hover:hidden`} src={location} alt="location icon" />
        <img className={` w-[68px] h-[68px] object-fill hidden group-hover:block `} src={locationHover} alt="location icon" />
        <p className="text-[#00001A] group-hover:text-[#b0baf3] font-bold text-start text-[18px]  " >
           المملكة العربية السعودية، القصيم، بريدة، حـي الـنـهـضــة، طـريــق الــدائــري الشمالــي
       </p>
      </div>
       <div className="flex group flex-[0.5] items-center justify-center gap-4 p-2 cursor-pointer">
        <img className={` w-[41px] h-[41px] object-fill group-hover:hidden`} src={phone} alt="phone icon" />
        <img className={` w-[41px] h-[41px] object-fill hidden group-hover:block `} src={phoneHover} alt="phone icon" />
        <p className="text-[#00001A] group-hover:text-[#b0baf3] font-bold text-start text-[18px]  " >
           920015780
       </p>
      </div>
       <div className="flex group flex-[0.5] items-center justify-center gap-4 p-2 cursor-pointer">
        <img className={` w-[41px] h-[41px] object-fill group-hover:hidden`} src={mail} alt="mail icon" />
        <img className={` w-[41px] h-[41px] object-fill hidden group-hover:block `} src={mailHover} alt="mail icon" />
        <p className="text-[#00001A] group-hover:text-[#b0baf3] font-bold text-start text-[18px]  " >
           Info@estadel.com.sa
       </p>
      </div>
       <div className="flex  flex-[0.6] items-center justify-center gap-4 p-[1rem] ">
        <img className={` w-[32px] h-[32px] object-fill hover:cursor-pointer`} src={fb} alt="facebook icon" />
      
        <img className={` w-[32px] h-[32px] object-fill hover:cursor-pointer`} src={insta} alt="instagram icon" />
          <img className={` w-[32px] h-[32px] object-fill hover:cursor-pointer`} src={Linkedin} alt="Linkedin icon" />
        <img className={` w-[32px] h-[32px] object-fill hover:cursor-pointer`} src={X} alt="X icon" />

      </div>
    </div>
    <div className="w-[75%] flex flex-col md:flex-row justify-between items-center ">
      <p class="text-[12px] sm:text-[16px] text-[#b0baf3] md:text-[18px] font-normal text-center mt-[2rem]">
        Designed By : <a className='hover:text-[#00001A] cursor-pointer' href="https://www.facebook.com/taghreed.essam.65468"> Taghreed Essam</a> 
       </p>
       <p class="text-[12px] sm:text-[16px] text-[#b0baf3] md:text-[18px] font-normal text-center mt-[2rem]">
       Coding by : <a className='hover:text-[#00001A] cursor-pointer' href="https://www.facebook.com/the.mercenary.sif"> 
       Aguaguena Sif Eddine (The Mercenary) </a>
       </p>
    </div>
     <p class="text-[12px] sm:text-[16px] text-[#b0baf3] md:text-[18px] font-normal text-center mt-[2rem]">
        © 2025 جميع الحقوق محفوظة لاستدل.
       </p>

   </div>
  )
}

export default Footer
