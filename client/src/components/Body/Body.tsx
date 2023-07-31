/* REACT */
import {useEffect, useState} from 'react';
import Slider from "react-slick";

/* CSS */
// import s from "./Body.module.css";
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
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        setCards(dataArray)
    }, [])

  return (
    <div>
        <div>
            <span>Previous Rulings</span>
        </div>
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
  )
}
