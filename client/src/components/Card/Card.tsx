/* React */
import {useState, useEffect} from 'react'

/* Icons */
import thumbsUpIcon from "../../../assets/img/thumbs-up.svg";
import thumbsDownIcon from "../../../assets/img/thumbs-down.svg";

import { getTime, getCapitalize } from '../services/utils';


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
    positive: number
    negative: number
}

export default function Card({name, description, category, picture, lastUpdated, votes}:CardProps) {
    const [text, setText] = useState<string>('')
    const [percentage, setPercentage] = useState<TypePercentaje>()
    const [voted, setVoted] = useState<boolean>(false)

    useEffect(() => {
        setText(getTime(lastUpdated))
    },[text])
     
    return (
    <div style={{backgroundImage: `url(${picture})`}}>
        <div>
            <div>
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
                <span>{percentage?.positive}</span>
            </div>
            <div>
                <img src={thumbsUpIcon}/>
                <span>{percentage?.negative}</span>
            </div>
        </div>
    </div>
  )
}
