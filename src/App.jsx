import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "../Paginas/Layout";
import About from "../Paginas/About";
import Home from "../Paginas/Home";
import Default from "../Paginas/Default";
import Dashboard from "../Paginas/Dashboard";

function App() {
  return (
    <div className="pokemon-app">
      <h1 className="pokemon-title">Pokémon Routes</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
