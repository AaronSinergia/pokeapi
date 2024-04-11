import './App.css';
import { Route, Routes } from 'react-router-dom';
import PokeHome from './pages/PokeHome';
import NotFound from './pages/NotFound';
import PokeApi from './api/PokeApi';

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<PokeHome />} />
          <Route path="/:pokemonName" element={<PokeApi />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
