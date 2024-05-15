import './Photos.css'
import { photos } from '../../data'

function Photos (props) {
    return (
<section class="photos" id="catalogId"> 
     <div class="photos-list"> 
       <div class="photos-list-item">
        <img src={photos[0].pic} alt="" class="photos-item-img" />
        <h2 class="photos-list-item-title">{photos[0].type}</h2>
      </div>
      <div class="photos-list-item">
        <img src={photos[1].pic} alt="" class="photos-item-img" />
        <h2 class="photos-list-item-title">{photos[1].type}</h2>
      </div>
      <div class="photos-list-item">
        <img src={photos[2].pic} alt="" class="photos-item-img" />
        <h2 class="photos-list-item-title">{photos[2].type}</h2>
      </div>
      <div class="photos-list-item">
        <img src={photos[3].pic} alt="" class="photos-item-img" />
        <h2 class="photos-list-item-title">{photos[3].type}</h2>
      </div>
      <div class="photos-list-item">
        <img src={photos[4].pic} alt="" class="photos-item-img" />
        <h2 class="photos-list-item-title">{photos[4].type}</h2>
      </div> 
      <div class="photos-list-item">
        <p class="photos-list-item-subtitle">{photos[5].type}</p>
        <img src={photos[5].pic} alt="" class="photos-list-item-read-more" />
      </div>
      </div>
  </section>
  )
}

export default Photos