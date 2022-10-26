import React from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import './index.scss';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ImageSlider from '../ImageSlider';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const InfoPanel  = () => {
    return (   
        <div className="Info">
                <Grid
                    container
                    direction="row"
                    wrap="nowrap"
                    alignItems="flex-start"
                    justifyContent="center"
                    sx={{ minHeight: '100%' }}
                >   
                    <Grid item>
                            <Grid
                                container
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="center"
                            >
                                <Grid item>
                                    <Item>lol</Item>
                                </Grid>
                                <Grid item>
                                    <Item>lol2</Item>
                                </Grid>
                                <Grid item>
                                    <Item>lol3</Item>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <ImageSlider></ImageSlider>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="center"
                            >
                                <Grid item>
                                    <Item>lol</Item>
                                </Grid>
                                <Grid item>
                                    <Item>lol2</Item>
                                </Grid>
                                <Grid item>
                                    <Item>lol3</Item>
                                </Grid>
                            </Grid>
                        </Grid>

                </Grid>
            </div>
    )
}

export default InfoPanel;