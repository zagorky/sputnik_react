import './Instagram.css'
import { insta } from '../../data'

export default function InstagramSection (props) {
return (
  <section className = "instagram">
    <h2 className="instagram-header-title">Наш Instagram</h2>
    <div className="instagram-body-container">
      {insta.map(insta => <Instagram key={insta.img} {...insta} />)}
    </div>  
  </section>
  )
}