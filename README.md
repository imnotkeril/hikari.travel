# Hikari Travel

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://hikaritravel.vercel.app/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, interactive travel booking platform specializing in Japan travel experiences. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.

## 🌐 Live Demo

Visit the live application: [https://hikaritravel.vercel.app/](https://hikaritravel.vercel.app/)

## 🚀 Features

### 🎯 Core Functionality

#### **Travel Search & Booking**
- **Destination Search**: Interactive search for Japanese cities and attractions
- **Date Selection**: Flexible date picker with availability checking
- **Package Filtering**: Filter by price, duration, themes, and traveler preferences
- **Real-time Availability**: Live booking system with instant confirmation

#### **Interactive User Interface**
- **Modern Design**: Clean, minimalist interface inspired by Japanese aesthetics
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion for fluid transitions and interactions
- **Intuitive Navigation**: User-friendly routing and breadcrumb navigation

#### **Travel Packages**

### 🎨 Design Excellence

#### **Visual Identity**
- **Japanese-Inspired Design**: Clean lines, minimalism, and thoughtful spacing
- **Color Palette**: Harmonious colors reflecting Japanese culture
- **Typography**: Modern, readable fonts with proper hierarchy
- **Imagery**: High-quality photos showcasing Japan's beauty and culture

#### **User Experience**
- **Intuitive Flow**: Streamlined booking process from search to confirmation
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Fast loading times and smooth interactions
- **Mobile-First**: Responsive design optimized for mobile users

### 📱 Technical Features

#### **Frontend Architecture**
- **Component-Based**: Modular React components for maintainability
- **Type Safety**: Full TypeScript implementation for robust development
- **State Management**: Efficient state handling with React hooks
- **Routing**: React Router for seamless navigation

#### **Performance Optimizations**
- **Code Splitting**: Lazy loading for optimal bundle size
- **Image Optimization**: WebP format with fallbacks for better performance
- **Caching Strategy**: Efficient data caching for repeated requests
- **SEO Optimization**: Server-side rendering considerations and meta tags

## 🛠️ Tech Stack

### Frontend Framework
- **React 18**: Latest React features with concurrent rendering
- **TypeScript**: Type-safe development and better developer experience
- **React Router**: Client-side routing and navigation
- **React Hook Form**: Efficient form handling and validation

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Framer Motion**: Animation library for smooth transitions
- **Headless UI**: Accessible UI components
- **Heroicons**: Beautiful hand-crafted SVG icons

### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting for consistent code quality
- **Prettier**: Code formatting for clean, readable code
- **PostCSS**: CSS processing and optimization

### Deployment & Hosting
- **Vercel**: Serverless deployment with global CDN
- **Git Integration**: Automated deployments from repository
- **Environment Variables**: Secure configuration management

## 📁 Project Structure

```
hikari-travel/
├── public/                 # Static assets
│   ├── images/
│   ├── icons/
│   └── index.html
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Shared components
│   │   ├── forms/          # Form components
│   │   └── layout/         # Layout components
│   ├── pages/              # Page components
│   │   ├── Home/
│   │   ├── Search/
│   │   ├── Booking/
│   │   └── Profile/
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services and data fetching
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── styles/             # Global styles and Tailwind config
│   └── constants/          # Application constants
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```
