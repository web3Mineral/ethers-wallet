import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Createwallet from './pages/createwallet';
import LoginWallet from './pages/loginwallet';
import Home from './pages/home';
import Sendeth from './pages/sendeth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/send' element={<Sendeth/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<LoginWallet/>} />
          <Route path='/create' element={<Createwallet/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
