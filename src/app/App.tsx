import HomePage from "../pages/home/HomePage";

const App: React.FC = () => {
  return (
    <div>
      <header className="py-4 border-b mb-6 ">
        <h1 className="text-2xl font-bold text-center">Millida Todo</h1>
      </header>
      <div className="container mx-auto px-4">
        <HomePage />
      </div>
    </div>
  );
};

export default App;