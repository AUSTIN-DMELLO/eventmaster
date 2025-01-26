# EventMaster

EventMaster is a platform for event management. It allows users to create, manage, and attend events. Users can explore various events, book tickets, and view event details.

## Features

- **User Authentication**: Secure user authentication using Clerk.
- **Event Creation**: Users can create and manage their events.
- **Event Listing**: Browse and search for events by category or title.
- **Event Details**: View detailed information about events, including date, time, location, and organizer details.
- **Ticket Booking**: Book tickets for events, with Stripe integration for payment processing.
- **Profile Management**: Users can view their purchased tickets and events they have organized.
- **Category Management**: Filter events by categories.

## Project Structure
- **app**: Contains the Next.js pages and layouts.
- **components**: Shared and UI components.
- **constants**: Header links and default event values.
- **lib**: Contains actions, database models, and utility functions.
- **public**: Static assets.
- **types**: TypeScript types.

## Prerequisites

- Node.js
- npm or yarn
- MongoDB

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
