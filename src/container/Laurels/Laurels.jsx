import React from 'react';
import {images, data} from '../../constants';
import {SubHeading} from '../../components';

import './Laurels.css';
const AwardCard =({Award:{imgUrl,title,subtitle}}) =>(
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="card image" />
    <div className='app__laurels_awards-card-content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
    
  </div>
);

const Laurels = () => {

 

  return(
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__laurels app__wrapper_info '>
        <SubHeading title='Awards & recognition'/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='app__laurels_awards'>
        {data.awards.map((awards)=>(<AwardCard Award={awards} key={awards.title}  />))}
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt="laurels image" />
      </div>
    </div>
  );
}
  


export default Laurels;
