/*This is the same definition that we have on client just to be sure everything will be passed ok */

export type CardType ={
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