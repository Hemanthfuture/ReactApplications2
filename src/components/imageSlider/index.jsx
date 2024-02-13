import React, { useEffect } from "react";
import "./style.css";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"


export default function ImageSlider({ url, page, limit }) {

    const [images, setImages] = React.useState([]);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [errormsg, setErrorMsg] = React.useState(null);

    async function fetchImages(getUrl) {
        try {
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            let data = await response.json();
            if (data) {
                setImages(data);
            }

        } catch (e) {
            setErrorMsg(e.message);
        }
    }

    React.useEffect(() => {
        if (url) {
            fetchImages(url);
        }

    }, [url, page, limit])
    function handleLeft(){
        setCurrentSlide((prevslide)=>{
            
                if(prevslide===0){
                    return(images.length-1);
                }else{
                    return(prevslide-1);
                }
            
        })
    }
    function handleRight(){
        setCurrentSlide((prevslide)=>{
            
            if(prevslide===images.length-1){
                return(0);
            }else{
                return(prevslide+1);
            }
        
    })
    }
    function handleImage(getIndex){
        setCurrentSlide(getIndex);
    }



    return (
        <div className="container">

            <BsArrowLeftCircleFill
            className="leftarrow"
            onClick={handleLeft}
            />
            {   images&&images.length?
                images.map((image,index) => {
                    // console.log(image.id)

                    return (
                        <img 
                        key={image.id}
                        src={image.download_url} 
                        alt={image.download_url} 

                        className={index===currentSlide?"mainimage":"mainimage notdisplayimage"}  />
                    )
                }):null
            }
            <BsArrowRightCircleFill
            className="rightarrow"
            onClick={handleRight}
            />
            <span className="circles">

            {
                images.map((image,index)=>{
                    return(
                        <button
                        key={image.id}
                        className={index===currentSlide?"smallcircle":"smallcircle disablecircle"}
                        onClick={()=>handleImage(index)}
                        ></button>
                    )
                })
            }
            </span>

        </div>
    )
}