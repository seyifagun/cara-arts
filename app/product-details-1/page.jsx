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
    description: "This is an art that amplifies the inner childhood of every African. Joy!!! That rare state of mind that isn't understood by so many people.",
    username: "Olu",
    title: "Work of Art",
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
      <Head title='Cara Arts | Product Details 1' />
      
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
                <img src="/Afro_art/mozambican_boy.jpg" alt="product-art-img" />
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
              src="/Afro_art/mozambican_boy.jpg"
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
            src='/assets/Oluwaseyi-fagun-img (1).jpg'
            alt="profile"
          />
          <h3>Created by {work.username}</h3>
        </div>

        <hr />

        <h3>About this product</h3>
        <p>{work.description}</p>

        <h1>${100}</h1>
        <button type="submit">
          <ShoppingCart />
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
