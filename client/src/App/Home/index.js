import React from 'react';
import InfoPanel from '../InfoPanel';
import './index.scss';


const Home = () => {
    return (    
        <div className="Home">
            <InfoPanel
            imageSources = {["hurricaneSandy-1.jpg","img3.jpg","akyOc.png"]}
            imageWidth = {"400px"}
            imageHeight = {"200px"}
	    ></InfoPanel>
        </div>
    );  
}

export default Home;
