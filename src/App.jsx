import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="bg-bookshelf">
      <Header />
      <HomePage />;
      <Footer />
    </div>
  );
};

export default App;
