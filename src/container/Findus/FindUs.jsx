import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const FindUs = () => {
  return(
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__findus-info app__wrapper_info'>
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant'>Find Us</h1>
        <div className='app__wrapper_info' style={{marginTop:'3rem'}}>
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className='p__cormorant' style={{color:'#DCCA87',margin:'2rem 0'}}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans' style={{margin:'1rem 0'}}>Sat - Sun: 10:00 am - 03:00 am</p>
          <button className='custom__button' style={{margin:'2rem 0'}}>Visit Us</button>
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  );
};

export default FindUs;
