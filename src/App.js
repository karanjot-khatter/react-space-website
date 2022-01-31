import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Destination from './pages/Destination';
import DestinationMars from './pages/DestinationMars';
import DestinationEuropa from './pages/DestinationEuropa';
import DestinationTitan from './pages/DestinationTitan';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/destination' element={<Destination/>} />
          <Route path='/destination/mars' element={<DestinationMars/>} />
          <Route path='/destination/europa' element={<DestinationEuropa/>} />
          <Route path='/destination/titan' element={<DestinationTitan/>} />
          <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
