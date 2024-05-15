import './Swiper.css'


function Swiper () {
    return (
<section>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><div class="swiper-container">
      <div class="swiper-main">     
        <div class="swiper-text">
          <div><h2>Новый взгляд</h2></div>
          <div><p>на привычные вещи</p></div>
          <div class="swiper-btn"><button class="swiper-text-button"><a href="#catalogId">Посмотреть</a></button></div>
        </div>
        <div class="swiper-image">
          <div><img src="img/photo-1.jpg" /></div>
        </div>
      </div>
    </div>      </div>
    <div class="swiper-slide"><div class="swiper-container">
      <div class="swiper-main">   
        <div class="swiper-text">
          <div><h2>Желтый цвет</h2></div>
          <div><p>всегда в моде</p></div>
          <div><button class="swiper-text-button"><a href="#catalogId">Подробнее</a></button></div>
        </div>
        <div class="swiper-image">
          <div><img src="img/photo-2.jpg" /></div>
        </div>          
      </div>
    </div>      </div>
    <div class="swiper-slide"><div class="swiper-container">
      <div class="swiper-main">          
        <div class="swiper-text">
          <div><h2>Скидка 25%</h2></div>
          <div><p>на летнюю коллекцию</p></div>
          <div><button class="swiper-text-button"><a href="#catalogId">Подробнее</a></button></div>
        </div>
        <div class="swiper-image">
          <div><img src="img/photo-3.jpg" /></div>
        </div>
      </div>                    
    </div></div>
  </div>
  <div class="swiper-pagination"></div>
  </div>
</section>
    )
}
export default Swiper