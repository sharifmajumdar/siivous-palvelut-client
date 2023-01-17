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
import Order from './components/Order/Order';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState, createContext, useEffect } from 'react';

export const ServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [showServices, setShowServices] = useState([]);

  useEffect(() => {
    fetch('https://siivous-palvelut-server.vercel.app/showServices')
        .then((response) => response.json())
        .then((data) => {
          setShowServices(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
}, []);
  return (
    <ServiceContext.Provider value={[showServices, setShowServices, loggedInUser, setLoggedInUser]}>
      <Router>
        <div className='container'>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Content />} />            
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/order' element={<Order />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/services" element={<Services />} />
              <Route path='/admin' element={<Admin />} />
            </Route>            
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </ServiceContext.Provider>
  );
}

export default App;
