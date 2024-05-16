import './Photos.css'
import { photos } from '../../data'

function Photos (props) {
    return (
       <div className="photos-list-item">
        <img src={props.pic} alt="" className="photos-item-img" />
        <h2 className="photos-list-item-title">{props.type}</h2>
      </div>
       )
}

export default Photos