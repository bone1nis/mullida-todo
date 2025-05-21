import HomePage from "../pages/home/HomePage";
import { AppBar } from "../shared";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <AppBar />
      <div className="container mx-auto px-4">
        <HomePage />
      </div>
    </div>
  );
};

export default App;