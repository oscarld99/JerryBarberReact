# Jerry McWay Barber Shop - React TypeScript

This project is a complete web application to manage a barber shop with artificial intelligence technology, converted from vanilla HTML/CSS/JavaScript to React with TypeScript.

## Features

- ✅ **Full Navigation** with a responsive menu
- ✅ **Home Page** with information about AI in beauty
- ✅ **Reservation Management** with a modal form and table
- ✅ **Services Page** with a complete catalog
- ✅ **Locations Page** with an interactive map
- ✅ **Responsive Design** optimized for mobile and desktop
- ✅ **Strongly Typed** with TypeScript
- ✅ **Reusable Components** in React

## Installation

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Copy images to the `public/` folder:
    ```bash
    cp henry.jpg public/
    cp banner.jpeg public/
    ```

3.  Start the development server:
    ```bash
    npm start
    ```

The application will open at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Main banner component
│   ├── Navigation.tsx          # Responsive navigation menu
│   ├── AppointmentForm.tsx     # Modal form for new appointments
│   └── AppointmentsTable.tsx   # Appointments table
├── pages/
│   ├── HomePage.tsx            # Home page with AI information
│   ├── ReservationsPage.tsx    # Reservation management page
│   ├── ServicesPage.tsx        # Services page
│   └── LocationsPage.tsx       # Locations page
├── types/
│   └── Appointment.ts          # TypeScript type definitions
├── App.tsx                     # Main component with navigation
├── App.css                     # Application styles
├── index.tsx                   # Entry point
└── index.css                   # Global styles
```

## Technologies Used

-   **React 18** - UI Library
-   **TypeScript** - Static Typing
-   **CSS3** - Styling and responsive design
-   **Create React App** - Project setup

## Features by Page

### 🏠 Home
- Information about the barber shop and its AI technology
- Features of AI-powered services
- 3-step process of facial analysis and recommendations
- Call-to-action for booking

### 📅 Reservations
- Complete appointment management
- Modal form for new bookings
- Responsive table with filters
- Appointment statistics
- Search and filter by barber

### ✂️ Services
- Service catalog with images
- AI-powered haircuts for men
- Styles for women
- Professional manicure
- Detailed prices and features

### 📍 Locations
- Interactive map with markers
- 3 branches: Bikini Bottom, Evergreen Terrace, Santo Domingo de Guzmán
- Detailed information for each location
- Modal with contact details
- Action buttons (call, email, directions)

### Available Barbers
- Yancha
- Elvis
- El Sayayin
- Picolo Daimacu

### Responsive Design
- Adapted for mobile devices
- Hamburger menu on mobile
- Tables optimized for small screens
- Responsive images and content

## Available Scripts

-   `npm start` - Starts the development server
-   `npm build` - Builds the app for production
-   `npm test` - Runs tests
-   `npm eject` - Ejects from Create React App (irreversible)

## Conversion from Vanilla JS to React

This project was converted from vanilla JavaScript to React + TypeScript, maintaining:

-   ✅ The same booking functionality
-   ✅ The same visual design
-   ✅ The same sample data
-   ✅ The same user experience

### Implemented Improvements

-   **Full Navigation**: Responsive menu with 4 main pages
-   **Strong Typing**: All props and states are typed
-   **Reusable Components**: More modular and maintainable code
-   **Centralized State**: State management with React hooks
-   **Better Structure**: Clear separation of concerns
-   **Modern Design**: Improved UI/UX with gradients and animations
-   **Fully Responsive**: Optimized for all devices

## AI Features

The application promotes artificial intelligence services for:

-   **Facial analysis** for haircut recommendations
-   **Personalized suggestions** based on unique features
-   **Current trends** for women's styles
-   **Smart designs** for manicures 