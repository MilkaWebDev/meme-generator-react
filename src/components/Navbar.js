import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import navbarLogo from "../img/navbarLogo.png";
import { makeStyles } from '@mui/styles';

const useStyles =  makeStyles({
    root: {
        background: 'linear-gradient(90deg, #672280 1.18%, #A626D3 100%)',
        height: '70px'
        
    },
    img: {
        width: 60,
        padding: 10
    }
})

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <Box sx={{ 
            flexGrow: 1,
            width: 1000,
            margin: 'auto'
            }} >
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <img src={navbarLogo} alt='logo'
                className={classes.img}/>
            <Typography variant="h6" component="div" 
            sx={{ 
                flexGrow: 2,
                paddingLeft: 1
                }}>
                Meme Generator
            </Typography>
            <Typography color="inherit">React Course - Proyect 3</Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
