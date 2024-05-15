import './Instagram.css'
import { insta } from '../../data'

function Instagram (props) {
return (
<section class = "instagram">
    <div class="instagram-container">
      <div class="instagram-header">
        <h2 class="instagram-header-title">Наш Instagram</h2>
      </div>
      <div class="instagram-body">
        <div class="instagram-body-container">
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
