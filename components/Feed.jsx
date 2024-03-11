"use client";
import Head from '@/components/Head';
import { categories } from "../data";
import { useEffect, useState } from "react";
import "../styles/Categories.scss";
import DummyCard from "./DummyCard"
import images from "../public/images"

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");


  const CardData = [
    {
      img : '/assets/Oluwaseyi-fagun-img (1).jpg',
      amount : '100',
      title : "Work of Art",
      alt : "creator-img",
      creator : "Olu",
      category : 'Photography',
      link: "/product-details-1",
      image : '/Afro_art/mozambican_boy.jpg'
    },
    {
      img : '/assets/phucmai.png',
      amount : '3700',
      title : "Eyo Festival",
      alt : "creator-img",
      creator : "Oluseye",
      category : 'Oil Painting',
      link: "/product-details-2",
      image : '/Afro_art/eyo_festival.jpg'
    },
    {
      img : "/assets/Sunehildeep.png",
      alt : "creator-img",
      category : 'Metal Art',
      link: "/product-details-3",
      creator: "Morphios",
      title: "Dancing Queens",
      amount: "2500",
      image : '/Afro_art/women_dancing.JPG'
    },
    {
      img : '/assets/Oluwaseyi-fagun-img (1).jpg',
      amount : '1100',
      title : "Drummer Queens",
      alt : "creator-img",
      creator : "Olu",
      category : 'Art',
      link: "/",
      image : '/Afro_art/drummer_queens.jpg'
    },
    {
      img : '/assets/ngocmai.jpg',
      amount : '1900',
      title : "Natural Savory",
      alt : "creator-img",
      creator : "Oluseye",
      category : 'Digital',
      link: "/",
      image : '/Afro_art/a_wery_sweet_mango.jpg'
    },
    {
      img : "/assets/moss_bros_suit.webp",
      alt : "creator-img",
      category : 'Art',
      link: "/",
      creator: "Jeremy",
      title: "Hut Love",
      amount: "4000",
      image : '/Afro_art/night_dance.jpg'
    }
  ]

  return (
    <>
      <Head title='Cara Arts | Feed' />
      <div className="categories">
        {categories?.map((item, index) => (
          <p
            onClick={() => setSelectedCategory(item)}
            className={`${item === selectedCategory ? "selected" : ""}`}
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="WorkCardDummy">
        {
          CardData.map((card, index) => (
            <DummyCard
            key={index}
            image={card.image}
            img={card.img}
            amount={`${card.amount}`}
            alt={`${card.alt}`}
            title={`${card.title}`}
            creator={`${card.creator}`}
            category={`${card.category}`}
            link={`${card.link}`}
            />
          ))}
      </div>
    </>
  );
};

export default Feed;
