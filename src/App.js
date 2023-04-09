import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
