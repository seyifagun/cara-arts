import {
    ArrowBackIosNew,
    ArrowForwardIos,
  } from "@mui/icons-material";
  import "../styles/WorkCard.scss";
  import { useState } from "react";
  
  const DummyCard = ({ img, amount, title, creator, category, alt, link, image }) => {
    //console.log(work);
    /* SLIDER FOR PHOTOS */
   
    const CardImages = [
        {
          image : '/Afro_art/mozambican_boy.jpg'
        },
        {
          image : '/Afro_art/eyo_festival.jpg'
        },
        {
          image : '/Afro_art/women_dancing.JPG'
        },

      ]

      const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <>
      <div
        className="work-card"
      >
        <a href={`${link}`}>
        <div className="slider-container">
              <div
                className="slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                  <div className="slide">
                    <img src={image} alt="artwork-img" width={100} height={100} />
                    <div
                      className="prev-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrevSlide(e); 
                      }}
                    >
                      <ArrowBackIosNew sx={{ fontSize: "15px" }} />
                    </div>
                    <div
                      className="next-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNextSlide(e);
                      }}
                    >
                      <ArrowForwardIos sx={{ fontSize: "15px" }} />
                    </div>
                  </div>
              </div>
        </div>
          <div className="info">
            <div>
              <h3>{title}</h3>
              <div className="creator">
              <img src={img} alt="creator-img" />
                <span>{creator}</span> in <span>{category}</span>
              </div>
            </div>
            <div className="price">${amount}</div>
          </div>
        </a>
      </div>
     
      </>
    );
  };
  
  export default DummyCard;

  