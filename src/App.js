import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css'
import AvatarDisplay from './components/AvatarDisplay';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar" element={<AvatarDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
