/* React */
import {useState} from 'react'

/* Icons */
import thumbsUpIcon from "../../../assets/img/thumbs-up.svg";
import thumbsDownIcon from "../../../assets/img/thumbs-down.svg";



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


     
    return (
    <div style={{backgroundImage: `url(${picture})`}}>
        <div>
            <div>
                <span>{name}</span>     
                <p>{description}</p>           
            </div>
            <div>
                <div>
                    {text}
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
            </div>
            <div>
                <img src={thumbsUpIcon}/>
            </div>
        </div>
    </div>
  )
}
