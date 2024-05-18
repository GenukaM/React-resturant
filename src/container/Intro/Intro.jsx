import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import {meal} from '../../constants'

import './Intro.css';

const Intro = () => {

   const [playVideo , setPlayVideo] = useState(false);
   const videoRef = useRef();
  return(
    <div className='app__video'>
      <video src={meal} type="video/mp4" muted controls={false} loop ref={videoRef}  />
    </div>
  );
}

export default Intro;
