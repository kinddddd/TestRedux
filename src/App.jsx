import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddCharacters from './pages/AddCharacters';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Planets from './pages/Planets';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="characters" element={<Characters/>} />
        <Route path="planets" element={<Planets/>} />
        <Route path="addcharacters" element= {<AddCharacters/>} />
      </Routes>
    </div>
  );
}

export default App;
