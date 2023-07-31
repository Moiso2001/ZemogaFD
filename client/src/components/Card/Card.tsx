import {useState} from 'react'

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

export default function Card({name, description, category, picture, lastUpdated, votes}:CardProps) {
    const [text, setText] = useState<string>('')
  
    return (
    <div>
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
                    
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
