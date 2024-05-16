import './Purchase.css'


function Purchase (props) {
  return (
    <div className='purchase-cart-block'>
      <img src={props.img} alt="" className='purchase-img' />
      <p className="purchase_discript">{props.type}</p>
      <p className="price">{props.price}</p>
    </div>
  )
}

export default Purchase