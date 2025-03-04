/* Definition of the cards */
export type TheCard = {
    _id: string
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