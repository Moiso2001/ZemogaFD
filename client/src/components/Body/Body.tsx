/* REACT */
import {useEffect, useState} from 'react';
import Slider from "react-slick";

import {BiSolidDownArrow} from "react-icons/bi"

/* CSS */
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import s from "./Body.module.css";

/* Definitions */
import { TheCard } from '../../types/card';

/* Components */
import Card from '../Card/Card';

/* Controller */
import { getAllCards, addVote } from '../../services/controller';

export default function Body() {
    /* Window manage states */
    const [view, setView] = useState<string | undefined>()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [optionView, setOptionView] = useState<string>('List')
    const [showOptions, setShowOptions] = useState(false);
 
    /* Cards manage states */
    const [cards, setCards] = useState<TheCard[]>()
    const [countOfVotes, setCountOfVotes] = useState<number>(0)

    /* Slider settings */
    const [carouselSettings, setCarouselSettings] = useState({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: true,
        centerMode: true,
      });

    /* useEffect to have the window width, this to update the way that the cards will be showed  */
    useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        // Remove event listener when the component unmounts to avoid memory leaks
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if(windowWidth <= 570){
            setView('phone')

            setCarouselSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 1, centerPadding: '32px'}));
        } else if(windowWidth > 570 && windowWidth <= 760){
            setView('phone-horizontal')
            
            setCarouselSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 2, centerPadding: '24px'}));
        } else if(windowWidth > 760 && windowWidth < 1000 ){
            setView('tablet')
        } else if(windowWidth > 1000){
            setView('desktop')
        }
    }, [windowWidth])
    
    /* useEffect which will get the new cards updated once somebody votes */
    useEffect(() => {
        getAllCards()
            .then(d => setCards(d))
            .catch(e => console.log(e))
    }, [countOfVotes])


    /* Main function to send the vote, brings the id and kind of vote to put route through controller */
    async function handleSendVote(id: string, vote: string) {
       const successfullySent = await addVote(id, vote)
            
       if(successfullySent){
           setCountOfVotes(c => c + 1)
       }

       return successfullySent
    }

  return (
    <div>
        <div className={s.div_head}>
            <span>Previous Rulings</span>

            {/* Select options to change the view between list and grid */}
            {
                view === 'tablet' ||  view === 'desktop'
                ?<div onClick={_ => setShowOptions(s => !s)}>
                    <div className={s.custom_select}>
                       {optionView}
                       <BiSolidDownArrow className={s.arrow_icon}/>

                       {
                           showOptions
                           &&<div className={s.custom_options}>
                               <div onClick={() => setOptionView('List')} className={s.option_list}>List</div>
                               <div onClick={() => setOptionView('Grid')} className={s.option_grid}>Grid</div>
                             </div>     
                       }

                    </div>
                 </div>
                : <></>
            }

        </div>

        {
            view === 'phone' || view === 'phone-horizontal'
            ?
            <div>
                <Slider {...carouselSettings}> 
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
                        optionView={undefined}
                    />)}
                </Slider>
            </div>
            :
            <div className={optionView === 'List' ? s.cards__list : s.cards__grid}>
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
                        optionView={view}
                    />
                )}
            </div>
            
        }

    </div>
  )
}
