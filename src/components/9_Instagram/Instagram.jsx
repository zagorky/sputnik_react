import './Instagram.css'
import { insta } from '../../data'

function Instagram (props) {
return (
<section className = "instagram">
    <div className="instagram-container">
      <div className="instagram-header">
        <h2 className="instagram-header-title">Наш Instagram</h2>
      </div>
      <div className="instagram-body">
        <div className="instagram-body-container">
          <img src={insta[0].img} alt="" />
          <img src={insta[1].img} alt="" />
          <img src={insta[2].img} alt="" />
          <img src={insta[3].img} alt="" />
          <img src={insta[4].img} alt="" />
          <img src={insta[5].img} alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}
export default Instagram
