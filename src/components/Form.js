import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import memeData from "../memeData";
import { makeStyles } from '@mui/styles';

const useStyles =  makeStyles({
    img: {
        width: 500,
        padding: 10,
        
    }
})


const Form = () => {
    const classes = useStyles();
    
    //const [memeImage, setMemeImage] = useState("https://i.imgflip.com/8p0a.jpg")

    //const allMemes = memeData.data.memes.map(x => x.url);

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/8p0a.jpg"
    })
    
    //const [allMemesImg, setAllMemesImg] = useState(allMemes)
    

    const randomMeme = () => {
        const memesArray = memeData.data.memes
        let random = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
    }


    return(
    <Box
      sx={{
        width: 1000,
        margin: 'auto'
      }}
      noValidate
      autoComplete="off"
    >
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 7
        }}>
            <TextField id="outlined-basic" label="First part" variant="outlined" sx={{ minWidth: 420, marginX: 2 }}/>
            <TextField id="outlined-basic" label="Second part" variant="outlined"  sx={{ minWidth: 420, marginX: 2 }}/>
        </Box>

        <Button onClick={randomMeme} variant="contained" sx={{
            display: 'block',
            minWidth: 870,
            margin: 'auto',
            marginTop: 5,
            padding: 2,
            background: 'linear-gradient(90deg, #672280 1.18%, #A626D3 100%)',
            

        }}>GET A NEW MEME IMAGE</Button>

        <Box sx={{maxWidth: 900, marginTop: 5}}>
            <img src={meme.randomImg} alt="random meme" className={classes.img}/>
        </Box>
    </Box>
        
        
    )

}

export default Form