import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";


 export const ThemeContext = createContext();



function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );



}

createRoot(document.getElementById("root")).render(
  // <StrictMode>

< ThemeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
  // </StrictMode>,
);
