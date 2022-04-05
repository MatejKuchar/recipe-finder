import "./App.scss";

//Childrens
import Home from "./views/Home";
import About from "./views/About";
import Recipes from "./views/Recipes";

import { Routes, Route } from "react-router-dom";
import TheNavigation from "./components/TheNavigation";

function App() {
  return (
    <div className="App ">
      <header className="header">
        <nav>
          <TheNavigation />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
export default App;
