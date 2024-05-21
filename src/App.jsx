import './fonts.css'
import './normalize.css'
import Header from './components/1_Header/Header'
// import Swiper from './components/2_Swiper/Swiper'
import PhotosSection from './components/3_Photos/PhotosSection'
import AboutUs from './components/4_AboutUs/AboutUs'
import Info from './components/5_Info/Info'
import PurchaseSection from './components/6_Purchase/PurchaseSection.jsx'
import Form from './components/7_Form/Form'
import FAQ from './components/8_FAQ/FAQ'
import InstagramSection from './components/9_Instagram/InstagramSection'
import Map from './components/10_Map/Map'
import Footer from './components/11_Footer/Footer'
import TabSection from './components/TabSection/TabSection.jsx'
import FeedbackSection from './components/FeedbackSection/FeedbackSection.jsx'
import { useState } from 'react'

function App() {

  const [tab, setTab] = useState('feedback')


  return (
    <>
      <Header />
      <main>
      {/* <TabSection active={tab} onChange={(current) => setTab(current)}/> */}

      {/* {tab == 'main' && ( */}
      {/* <> */}
        <PhotosSection />
        <AboutUs />
        <Info />
        <PurchaseSection/>
        <Form />
        <FAQ />
        <InstagramSection />
        <Map />

      {/* </>)
      } */}
      {/* {tab == 'feedback' && ( */}
        {/* <>
          <FeedbackSection />
        </>)
      } */}
      </main>
      <Footer />
    </>
  )
}

export default App
