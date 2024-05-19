import React, { useRef } from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import { BsInstagram, BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const GalleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]
const Gallery = () => {
  

  const ScrollRef = useRef();

  const Scroll = (direction) =>{
    const {current} = ScrollRef;

    if(direction === "Left"){
      current.scrollLeft -= 300
    }else{
      current.scrollLeft += 300
    }
  }
  return(
    <div className='app__gallery flex__center app__bg section__padding'>
      <div className='app__gallery-content'>
        <SubHeading title="Instragram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:'AAA', marginTop:'1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className='custom__button' style={{ marginTop:'1rem'}}>View More</button>
        
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={ScrollRef}>
          {GalleryImages.map((images,index) =>(
            <div className='app__gallery-images-card' key={`gallery_images-${index+ 1 }`}>
              <BsInstagram className='app__gallery-icon' />
              <img src={images} alt='images' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_controllers'>
          <BsArrowLeftShort className='gallery__arrow' onClick={()=>{Scroll('Left')}} />
          <BsArrowRightShort className='gallery__arrow' onClick={()=>{Scroll('Right')}} />
        </div>
      </div>

    </div>
  );
}

export default Gallery;
