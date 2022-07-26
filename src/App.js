import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
    <div className='initial-project-style'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
