require('dotenv').config({ path: './.env.local' });
const mongoose = require('mongoose');
const { Schema, model, models } = require('mongoose');

// Define the Event model directly in the script
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
  },
  category: {
    type: String,
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
  averageRating: {
    type: Number,
    default: 0,
  },
});

const Event = models.Event || model('Event', EventSchema);

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to the database.');

    // Create a dummy user ID (for the organizer field)
    const dummyUserId = new mongoose.Types.ObjectId();

    // Example: Seed an event
    await Event.create({
      title: 'Sample Event',
      description: 'This is a sample event for testing purposes.',
      startDateTime: new Date('2023-12-25T10:00:00'),
      endDateTime: new Date('2023-12-25T12:00:00'),
      location: 'Virtual',
      imageUrl: '/assets/images/event-default.png',
      organizer: dummyUserId,
      category: 'Technology',
      price: 0,
      isFree: true,
    });

    console.log('Database seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
};

seedDatabase();