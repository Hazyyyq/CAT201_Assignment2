// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. IMPORT YOUR JSX FILE (The Dish)
import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage'; // Make sure the filename matches EXACTLY

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />

                {/* 2. CREATE THE ROUTE (The Menu Item) */}
                {/* We are naming this path "/about" */}
                <Route path="/about" element={<AboutPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;