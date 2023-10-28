import { Routes, Route } from 'react-router-dom';
import PokemonListingPage from "./Pages/PokemonListingPage";
import PokemonDisplayPage from "./Pages/PokemonDisplayPage";
import FourZeroFour from './Pages/404';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonListingPage />} />
        <Route path="/page/:num" element={<PokemonListingPage />} />
        <Route path="/pokemon/:id" element={<PokemonDisplayPage />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </div>
  );
}

export default App;
