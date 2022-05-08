import { Navigate, Route, Routes } from 'react-router';
import './App.css';

//pages
import Home from './pages/Home';
import About from './pages/About/About';
import CartPage from './pages/CartPage/CartPage';
import Contact from './pages/Contact/Contact';

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='cartpage' element={<CartPage/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
