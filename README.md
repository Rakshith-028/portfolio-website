# Rakshith — Developer Portfolio

A modern and responsive personal developer portfolio built to showcase my projects, technical skills, education, and experience in full-stack web development and Artificial Intelligence & Machine Learning.

The portfolio features a clean dark interface, responsive design, project showcase, contact section, and a functional backend API for handling contact form submissions.

## Live Demo

**Portfolio:**  
https://portfolio-website-eta-opal-49.vercel.app/

## About Me

I'm **Rakshith**, a B.Tech student specializing in **Artificial Intelligence & Machine Learning at VIPS, New Delhi**.

I am interested in building modern web applications, full-stack systems, developer tools, and AI-powered applications. I enjoy transforming ideas into functional products with clean interfaces and practical engineering.

## Featured Projects

### Memora AI
An intelligent memory system designed to store, retrieve, score, and manage contextual information using AI-powered memory lifecycle techniques.

### CodePilot
A developer-focused application designed to improve coding workflows through intelligent assistance and modern development tools.

### Clinic SaaS
A full-stack clinic management SaaS application designed to organize patient workflows, appointments, and administrative operations.

### Study Alarm
A productivity-focused system designed to help students manage focused study sessions and build consistent study routines.

## Tech Stack

**Frontend**
- Next.js
- React
- TypeScript
- Tailwind CSS
- HTML
- CSS

**Backend**
- Next.js API Routes
- REST API concepts
- Node.js

**Other Technologies**
- JavaScript
- Python
- C++
- SQL
- Git & GitHub
- Artificial Intelligence / Machine Learning

## Features

- Modern responsive portfolio interface
- Mobile-friendly navigation
- About and education section
- Technical skills showcase
- Featured project cards
- Direct GitHub integration
- Contact form
- Server-side contact API endpoint
- Form validation and error handling
- Responsive layout for desktop and mobile
- Production deployment on Vercel

## Project Structure

```text
portfolio-website/
│
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Contact API

The portfolio includes a backend API endpoint:

```text
POST /api/contact
```

The endpoint accepts contact form submissions, validates the provided data, and returns an appropriate JSON response.

Example request:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "message": "Hello from the portfolio."
}
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Rakshith-028/portfolio-website.git
```

Navigate to the project directory:

```bash
cd portfolio-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Production Build

To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Deployment

The application is deployed using **Vercel** with automatic integration from the GitHub repository.

Live deployment:

https://portfolio-website-eta-opal-49.vercel.app/

## Repository

GitHub:  
https://github.com/Rakshith-028/portfolio-website

## Author

**Rakshith**

B.Tech — Artificial Intelligence & Machine Learning  
VIPS, New Delhi

GitHub: https://github.com/Rakshith-028  
Email: rakshith0228@gmail.com

---

If you found this project useful or interesting, consider giving the repository a star.