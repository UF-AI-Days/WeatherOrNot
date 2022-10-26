import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'index.scss';

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
