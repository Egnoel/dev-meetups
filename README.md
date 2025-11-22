# Dev Meetups 🚀

The hub for every Dev Event You can't miss. Discover hackathons, meetups, conferences, and developer events all in one place.

## Overview

Dev Meetups is a modern web application built with Next.js that helps developers find and book spots at events happening around the world. Whether you're looking for hackathons, tech conferences, or local meetups, this platform centralizes all developer events in one convenient location.



## Features

- 🎯 **Browse Events** - Discover upcoming hackathons, meetups, and conferences
- 📅 **Event Details** - View comprehensive information including agenda, location, mode, and audience
- 🔖 **Event Booking** - Reserve your spot at events with a simple booking form
- 🔍 **Similar Events** - Get personalized recommendations based on the event you're viewing
- ⚡ **Fast Performance** - Built with Next.js 16 for optimal speed and SEO
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS

## Tech Stack

### Frontend
- **Next.js** - React framework with App Router
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

### Backend
- **MongoDB** - NoSQL database via Mongoose
- **Node.js** - Runtime environment
- **Next.js API Routes** - Serverless backend endpoints

### Additional Tools
- **Cloudinary** - Image hosting and management
- **PostHog** - Product analytics
- **Lucide React** - Icon library
- **ESLint** - Code quality

## Project Structure

```
devs-meetup/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   └── events/           # Event endpoints
│   ├── events/
│   │   └── [slug]/           # Dynamic event pages
│   └── layout.tsx            # Root layout
├── components/               # React components
│   ├── EventDetails.tsx      # Event detail view
│   ├── EventCard.tsx         # Event card component
│   ├── BookEvent.tsx         # Booking form
│   ├── DynamicPage.tsx       # Events listing
│   └── ...
├── database/                 # Database models
│   ├── event.model.ts        # Event schema
│   ├── booking.model.ts      # Booking schema
│   └── index.ts              # Database connection
├── lib/                      # Utilities and helpers
│   ├── actions/              # Server actions
│   │   ├── event.actions.ts  # Event operations
│   │   └── booking.actions.ts # Booking operations
│   ├── mongodb.ts            # MongoDB connection
│   ├── utils.ts              # Helper functions
│   └── constants.ts          # App constants
└── public/                   # Static assets
    ├── icons/                # Icon files
    └── images/               # Image assets
```

## Installation

### Prerequisites
- Node.js 18+ 
- MongoDB instance
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Egnoel/dev-meetups.git
   cd devs-meetup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_BASE_URL=your-domain.com
   MONGODB_URI=your-mongodb-connection-string
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-name
   POSTHOG_API_KEY=your-posthog-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Preview
![Home Page](/public/images/homepage.png)
![Event Detail Page](/public/images/eventDetail.png)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### EventDetails
Displays comprehensive information about a specific event including:
- Event overview and description
- Date, time, location, and mode
- Event agenda
- Organizer information
- Similar events recommendations

### DynamicPage
Lists all available events with:
- Event cards with images and key info
- Loading states with Suspense
- Server-side data fetching

### BookEvent
Booking form component that allows users to:
- Reserve spots at events
- Submit contact information
- View current booking status

## API Endpoints

- `GET /api/events` - Fetch all events
- `GET /api/events/[slug]` - Fetch specific event by slug
- `POST /api/events/[slug]/book` - Book an event

## Database Models

### Event Model
```typescript
{
  title: string
  slug: string
  description: string
  image: string
  date: string
  time: string
  location: string
  mode: string
  audience: string
  overview: string
  agenda: AgendaItem[]
  organizer: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}
```

### Booking Model
```typescript
{
  eventId: ObjectId
  email: string
  firstName: string
  lastName: string
  phone: string
  createdAt: Date
}
```

## Performance Optimizations

- **Server-Side Rendering** - Events are fetched server-side for better SEO
- **Incremental Static Revalidation** - Events cache with 60-second revalidation
- **Image Optimization** - Next.js Image component for automatic optimization
- **Code Splitting** - Automatic code splitting with dynamic imports
- **Streaming** - React Suspense for progressive UI rendering


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Created by [Egnoel](https://github.com/Egnoel)

## Support

For issues and questions, please open an issue on the [GitHub repository](https://github.com/Egnoel/dev-meetups/issues).