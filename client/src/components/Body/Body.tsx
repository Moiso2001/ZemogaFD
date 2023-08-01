/* REACT */
import {useEffect, useState} from 'react';
import Slider from "react-slick";

/* CSS */
import s from "./Body.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* Definitions */
import { TheCard } from '../../types/card';

/* Components */
import Card from '../Card/Card';

/* Controller */
import { getAllCards, addVote } from '../services/controller';

export default function Body() {
    const [cards, setCards] = useState<TheCard[]>()
    const [countOfVotes, setCountOfVotes] = useState<number>(0)

    /* Slider settings */
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

    /* useEffect which will get the new cards updated once somebody votes */
    useEffect(() => {
        getAllCards()
            .then(d => setCards(d))
            .catch(e => console.log(e))
    }, [countOfVotes])

    async function handleSendVote(id: string, vote: string) {
       const result = await addVote(id, vote)
            
       setCountOfVotes(c => c + 1)
       return result
    }

  return (
    <div>
        <div className={s.div_head}>
            <span>Previous Rulings</span>
        </div>
        <div className={s.div_slider}>
            <Slider {...settings}> 
                {cards?.map(e => 
                    <Card 
                        key={e._id}
                        id={e._id}
                        name={e.name}
                        description={e.description}
                        category={e.category}
                        picture={e.picture}
                        lastUpdated={e.lastUpdated}
                        votes={e.votes}
                        sendVote={handleSendVote}
                    />)}
            </Slider>
        </div>
    </div>
  )
}
