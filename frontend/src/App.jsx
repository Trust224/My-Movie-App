
import "./css/App.css";
import Home from "./Pages/Home"
import {Routes, Route} from "react-router-dom"
import {MovieProvider} from "./contexts/MovieContext"
import Favorites from "./Pages/favorites"
import NavBar from "./components/NavBar";


function App() {

  return (
    <MovieProvider>
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
    </MovieProvider>
  );
  
  
}


export default App;
