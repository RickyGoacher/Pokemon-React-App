import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import PokemonListingPage from "./Pages/PokemonListingPage";
import PokemonDisplayPage from "./Pages/PokemonDisplayPage";
import FourZeroFour from './Pages/404';
import MoveDisplayPage from './Pages/MoveDisplayPage';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Pokemon-React-App" element={<PokemonListingPage routeType={"pokemon"}/>} />
        <Route path="/Pokemon-React-App/pokemon" element={<PokemonListingPage routeType={"pokemon"}/>} />
        <Route path="/Pokemon-React-App/moves" element={<PokemonListingPage routeType={"moves"} />} />
        <Route path="/Pokemon-React-App/berries" element={<PokemonListingPage routeType={"berries"} />} />
        <Route path="/Pokemon-React-App/abilities" element={<PokemonListingPage routeType={"abilities"} />} />
        <Route path="/Pokemon-React-App/pokemon/page/:num" element={<PokemonListingPage />} />
        <Route path="/Pokemon-React-App/moves/page/:num" element={<PokemonListingPage />} />
        <Route path="/Pokemon-React-App/berries/page/:num" element={<PokemonListingPage />} />
        <Route path="/Pokemon-React-App/abilities/page/:num" element={<PokemonListingPage />} />
        <Route path="/Pokemon-React-App/pokemon/:id" element={<PokemonDisplayPage />} />
        <Route path="/Pokemon-React-App/moves/:id" element={<MoveDisplayPage />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </div>
  );
}

export default App;
