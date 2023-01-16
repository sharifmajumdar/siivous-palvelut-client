import './App.css';
import NoMatch from './components/NoMatch/NoMatch';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Content from './components/Home/Content/Content';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
/*
import Shipment from './components/Shipment/Shipment';
import Order from './components/Order/Order'; */
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState, createContext } from 'react';

export const ServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  //const [showProducts, setShowProducts] = useState([]);

/*   useEffect(() => {
    fetch('https://react-node-eshop-server.vercel.app/showProducts')
        .then((response) => response.json())
        .then((data) => {
            setShowProducts(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
}, [showProducts]); */
  return (
    <ServiceContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className='container'>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Content />} />
            <Route path="/services" element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route element={<PrivateRoutes />}>
              
            </Route>
            <Route path='/admin' element={<Admin />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </ServiceContext.Provider>
  );
}

export default App;
