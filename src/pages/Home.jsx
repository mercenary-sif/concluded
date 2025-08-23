
import Footer from '../components/Footer'
import { AboutUs, Header, OurTarget, WhyUs } from '../containers/export'

const Home = () => {
  return (
     <div className='rtl'>
      <Header/>
      <AboutUs/>
      <OurTarget/>
      <WhyUs/>
      <Footer/>
    </div>
  )
}

export default Home
