import Article from "../components/Article"
import { icon_4, icon_5, icon_6, icon_7, icon_8, icon_9, img_1, img_2 } from "./import"


const AboutUs = () => {
  return (
      <>
      <div className='relative flex flex-col-reverse lg:flex-row justify-center items-center gap-[2rem] p-[1rem] md:p-[2rem]'>
        <div className="flex flex-1 p-2 items-center justify-center">
          <Article 
             icon={icon_4} 
             icHover={icon_5}
             title={'من نحن'} 
             content={'استدل شركة متخصصة في التسويق العقاري، أسسها فريق يمتلك خبرة طويلة وفهمًا عميـقًا للسوق العقاري نركّز على تقديم حلول تسويقية مؤثرة نابعة من معرفتنا الـدقـيقـة بـالـسوق، تـســاعد الـشـركات عـلى إبـراز قيمـة مشاريـعهـا وتـعـزيز حضورها بـشـكل يحـقق أهـدافـهـا الــتســويــقــيــة بــوضـــوح وفــعــالـــيــة.'}
             Ic_width={'52px'}
             Ic_hight={'50px'}/>
        </div>
        <div className="relative w-[85%] h-[45vh] md:h-[65vh] lg:h-[100vh] flex lg:flex-1 items-start justify-end p-2">
              {/* First Image */}
              <img
                className="w-[169px] h-[210px] md:w-[320px] md:h-[475px] xl:w-[390px] xl:h-[506px]  object-cover rounded-2xl shadow-lg "
                src={img_2}
                alt="about-us-cover-1"
              />

              {/* Second Image (overlapping) */}
              <img
                className="w-[169px] h-[210px] md:w-[320px] md:h-[475px] xl:w-[390px] xl:h-[506px] object-cover rounded-2xl shadow-lg absolute top-[25%] left-[40%]"
                src={img_1}
                alt="about-us-cover-2"
              />
            </div>
    </div>
    <div className="flex flex-col lg:flex-row  justify-center items-center gap-[2rem] p-[2rem] ">
                  <div className="flex flex-1 p-2 items-center justify-center">
                    <Article 
                      icon={icon_6} 
                      icHover={icon_7}
                      title={'رؤيتنا'} 
                      content={'أن نكون الشركة الأكثر تأثيرًا وتميزًا في مجال التسويق العقاري عبر تـقديم حلول وخدمات مـتقدمة تساهم في تـطوير القطـاع وإبـراز الـمـشاريع بـشكل يـواكب تــطلـعـات الـسوق والـعـمـلاء.'}
                      Ic_width={'96px'}
                      Ic_hight={'96px'}
                      isAnimation={true}/>
                  </div>
                  <div className="flex flex-1 p-2 items-center justify-center">
                    <Article 
                      icon={icon_8} 
                      icHover={icon_9}
                      title={'رسالتنا'} 
                      content={'تقديم خدمات تسويقية عقارية تجمع بين الابتكار والـثقـة والاحترافية، بالاعتماد على خبرتنا الطويلة في مجال العقار والتسويق، لنساعد الشركات على تحقيق أهدافها وإيصال مشاريعها للـعملاء المسـتهدفين بـأفضل صـورة ممكنـة.'}
                       Ic_width={'96px'}
                      Ic_hight={'96px'}
                      isAnimation={true}/>
                  </div>
            </div>
      </>
  )
}

export default AboutUs
