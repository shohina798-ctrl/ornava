import { useEffect, useState } from 'react'

export default function useDarkSide(){
    const [theme, setTheme] = useState(localStorage.theme || "light");

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove("light", "dark");
        root.classList.add(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
}