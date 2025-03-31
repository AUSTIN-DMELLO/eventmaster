import { Schema, model, models, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
  imageUrl: string;
  organizer: Schema.Types.ObjectId;
  category: Schema.Types.ObjectId;
  price: number;
  isFree: boolean;
  averageRating: number;
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isFree: {
    type: Boolean,
    required: true,
  },
});

const Event = models.Event || model<IEvent>('Event', EventSchema);

export default Event;