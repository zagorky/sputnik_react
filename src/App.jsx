import './fonts.css'
import './normalize.css'
// import { useState } from 'react'
import Header from './components/1_Header/Header'
// import Swiper from './components/2_Swiper/Swiper'
import Photos from './components/3_Photos/Photos'
import AboutUs from './components/4_AboutUs/AboutUs'
import Info from './components/5_Info/Info'
import Purchase from './components/6_Purchase/Purchase'
import Form from './components/7_Form/Form'
import FAQ_alt from './components/8_FAQ/FAQ_alt'
import Instagram from './components/9_Instagram/Instagram'
import Map from './components/10_Map/Map'
import Footer from './components/11_Footer/Footer'
import { purchase } from './data'

function App() {

  return (
    <>
      <Header />
      {/* <Swiper /> */}
      <Photos />
      <AboutUs />
      <Info />
      <section class="purchase" >
          <div class="purchase_container">    
            <h2 class="purchase_text">Недавно купили</h2> 
              <div class="purchase_cart">
              <Purchase {...purchase[0]}/>
              <Purchase {...purchase[1]}/>
              <Purchase {...purchase[2]}/>
              <Purchase {...purchase[3]}/>
              </div>
          </div>
      </section>
      <Form />
      <FAQ_alt />
      <Instagram />    
      <Map />
      <Footer />
    </>
  )
}

export default App
