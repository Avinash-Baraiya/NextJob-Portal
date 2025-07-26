# MERN Stack Job Portal

A full-featured job portal built using the MERN stack (MongoDB, Express.js, React, Node.js) allowing employers to post jobs and job seekers to apply for positions.

## Features

- **User Authentication**: Register and login as an employer or job seeker
- **Job Posting**: Employers can create, edit, and manage job listings
- **Job Applications**: Job seekers can apply to jobs with cover letters and resumes
- **Profile Management**: Update profile information and preferences
- **Responsive UI**: Modern interface that works on mobile and desktop

## Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management
- React Router for navigation
- Axios for API calls

### Backend
- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- Cloudinary for file uploads

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create environment variables:
   ```
   cp config/config.env.example config/config.env
   ```

4. Edit `config.env` with your own credentials (MongoDB URI, JWT Secret, Cloudinary credentials, etc.)

5. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm run dev
   ```
