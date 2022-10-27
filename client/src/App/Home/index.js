import React, {useState,useEffect} from 'react';
import InfoPanel from '../InfoPanel';
import './index.scss';
import Button from '@mui/material/Button';

const Home = () => {

  const [imageBitmaps, setImageBitmaps] = useState(  )

    const userAction = async () => {
        console.log("here")
        const response = await fetch('http://localhost:8000/magic', {
          method: 'POST',
          body: "lol,lmao", // string or object
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const myJson = await response.json(); //extract JSON from the http response
        const imageSources = myJson[1]
        const lol = await Promise.all(imageSources.map(
          async (elem) => {
        const response = await fetch(elem)
        const imageBlob = await response.blob()
        const imagebit = await createImageBitmap(imageBlob)
        //console.log(imagebit)
        return imagebit
          }))

        setImageBitmaps(lol)
        // do something with myJson
      }


      

    return (    
        <div className="Home">
            <Button variant="contained" onClick = {()=>userAction()}>Load</Button>
            <InfoPanel
            imageBitmaps = {imageBitmaps}
            imageWidth = {"400px"}
            imageHeight = {"200px"}
	    ></InfoPanel>
        </div>
    );  
}

export default Home;
