import React from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import './index.scss';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InfoPanel from '../InfoPanel';


const Home = () => {
    return (    
        <div className="test">
           <InfoPanel></InfoPanel>
        </div>
    );  
}

export default Home;
