import './App.css'
import './fonts.css'
import './normalize.css'
import Header from './components/1_Header/Header'
// import Swiper from './components/2_Swiper/Swiper'
// import Photos from './components/3_Photos/Photos'
import AboutUs from './components/4_AboutUs/AboutUs'
import Info from './components/5_Info/Info'
import Purchase from './components/6_Purchase/Purchase'
import Form from './components/7_Form/Form'
// import FAQ from './components/8_FAQ/FAQ'
import Instagram from './components/9_Instagram/Instagram'
import Map from './components/10_Map/Map'
import Footer from './components/11_Footer/Footer'
import { purchase } from './data'






function App() {

  return (
    <>
      <Header />
      {/* <Swiper /> */}
      {/* <Photos /> */}
      <AboutUs />
      <Info />
      <section>
        <div class="purchase">
          <div class="purchase_container">    
            <h2 class="purchase_text">Недавно купили</h2> 
              <div class="purchase_cart">
                <Purchase 
                img={purchase[0].img} 
                type={purchase[0].type} 
                price={purchase[0].price} />
                <Purchase 
                img={purchase[1].img} 
                type={purchase[1].type} 
                price={purchase[1].price}/>
                <Purchase 
                img={purchase[2].img} 
                type={purchase[2].type} 
                price={purchase[2].price} />
                <Purchase 
                img={purchase[3].img} 
                type={purchase[3].type} 
                price={purchase[3].price} />
              </div>
          </div>
        </div>
      </section>

      <Form />
      {/* FAQ */}
      <Instagram />    
      <Map />
      <Footer />
    </>
  )
}

export default App
