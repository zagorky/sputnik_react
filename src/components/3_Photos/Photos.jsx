import './Photos.css'
import { photos } from '../../data'

function Photos (props) {
    return (
<section className="photos" id="photos"> 
     <div className="photos-list"> 
       <div className="photos-list-item">
        <img src={photos[0].pic} alt="" className="photos-item-img" />
        <h2 className="photos-list-item-title">{photos[0].type}</h2>
      </div>
      <div className="photos-list-item">
        <img src={photos[1].pic} alt="" className="photos-item-img" />
        <h2 className="photos-list-item-title">{photos[1].type}</h2>
      </div>
      <div className="photos-list-item">
        <img src={photos[2].pic} alt="" className="photos-item-img" />
        <h2 className="photos-list-item-title">{photos[2].type}</h2>
      </div>
      <div className="photos-list-item">
        <img src={photos[3].pic} alt="" className="photos-item-img" />
        <h2 className="photos-list-item-title">{photos[3].type}</h2>
      </div>
      <div className="photos-list-item">
        <img src={photos[4].pic} alt="" className="photos-item-img" />
        <h2 className="photos-list-item-title">{photos[4].type}</h2>
      </div> 
      <div className="photos-list-item">
        <p className="photos-list-item-subtitle">{photos[5].type}</p>
        <img src={photos[5].pic} alt="" className="photos-list-item-read-more" />
      </div>
      </div>
  </section>
  )
}

export default Photos