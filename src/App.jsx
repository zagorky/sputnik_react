import './fonts.css'
import './normalize.css'
import Header from './components/1_Header/Header'
// import Swiper from './components/2_Swiper/Swiper'
import PhotosSection from './components/3_Photos/PhotosSection'
import AboutUs from './components/4_AboutUs/AboutUs'
import Info from './components/5_Info/Info'
import PurchaseSection from './components/6_Purchase/PurchaseSection'
import Form from './components/7_Form/Form'
import FAQ_alt from './components/8_FAQ/FAQ_alt'
import InstagramSection from './components/9_Instagram/InstagramSection'
import Map from './components/10_Map/Map'
import Footer from './components/11_Footer/Footer'

function App() {

  return (
    <>
      <Header />
      {/* <Swiper /> */}
      <PhotosSection />
      <AboutUs />
      <Info />
      <PurchaseSection />
      <Form />
      <FAQ_alt />
      <InstagramSection />
      <Map />
      <Footer />
    </>
  )
}

export default App
