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

export default function Card({name, description, category, picture, lastUpdated, votes}:CardProps) {
    const [percentage, setPercentage] = useState<TypePercentaje>();
    const [voted, setVoted] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

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
                <span>{name}</span>
                <div className={s.info__description}>
                    <p>{description}</p>           
                </div>     
            </div>
            <div className={s.info__div_second}>
                <div className={s.second__div_span}>
                    <span>{text} in {getCapitalize(category)}</span>
                </div>
                <div className={s.second__div_buttons}>
                    <button><img src={thumbsUpIcon}/></button>
                    <button><img src={thumbsDownIcon}/></button>
                    <button>Vote Now</button>
                </div>
            </div>
        </div>
        <div className={s.div_percentage}>
            <div>
                <img src={thumbsUpIcon}/>
                <span>{percentage?.positivePercentage}</span>
            </div>
            <div>
                <img src={thumbsDownIcon}/>
                <span>{percentage?.negativePercentage}</span>
            </div>
        </div>
    </div>
  )
}
