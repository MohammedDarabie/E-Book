import "./App.css";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./style/style.css";
function App() {
  return (
    <div className="dark:bg-darkbg">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
