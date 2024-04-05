import React from 'react';
import {images , data} from '../../constants'
import {SubHeading , MenuItem} from '../../components'
import './SpecialMenu.css';


const SpecialMenu = () => {
  return(
    <div className='app__specialMenu flex__center section__paddin'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu That Fits Your Palatte'/>
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu-wine flex__center'>
          <p className='app__specialMenu-menu-title'>Wine & Beer</p>
          <div className='app__specialMenu-menu-items'>
            {data.wines.map((data,index)=>(
              <MenuItem title={data.title} price={data.price} tags={data.tags}/>
            ))}
          </div>
        </div>
          <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt='Menu image'/>
          </div>
          <div className='app__specialMenu-menu-cocktails flex__center'>
            <p className='app__specialMenu-menu-title'>Cocktails</p>
            <div className='app__specialMenu-menu-items'>
              {data.cocktails.map((data,index)=>(
                <MenuItem title={data.title} price={data.price} tags={data.tags}/>
              ))}
            </div>
          </div>
      </div>
     
      <div className='app__specialMenu-button'>
        <button className='custom__button'>View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
