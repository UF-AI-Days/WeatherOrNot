import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Header from './Header'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
