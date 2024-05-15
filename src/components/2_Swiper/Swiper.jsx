import './Swiper.css'


function Swiper () {
    return (
<section>
<div className="swiper-container">
  <div className="swiper-wrapper">
    <div className="swiper-slide"><div className="swiper-container">
      <div className="swiper-main">     
        <div className="swiper-text">
          <div><h2>Новый взгляд</h2></div>
          <div><p>на привычные вещи</p></div>
          <div className="swiper-btn"><button className="swiper-text-button"><a href="#catalogId">Посмотреть</a></button></div>
        </div>
        <div className="swiper-image">
          <div><img src="img/photo-1.jpg" /></div>
        </div>
      </div>
    </div>      </div>
    <div className="swiper-slide"><div className="swiper-container">
      <div className="swiper-main">   
        <div className="swiper-text">
          <div><h2>Желтый цвет</h2></div>
          <div><p>всегда в моде</p></div>
          <div><button className="swiper-text-button"><a href="#catalogId">Подробнее</a></button></div>
        </div>
        <div className="swiper-image">
          <div><img src="img/photo-2.jpg" /></div>
        </div>          
      </div>
    </div>      </div>
    <div className="swiper-slide"><div className="swiper-container">
      <div className="swiper-main">          
        <div className="swiper-text">
          <div><h2>Скидка 25%</h2></div>
          <div><p>на летнюю коллекцию</p></div>
          <div><button className="swiper-text-button"><a href="#catalogId">Подробнее</a></button></div>
        </div>
        <div className="swiper-image">
          <div><img src="img/photo-3.jpg" /></div>
        </div>
      </div>                    
    </div></div>
  </div>
  <div className="swiper-pagination"></div>
  </div>
</section>
    )
}
export default Swiper