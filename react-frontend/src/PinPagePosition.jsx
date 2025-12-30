import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // "0, 0" means Top-Left of the screen
        window.scrollTo(0, 0);
    }, [pathname]); // This runs every time "pathname" (the URL) changes

    return null; // This component doesn't render anything visible
}