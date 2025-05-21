import React, { useEffect } from "react";
import { useThemeStore } from "../model/useThemeStore";

const ThemeSwitcher: React.FC = () => {
    const isDark = useThemeStore((state) => state.isDark);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded border border-black bg-white text-black hover:bg-black hover:text-white
                 dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black
                 transition-colors"
            aria-label="Переключить тему"
            type="button"
        >
            {isDark ? "Светлая тема" : "Тёмная тема"}
        </button>
    );
};

export default ThemeSwitcher;