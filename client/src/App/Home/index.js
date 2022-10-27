import React from 'react';
import InfoPanel from '../InfoPanel';
import './index.scss';


const Home = () => {

    const userAction = async () => {
        const response = await fetch('http://localhost:8000/magic', {
          method: 'POST',
          body: "lol,lmao", // string or object
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson)
        // do something with myJson
      }
      userAction()

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
