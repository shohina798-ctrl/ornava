import { useEffect, useState } from "react";

export default function useDarkSide() {
    const [darkSide, setDarkSide] = useState(localStorage.theme || "light")
    const colorTheme = darkSide === "light" ? "dark" : "light";
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme)
        root.classList.add(darkSide)
        localStorage.setItem("theme", darkSide);
    }, [darkSide, colorTheme]);
    return [colorTheme, setDarkSide];
}