# Animated and Responsive Sidebar

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-9.1.2-purple)](https://redux.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-blue)](https://tailwindcss.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.2.1-blue)](https://react-icons.github.io/react-icons/)

A fully responsive and animated sidebar for web pages, implemented using React Vite, Redux, TypeScript, Tailwind CSS, and React Icons.

<div align="center" style="border-radius: 50%;">
  <img class="rounded-circle" src="src/assets/images/profile2.jpg" width="150" height="150" alt="Elyas Abebe" >
</div>

<p align="center">
  Elyas (Elijah) Abebe
</p>
<p align="center">
  Front-End Web App Developer
</p>

### Here's a screenshot of the animated and responsive sidebar in action:

![Sidebar Screenshot](src/assets/images/preview.png)

## Features

- Smooth animations for seamless user experience.
- Fully responsive design to ensure compatibility across various devices.
- Customizable color palette to match your website's theme.
- Dark and night themes for better accessibility and user preference.

## Demo

[Link to live demo](https://responsive-sidebar-ella.vercel.app/)

## Installation

To install and run this sidebar locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.

## Usage

Once the development server is running, you can integrate the sidebar into your project by importing it as a component and passing necessary props.

```jsx
import React from "react";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      {/* Your main content here */}
    </div>
  );
}

export default App;
```
