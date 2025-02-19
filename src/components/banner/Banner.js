import { useState, useEffect } from "react";
import "./banner.css";
import pesca1 from "../../assets/pesca-img/pesca1.jpg";
import pesca2 from "../../assets/pesca-img/pesca2.jpg";
import pesca3 from "../../assets/pesca-img/pesca3.jpg";
import imgPets1 from "../../assets/pets-img/img1.jpg";
import imgPets2 from "../../assets/pets-img/img2.png";
import imgPets3 from "../../assets/pets-img/img3.jpg";

export default function Banner() {
    
    const images1 = [imgPets1, imgPets2, imgPets3];
    const images2 = [pesca1, pesca2, pesca3];

    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <h1>Hello World</h1>
            {/* Slideshow Container */}
            <div className="slideshow-container">
                <div className="slideshow">
                    <img src={images1[currentIndex1]} alt="Slideshow 1" className="slideshow-image" />
                </div>

                <div className="slideshow">
                    <img src={images2[currentIndex2]} alt="Slideshow 2" className="slideshow-image" />
                </div>
            </div>
        </>
    );
}
