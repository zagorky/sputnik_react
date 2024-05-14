import './App.css'
import Header from './components/1_Header/Header'
// import Swiper from './components/2_Swiper/Swiper'
// import Photos from './components/3_Photos/Photos'
import AboutUs from './components/4_AboutUs/AboutUs'
import Info from './components/5_Info/Info'
// import Purchase from './components/6_Purchase/Purchase'
import Form from './components/7_Form/Form'
// import FAQ from './components/8_FAQ/FAQ'
import Instagram from './components/9_Instagram/Instagram'
import Map from './components/10_Map/Map'
import Footer from './components/11_Footer/Footer'



function App() {

  return (
    <>
    <Header />
    {/* <Swiper /> */}
    {/* <Photos /> */}
    <AboutUs />
    <Info />
    {/* <Purchase /> */}
    <Form />
    {/* FAQ */}
    <Instagram />    
    <Map />
    <Footer />
    </>
  )
}

export default App
