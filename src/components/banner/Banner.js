import { useState, useEffect } from "react";
import "./banner.css";

// Imagens dos ÍCONES
import iconAnimais from "../../assets/icons/animais.png";
import iconAgro from "../../assets/icons/agro.png";
import iconVet from "../../assets/icons/vet.png";
import iconTiro from "../../assets/icons/tiro.png";
import iconPesca from "../../assets/icons/pesca.png";
import iconCasa from "../../assets/icons/casa.png";
import iconSelaria from "../../assets/icons/selaria.png";

// Imagens dos BANNERS
import imgPesca1 from "../../assets/pesca-img/pesca1.jpg";
import imgPesca2 from "../../assets/pesca-img/pesca2.jpg";
import imgPesca3 from "../../assets/pesca-img/pesca3.jpg";

import imgPets1 from "../../assets/pets-img/img1.jpg";
import imgPets2 from "../../assets/pets-img/img2.png";
import imgPets3 from "../../assets/pets-img/img3.jpg";

import imgJardinagem1 from "../../assets/jardinagem-img/imgJardinagem1.jpg";
import imgJardinagem2 from "../../assets/jardinagem-img/imgJardinagem2.jpg";
import imgJardinagem3 from "../../assets/jardinagem-img/imgJardinagem3.jpg";

export default function Banner() {
  const images1 = [imgPets1, imgPets2, imgPets3];
  const images2 = [imgPesca1, imgPesca2, imgPesca3];
  const images3 = [imgJardinagem1, imgJardinagem2, imgJardinagem3];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const nextImage = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval1 = setInterval(() => nextImage(setCurrentIndex1, images1), 3000);
    const interval2 = setInterval(() => nextImage(setCurrentIndex2, images2), 3000);
    const interval3 = setInterval(() => nextImage(setCurrentIndex3, images3), 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <>
      {/* MENU DE CATEGORIAS COM IMAGENS E NOMES */}
      <div className="category-menu">
        <div className="category-item">
          <img src={iconAnimais} alt="Animais e Pet" className="category-icon" />
          <p>ANIMAIS E PET</p>
        </div>
        <div className="category-item">
          <img src={iconAgro} alt="Agronegócios" className="category-icon" />
          <p>AGRONEGÓCIOS</p>
        </div>
        <div className="category-item">
          <img src={iconVet} alt="Farmácia Vet" className="category-icon" />
          <p>FARMÁCIA VET</p>
        </div>
        <div className="category-item">
          <img src={iconTiro} alt="Tiro Esportivo" className="category-icon" />
          <p>TIRO ESPORTIVO</p>
        </div>
        <div className="category-item">
          <img src={iconPesca} alt="Pesca e Camping" className="category-icon" />
          <p>PESCA E CAMPING</p>
        </div>
        <div className="category-item">
          <img src={iconCasa} alt="Casa e Jardim" className="category-icon" />
          <p>CASA & JARDIM</p>
        </div>
        <div className="category-item">
          <img src={iconSelaria} alt="Selaria" className="category-icon" />
          <p>SELARIA</p>
        </div>
      </div>

      {/* BANNERS */}
      <div className="banner-container">
        <div className="banner-item">
          <h2 className="banner-title">Material Jardinagem</h2>
          <div className="slideshow">
            <button className="prev-btn" onClick={() => prevImage(setCurrentIndex3, images3)}>❮</button>
            <img src={images3[currentIndex3]} alt="Jardinagem" className="slideshow-image" />
            <button className="next-btn" onClick={() => nextImage(setCurrentIndex3, images3)}>❯</button>
          </div>
        </div>

        <div className="banner-item">
          <h2 className="banner-title">Produtos Pets</h2>
          <div className="slideshow">
            <button className="prev-btn" onClick={() => prevImage(setCurrentIndex1, images1)}>❮</button>
            <img src={images1[currentIndex1]} alt="Pets" className="slideshow-image" />
            <button className="next-btn" onClick={() => nextImage(setCurrentIndex1, images1)}>❯</button>
          </div>
        </div>

        <div className="banner-item">
          <h2 className="banner-title">Material Pesca</h2>
          <div className="slideshow">
            <button className="prev-btn" onClick={() => prevImage(setCurrentIndex2, images2)}>❮</button>
            <img src={images2[currentIndex2]} alt="Pesca" className="slideshow-image" />
            <button className="next-btn" onClick={() => nextImage(setCurrentIndex2, images2)}>❯</button>
          </div>
        </div>
      </div>
    </>
  );
}
