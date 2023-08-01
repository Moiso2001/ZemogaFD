/* React */
import {useState, useEffect} from 'react'

/* Icons */
import thumbsUpIcon from "../../../assets/img/thumbs-up.svg";
import thumbsDownIcon from "../../../assets/img/thumbs-down.svg";

/* CSS */
import s from "./Card.module.css"

/* Utils */
import { getTime, getCapitalize, getPercentages } from '../services/utils';

type CardProps = {
    id: string
    name: string
    description: string
    category: string
    picture: string
    lastUpdated: string
    votes: {
        positive: number
        negative: number
    }
}

type TypePercentaje = {
    positivePercentage: number
    negativePercentage: number
}

export default function Card({id, name, description, category, picture, lastUpdated, votes}:CardProps) {
    const [percentage, setPercentage] = useState<TypePercentaje>();
    const [text, setText] = useState<string>('');
    
    const [voted, setVoted] = useState<boolean>(false);


    useEffect(() => {
        setText(getTime(lastUpdated))
        setPercentage(getPercentages(votes))
    },[])
     
    return (
    <div style={{backgroundImage: `url(${picture})`}} className={s.div_global}>
          {
            percentage && percentage?.positivePercentage > percentage?.negativePercentage
            ? <div className={s.thumbsUp}><img src={thumbsUpIcon}/></div>
            : <div className={s.thumbsDown}><img src={thumbsDownIcon}/></div>
          }

        <div className={s.div_info}>
            <div className={s.info__div_first}>
                <span className={s.name}>{name}</span>
                <div className={s.info__description}>
                    <p>{description}</p>           
                </div>     
            </div>
            <div className={s.info__div_second}>
                <div className={s.second__div_span}>
                    <span>{text} in {getCapitalize(category)}</span>
                </div>
                <div className={s.second__div_buttons}>
                    <button className={s.buttons_up}><img src={thumbsUpIcon}/></button>
                    <button className={s.buttons_down}><img src={thumbsDownIcon}/></button>
                    <button className={s.buttons_voteNow}>Vote Now</button>
                </div>
            </div>
        </div>
        <div className={s.div_percentage}>
            <div style={{width: `${percentage?.positivePercentage}%`}} className={s.percentage__div_positive}>
                <img src={thumbsUpIcon}/>
                <span>{percentage?.positivePercentage}%</span>
            </div>
            <div style={{width: `${percentage?.negativePercentage}%`}} className={s.percentage__div_negative}>
                <span>{percentage?.negativePercentage}%</span>
                <img src={thumbsDownIcon}/>
            </div>
        </div>
    </div>
  )
}
