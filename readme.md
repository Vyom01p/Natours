# Natours - Nature Tours Booking Platform

Natours is a full-stack web application designed for booking and exploring nature tours. It provides a complete RESTful API on the backend and a server-side rendered frontend, offering users a seamless experience to browse, book, and review adventure tours.

## 🚀 Features

- **Tour Exploration:** Browse a variety of curated tours, view detailed itineraries, difficulty levels, guides, and pricing.
- **Authentication & Security:** Complete user authentication system (Sign up, Log in, Password reset) using JWT stored in HTTP-only cookies.
- **Secure Payments:** Integrated with Stripe for secure and seamless tour booking checkouts.
- **Interactive Maps:** Visual tour locations and routes powered by Mapbox.
- **Email Notifications:** Automated email handling for password resets and welcome messages using Nodemailer.
- **User Profiles:** Dedicated dashboard for users to manage account details, bookings, and reviews.
- **Role-Based Access:** Distinct permissions and capabilities for regular users, guides, lead-guides, and administrators.

## 🛠️ Technologies Used

### Backend

- **Node.js & Express.js:** Server environment and routing framework.
- **MongoDB & Mongoose:** NoSQL database and object data modeling.
- **Authentication:** JSON Web Tokens (JWT) and bcryptjs.
- **Email Processing:** Nodemailer.

### Frontend

- **Templating:** Pug (Server-side rendering).
- **Styling & Interactivity:** HTML, advanced CSS, and Vanilla JavaScript.
- **Mapping:** Mapbox API.

### Integrations

- **Payments:** Stripe API.
