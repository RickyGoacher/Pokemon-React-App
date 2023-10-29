import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import PokemonListingPage from "./Pages/PokemonListingPage";
import PokemonDisplayPage from "./Pages/PokemonDisplayPage";
import FourZeroFour from './Pages/404';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Pokemon-React-App/" element={<PokemonListingPage />} />
        <Route path="/Pokemon-React-App/page/:num" element={<PokemonListingPage />} />
        <Route path="/Pokemon-React-App/pokemon/:id" element={<PokemonDisplayPage />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </div>
  );
}

export default App;
