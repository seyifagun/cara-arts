"use client";

import "../../styles/ProductDetails.scss";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Head from "@/components/Head";
import {
  ArrowForwardIos,
  Edit,
  FavoriteBorder,
  ArrowBackIosNew,
  ShoppingCart,
  Favorite,
} from "@mui/icons-material";
import images from "@/public/images";

const ProductDetails = () => {
  
const work = {
    description: "The Eyo Festival or Adamu Orisa, is one of the most striking and traditional Lagos' events. It only happens on the island of Lagos and is celebrated occasionally, without periodicity (it is celebrated on a Saturday) which makes this event rare and exclusive. Eyos (the masquerades) celebrate a Oba´s (king) life.",
    username: "Oluseye",
    title: "Eyo Festival",
    amount: "3700"
}


  /* GET WORK DETAILS */
  const goToPrevSlide = () => {
    setCurrentIndex(
      // (prevIndex) =>
      //   (prevIndex - 1 + work.workPhotoPaths.length) %
      //   work.workPhotoPaths.length
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  /* SHOW MORE PHOTOS */
  const [visiblePhotos, setVisiblePhotos] = useState(5);

  const loadMorePhotos = () => {
    // setVisiblePhotos(work.workPhotoPaths.length);
  };

  /* SELECT PHOTO TO SHOW */
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const handleSelectedPhoto = (index) => {
    // setSelectedPhoto(index);
    // setCurrentIndex(index);
  };

  return (
    <>
      <Head title='Cara Arts | Product Details 2' />
      
      <div className="work-details">
        <div className="title">
          <h1>{work.title}</h1>
            <div className="save">
                <FavoriteBorder />
              <p>Save</p>
            </div>
        </div>

        <div className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
              <div className="slide">
                <img src="/Afro_art/eyo_festival.jpg" alt="product-art-img" />
                <div className="prev-button">
                  <ArrowBackIosNew sx={{ fontSize: "15px" }} />
                </div>
                <div className="next-button">
                  <ArrowForwardIos sx={{ fontSize: "15px" }} />
                </div>
              </div>
          </div>
        </div>

        <div className="photos">
            <img
              src="/Afro_art/eyo_festival.jpg"
              alt="work-demo"
              // key={index}
              onClick={() => handleSelectedPhoto(index)}
              // className={selectedPhoto === index ? "selected" : ""}
            />

            <div className="show-more" onClick={loadMorePhotos}>
              <ArrowForwardIos sx={{ fontSize: "40px" }} />
              Show More
            </div>
        </div>
        <hr />

        <div className="profile">
          <img
            src='/assets/phucmai.png'
            alt="profile"
          />
          <h3>Created by {work.username}</h3>
        </div>

        <hr />

        <h3>About this product</h3>
        <p>{work.description}</p>

        <h1>${work.amount}</h1>
        <button type="submit">
          <ShoppingCart />
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
