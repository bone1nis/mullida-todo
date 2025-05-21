import { ThemeSwitcher } from "../../entities/theme";

const AppBar = () => {
    return (
        <header className="py-4 border-b dark:text-white mb-6 flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold text-center flex-grow dark:text-white">Millida Todo</h1>
            <ThemeSwitcher />
        </header>
    );
};

export default AppBar;