// import React from 'react'

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
  return (
    <div>Card</div>
  )
}
