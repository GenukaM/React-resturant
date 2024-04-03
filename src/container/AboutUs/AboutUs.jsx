import React from 'react';
import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => {
  return(
    <div className='app__about-us flex__center section__padding app__bg'>
      <div className='app__about-us_overlay flex__center'>
        <img src={images.G} alt="letter G"/>
      </div>
      <div className='app__about-us_content flex__center'>
        <div className='app_about-us_content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} className='spoon__img' alt='About spoon'/>
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et</p>
          <button className='custom__button'>Know More</button>
        </div>
        <div className='app_about-us_content_knife flex__center'>
          <img src={images.knife} alt="knife" />
        </div>
        <div className='app_about-us_content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} className='spoon__img' alt='About spoon'/>
          <p className='p__opensans'>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
          <button className='custom__button'>Know More</button>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
