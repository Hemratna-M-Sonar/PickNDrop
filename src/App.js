import Layout from "./components/Layout";
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
