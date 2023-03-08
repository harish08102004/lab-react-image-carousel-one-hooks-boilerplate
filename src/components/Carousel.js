import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData"

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currNo,changeNo]=useState(0)
    console.log(images)
    return(
        
        <div id="page">
           
            <h2 id="title">
                {images[currNo].title}
            </h2>
            <div id="images">
            <img src={images[currNo].img} alt = ""></img>

            </div>
            <div id="sub">
                {images[currNo].subtitle}
            </div>
                
                 <div id="left-arrow" onClick={currNo > 0? ()=>changeNo(currNo-1): null}> <ArrowBackIosIcon  /></div>
                 <div id="right-arrow" onClick= {currNo < 2 ? ()=>changeNo(currNo+1): null}><ArrowForwardIosIcon/></div>

           
                
            
        </div>
    )
}

export default Carousel;