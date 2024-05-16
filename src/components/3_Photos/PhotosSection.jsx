import './Photos.css'
import Photos from './Photos'
import { photos } from '../../data'

export default function PhotosSection (props) {
    return (
      <section className="photos" id="photos"> 
        <div className="photos-list">       
        {photos.map(photos => <Photos key={photos.type} {...photos} />)}
        </div>
      </section>
       )
}
