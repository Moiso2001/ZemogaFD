/* React */
import {useState, useEffect} from 'react'

/* Icons */
import thumbsUpIcon from "../../../assets/img/thumbs-up.svg";
import thumbsDownIcon from "../../../assets/img/thumbs-down.svg";

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
    <div style={{backgroundImage: `url(${picture})`}}>
        <div>
            <div>
                {
                    percentage && percentage?.positivePercentage > percentage?.negativePercentage
                    ? <img src={thumbsUpIcon}/>
                    : <img src={thumbsDownIcon}/>
                }
                <span>{name}</span>     
                <p>{description}</p>           
            </div>
            <div>
                <div>
                    <span>{text} in {getCapitalize(category)}</span>
                </div>
                <div>
                    <button><img src={thumbsUpIcon}/></button>
                    <button><img src={thumbsDownIcon}/></button>
                    <button>Vote Now</button>
                </div>
            </div>
        </div>
        <div>
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
