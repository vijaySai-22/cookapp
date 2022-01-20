import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home';
import Recipes from './components/Recipes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/recipes" exact element={<Recipes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
