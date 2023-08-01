/* React */
import {useState, useEffect} from 'react'

/* Icons */
import thumbsDownIcon from "../../../assets/img/thumbs-down.svg";
import thumbsUpIcon from "../../../assets/img/thumbs-up.svg";

/* CSS */
import s from "./Card.module.css"

/* Utils */
import { getTime, getCapitalize, getPercentages } from '../../services/utils';

/* Component Types */
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
    sendVote: Function
    optionView: string | undefined
}

type TypePercentaje = {
    positivePercentage: number
    negativePercentage: number
}

export default function Card({id, name, description, category, picture, lastUpdated, votes, sendVote, optionView}:CardProps) {
    console.log
   
    const textDefault = `${getTime(lastUpdated)} in ${getCapitalize(category)}`
    
    /* Initial states  */
    const [percentage, setPercentage] = useState<TypePercentaje>();
    const [text, setText] = useState<string>('');
    
    /* States to handle votes */
    const [typeVote, setTypeVote] = useState<string | undefined>()
    const [voted, setVoted] = useState<boolean>(false);

    /* Initial useEffect to mount the initial votes */
    useEffect(() => {
        setPercentage(getPercentages(votes))
        setText(textDefault)
    },[])

    /* Re render once the user votes again to update the percentage */
    useEffect(() => {
        setPercentage(getPercentages(votes))
    }, [votes])

    /* Function to handle once the user select positive o negative vote (beffore send vote) */
    function handleSelectVote(vote: string) {
        setTypeVote(vote)
    }

    /* This function will take the vote selected and send the vote to our main function on Body */
    function handleSubmitVote() {
        if(!voted && typeVote){
            sendVote(id, typeVote)
            .catch(() => console.log('An error ocurred'))
            
            setVoted(true),
            setText('Thank you for your vote!')
        } else {
            setVoted(false)
            setTypeVote(undefined)
            setText(textDefault)
        }
    }
     
    return (
    <div style={{backgroundImage: `url(${picture})`}} className={optionView === 'List' ? s.div_global__list : s.div_global}>
        {/* Option with more votes */}
          {
            percentage && percentage?.positivePercentage >= percentage?.negativePercentage
            ? <div className={optionView === 'List' ? s.thumbsUp__list: s.thumbsUp}><img src={thumbsUpIcon}/></div>
            : <div className={optionView === 'List' ? s.thumbsDown__list: s.thumbsDown}><img src={thumbsDownIcon}/></div>
          }

        {/* Card info */}
        <div className={optionView === 'List' ? s.div_info__list : s.div_info}>
            <div className={optionView === 'List' ? s.info__div_first_list : s.info__div_first}>
                <span className={s.name}>{name}</span>
                <div className={optionView === 'List' ? s.info__description_list : s.info__description}>
                    <p className={s.info_text}>{description}</p>           
                </div>     
            </div>

            <div className={optionView === 'List' ? s.info__div_second__list : s.info__div_second}>
                <div className={s.second__div_span}>
                    <span>{text}</span>
                </div>

                {/* Vote options */}
                <div className={s.second__div_buttons}>
                    {
                        voted
                        ? <div></div>
                        : <button 
                            onClick={_ => handleSelectVote('positive')} 
                            className={s.buttons_up}
                           >
                            <img src={thumbsUpIcon}/>
                          </button>
                    }
                    {
                        voted
                        ? <div></div>
                        : <button 
                            onClick={_ => handleSelectVote('negative')} 
                            className={s.buttons_down}
                          >
                            <img src={thumbsDownIcon}/>
                          </button>
                    }

                    <button 
                        disabled={!typeVote} 
                        className={s.buttons_voteNow}
                        onClick={_ => handleSubmitVote()}
                    >{voted ? 'Vote Again' : 'Vote Now'}</button>
                </div>
            </div>
        </div>

        {/* Percentages bar */}
        <div className={optionView === 'List' ? s.div_percentage__list : s.div_percentage}>
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
