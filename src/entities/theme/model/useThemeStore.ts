import { create } from "zustand";

interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
    setDark: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => {
    const initialIsDark =
        typeof window !== "undefined"
            ? localStorage.getItem("theme") === "dark" ||
            (!localStorage.getItem("theme") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
            : false;

    return {
        isDark: initialIsDark,
        toggleTheme: () =>
            set((state) => {
                const newIsDark = !state.isDark;
                localStorage.setItem("theme", newIsDark ? "dark" : "light");
                return { isDark: newIsDark };
            }),
        setDark: (value: boolean) =>
            set(() => {
                localStorage.setItem("theme", value ? "dark" : "light");
                return { isDark: value };
            }),
    };
});