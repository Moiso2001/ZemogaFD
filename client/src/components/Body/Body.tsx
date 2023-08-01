/* REACT */
import {useEffect, useState} from 'react';
import Slider from "react-slick";

/* CSS */
import s from "./Body.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* Definitions */
import { TheCard } from '../types/card';

/* Components */
import Card from '../Card/Card';

/* Temporal */
import dataArray from "../../assets/temporal"

export default function Body() {
    const [cards, setCards] = useState<TheCard[]>()

    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: true,
        centerPadding: "35px",
        centerMode: true
    };

    useEffect(() => {
        setCards(dataArray)
    }, [])

  return (
    <div>
        <div className={s.div_head}>
            <span>Previous Rulings</span>
        </div>
        <div className={s.div_slider}>
            <Slider {...settings}> 
                {cards?.map(e => 
                    <Card 
                        name={e.name}
                        description={e.description}
                        category={e.category}
                        picture={e.picture}
                        lastUpdated={e.lastUpdated}
                        votes={e.votes}
                    />)}
            </Slider>
        </div>
    </div>
  )
}
