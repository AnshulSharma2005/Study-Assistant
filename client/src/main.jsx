import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/poppins";
import "./index.css";
import { Toaster } from "react-hot-toast";
import React from "react";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
        position="top-right"
        toastOptions={{
            duration: 3000,
            style: {
                background: "#18181b",
                color: "#fff",
                border: "1px solid #7C3AED",
            },
        }}
    />
</React.StrictMode>
)
