import './Purchase.css'
import { purchase } from '../../data'
import Purchase from './Purchase'


export default function PurchaseSection (props) {
  return (
    <section class="purchase" >
    <div class="purchase_container">    
      <h2 class="purchase_text">Недавно купили</h2> 
        <div class="purchase_cart">
          {purchase.map(purchase => <Purchase key={purchase.img}  {...purchase}/>)}
        </div>
      </div>
    </section>
  )
}
 