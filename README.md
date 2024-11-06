# Vue Chat App

A real-time chat application built with Vue 3, Vite, and Firebase.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Firebase Project](https://firebase.google.com/) with Firestore and Authentication enabled

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

  - git clone https://github.com/SaiThihan/realtime-chat-app.git
  - cd realtime-chat-app

### 2. Install Dependencies
Use npm to install the required dependencies:

- npm install

### 3. Configure Firebase
Add Firebase configuration to the .env file. Replace each placeholder with your actual Firebase configuration values:

    VITE_API_KEY=your_api_key_here
    VITE_AUTH_DOMAIN=your_auth_domain_here
    VITE_PROJECT_ID=your_project_id_here
    VITE_STORAGE_BUCKET=your_storage_bucket_here
    VITE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
    VITE_APP_ID=your_app_id_here

### 4. Run the Application

- npm run dev
