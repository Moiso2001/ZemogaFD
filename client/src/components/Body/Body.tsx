/* Welcome to the Body component where the cards will be displayed, here we handle all the cards */

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
    /* Window width and device manage states */
    const [view, setView] = useState<string | undefined>()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    /* View option states (Grid, List)*/
    const [optionView, setOptionView] = useState<string>('Grid')
    const [showOptions, setShowOptions] = useState(false);
 
    /* Cards manage states */
    const [cards, setCards] = useState<TheCard[]>()
    const [countOfVotes, setCountOfVotes] = useState<number>(0)

    /* Slider carousel settings */
    const [carouselSettings, setCarouselSettings] = useState({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: true,
        centerMode: true,
      });

    /* 
     useEffect to have the window width. this to know wich device is being used and 
     update the way that the cards will be displayed. 
    */
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

    /* 
     This useEffect may looks kind of tricky but this just take the window width
     and select if this is for a phone, phone in horizontal, tablet or desktop
     this will help to know if the carousel needs to be displayed or just the
     grid and list options. (Also works to set better view of the carousel,
     if 1 slides or 2 slides on phone in horizontal must be displayed).
    */
    useEffect(() => {
        if(windowWidth <= 300){
            setView('phone')

            setCarouselSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 1, centerPadding: '-10px'}));
        } else if(windowWidth <= 370){
            setView('phone')

            setCarouselSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 1, centerPadding: '8px'}));
        } else if(windowWidth > 370 && windowWidth <= 570){
            setView('phone')

            setCarouselSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 1, centerPadding: '32px'}));
        } else if(windowWidth > 570 && windowWidth <= 760){
            setView('phone-horizontal')
            
            setCarouselSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 2, centerPadding: '-20px'}));
        } else if(windowWidth > 760 && windowWidth < 1000 ){
            setView('tablet')
        } else if(windowWidth > 1000){
            setView('desktop')
        }
    }, [windowWidth])
    
    /* 
     useEffect which will get the cards available on DB and the new cards updated 
     once somebody votes.
    */
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

            {/* 
                Select options to change the type of view between list and grid 
                This will be displayed just when the width is not for a phone.
            */}
            {
                view === 'tablet' ||  view === 'desktop'
                ?<div onClick={_ => setShowOptions(s => !s)}>
                    <div className={s.custom_select}>
                       {optionView}
                       <BiSolidDownArrow alt='Arrow down' className={s.arrow_icon}/>

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

        
        {/* 
            Here we have the body where the cards will be displayed
            we have two cases, if the view is for a phone or not
            if is a phone will return the carousel, otherwise
            will return a simple div to handle de grids and list.
        */}
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
                        optionView={undefined} // Undefined because if this is a phone there is no grid or list options.
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
                        optionView={optionView} // Pass current view which was selected by the user (grid, list).
                    />
                )}
            </div>
        }
    </div>
  )
}