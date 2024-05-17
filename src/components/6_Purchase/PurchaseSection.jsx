import './Purchase.css'
import { purchase } from '../../data'
import Purchase from './Purchase'


export default function PurchaseSection () {
  return (
    <section className="purchase" >
    <div className="purchase_container">    
      <h2 className="purchase_text">Недавно купили</h2> 
        <div className="purchase_cart">
          {purchase.map(purchase => <Purchase key={purchase.img}  {...purchase}/>)}
        </div>
      </div>
    </section>
  )
}
 