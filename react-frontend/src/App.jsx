import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORT YOUR PAGES
import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage'; // <--- Import the new page

function App() {
    return (
        <Router>
            <Routes>
                {/* URL: / -> Shows FrontPage */}
                <Route path="/" element={<FrontPage />} />

                {/* URL: /about -> Shows AboutPage */}
                <Route path="/about" element={<AboutPage />} />

            </Routes>
        </Router>
    );
}

export default App;

