import './Purchase.css'


function Purchase (props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <p className="purchase_discript">{props.type}</p>
      <p className="price">{props.price}</p>
    </div>
  )
}




{/* <section>
  <div class="purchase">
   <div class="purchase_container">
    <h2 class="purchase_text">Недавно купили</h2> 
    <div class="purchase_cart">
      <div >
        <img src="img/cross-body.jpg" alt="" srcset="" class="img2" />
        <p class="purchase_discript">Кросс-боди VERA</p>
        <p class="price">3 260 ₽</p>
      </div>
      <div>
        <img src="img/tout.png" alt="" srcset="" class="toyt" />
        <p class="purchase_discript">Тоут MARCEL</p>
        <p class="price">12 650 ₽ <span class="last_price">14 190 ₽</span></p>
      </div>
      <div>
        <img src="img/backpack.jpg" alt="" srcset="" />
        <p class="purchase_discript">Рюкзак М1</p>
        <p class="price">4 650 ₽</p>
      </div>
      <div>
        <img src="img/waist-bag.jpg" alt="" srcset="" />
        <p class="purchase_discript">Поясная сумка INGE</p>
        <p class="price">2 990 ₽</p>
      </div>
    </div>
   </div> 
    
  </div>
 </section> */}

   

export default Purchase