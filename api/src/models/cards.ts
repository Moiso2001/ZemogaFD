import mongoose from 'mongoose';


/* This will be our schema on DB where each card will be saved */
export interface CardDoc extends mongoose.Document {
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

const productSchema = new mongoose.Schema<CardDoc>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  picture: { type: String, required: true },
  lastUpdated: { type: String, of: Number },
  votes: {
    positive:{type: Number},
    negative:{type:Number}
  }
});

const Card = mongoose.model<CardDoc>('Card', productSchema);

export default Card;
