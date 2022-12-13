import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TLS from './pages/TLS';
import QA from './pages/QA';
import TBL from './pages/TBL';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tls' element={<TLS />} />
          <Route path='/qa' element={<QA />} />
          <Route path='/tbl' element={<TBL />} />
       </Routes>

    </Router>
  );
}

export default App;
