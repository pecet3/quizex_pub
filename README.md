# [Quizex](https://quizex.app) - Quiz Learning Platform driven by AI

**QUIZEX** is an innovative **learning platform** that leverages the power of AI to enhance the educational experience. The platform allows users to create **AI-powered notes**, which can then be transformed into **interactive quizzes** based on the content or by specifying a relevant category. Quizex is designed to make learning engaging and effective, using quizzes as a memorization technique to reinforce knowledge.

The platform also supports **multiplayer quizzes**, enabling users to compete with friends or other learners in real-time. Additionally, Quizex incorporates **gamification elements**, such as **levels**, to motivate users and make the learning process more enjoyable. At its core, Quizex is a **learning-first platform** that combines the fun of quizzes with the effectiveness of AI-driven education.

---

## Project Structure

### 1. **Landing Page (quizex.app)**

- **Folder Name:** `landingpage`
- **Tech Stack:** Next.js
- **Description:** The landing page serves as the public face of Quizex. It provides an overview of the platform, its features, and includes all necessary legal documents such as terms of service, privacy policy, and other relevant information. The use of Next.js ensures fast loading times and SEO optimization, which is crucial for attracting and retaining users.

### 2. **Application (play.quizex.app)**

- **Tech Stack:** React
- **Description:** This is the core application where users interact with the quizzes. It is built entirely in React, providing a smooth and responsive user experience. The separation of the landing page and the application not only improves the user experience but also positively impacts SEO by clearly delineating the content and functionality.

---

## Tech Stack

- **Frontend:**

  - **Landing Page:** Next.js
  - **Application:** React

- **Backend:**
  - **Language:** Golang
  - **Database:** SQLite
  - **Real-time Communication:** WebSockets

The backend is built using **Golang**, known for its performance and efficiency, and uses **SQLite** for database management. **WebSockets** are utilized to enable real-time interactions, such as multiplayer quizzes, ensuring a seamless and engaging experience for users. This combination ensures a lightweight yet powerful backend that can handle the platform's requirements efficiently.

---

## Key Features

1. **AI-Powered Notes:** Users can create notes with the help of AI, which can then be automatically converted into quizzes for effective learning.
2. **Quiz Generation:** Quizzes can be generated based on user-created notes or by selecting a specific category.
3. **Multiplayer Mode:** Compete with friends or other learners in real-time multiplayer quizzes.
4. **Gamification:** Leveling system to motivate users and make learning more engaging.
5. **Learning-First Approach:** Quizex focuses on using quizzes as a memorization technique to reinforce knowledge and improve retention.

---

## Benefits of the Architecture

- **SEO Optimization:** By separating the landing page from the application, Quizex benefits from better SEO practices. The landing page can be optimized for search engines without the complexity of the application's logic.
- **Improved User Experience:** Users can easily access information about the platform and its legal documents without navigating through the application, making the onboarding process smoother.
- **Scalability:** The use of Golang, SQLite, and WebSockets ensures that the backend is both scalable and easy to maintain, allowing for future growth and feature additions.
- **Real-Time Interaction:** WebSockets enable real-time multiplayer quizzes, enhancing user engagement and interactivity.

---
