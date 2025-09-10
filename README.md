# Restaurant Menu R3F

An interactive 3D restaurant menu application built with React Three Fiber (R3F), featuring 3D food models and smooth animations.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vis-prime/restaurant-menu-r3f.git
cd restaurant-menu-r3f
```

2. Install dependencies:

```bash
npm install
```

## Running Locally

To start the development server:

```bash
npm run dev
```

This will start the development server at `https://localhost:3000` (or another available port). The server runs with `--host` flag, making it accessible from other devices on your network.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Technologies Used

- **React** - UI library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Motion** - Animation library

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.
