This is the deployed link; fundi-connect-th9o.vercel.app
FundiConnect
FundiConnect is a smart web application that connects users to reliable local fundis (skilled workers) like plumbers, electricians, carpenters, and more. Whether you need a quick fix or a big job done, FundiConnect helps you book, chat, and manage service providers — all in one place.

Features
🔍 Smart Chatbot — Ask for help and instantly get matched to the right fundi based on skills, location, price, availability, and rating.

Booking System — Book, reschedule, or cancel fundis easily from your dashboard.

User Authentication — Secure login and signup for both users and fundis.

Location-Based Matching — Suggests the nearest available fundi if none exactly match.

Modern UI — Beautiful, responsive interface using Tailwind CSS and animations.

Problem
Finding reliable, affordable, and available fundis is hard. Many people struggle to connect with skilled laborers in their area — especially during emergencies.

Solution
FundiConnect simplifies the process by providing an all-in-one platform where:

Users can quickly find, book, and chat with fundis.

Fundis can get more visibility and bookings.

Everyone saves time and stress.

Tech Stack
Frontend

React

Tailwind CSS

Vite

Backend

Node.js

Express.js

MongoDB (Atlas)

JWT (for authentication)

Project Structure
pgsql
Copy
Edit
FundiConnect/
├── client/ (React frontend)
│   ├── pages/
│   ├── components/
│   ├── data/fundis.json
│   └── App.jsx
├── server/ (Node.js backend)
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── index.js
└── README.md
How to Run
Clone the repo

bash
Copy
Edit
git clone https://github.com/your-username/FundiConnect.git
cd FundiConnect
Install client & server dependencies

bash
Copy
Edit
cd client
npm install
cd ../server
npm install
Start backend server

bash
Copy
Edit
npm run dev
Start frontend (in new terminal)

bash
Copy
Edit
cd client
npm run dev

Live Demo
Coming soon...

