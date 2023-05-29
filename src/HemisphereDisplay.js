import React from 'react';
import './Hemisphere.css';
import northernPic from './image/northern.jpg';
import southernPic from './image/southern.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'You are in northern hemisphere',
        picture: northernPic
    },
    Southern: {
        text: 'You are in southern hemisphere',
        picture: southernPic
    }
}

const HemisphereDisplay = ({latitude}) => {
    
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} = hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere} >
            <div className='ui raised container segment'>
                <div className='image'>
                    <img src={picture} alt="hemisphere picture"></img>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{ text }</h1>
                </div>
            </div>
        </div>
        
    )
}

export default HemisphereDisplay;