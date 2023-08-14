import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './feature/home/home';
import About from './feature/about';
import Layout from './layout';
import Signup from './feature/signup';
import Login from './feature/login';
import Main from './layout/main/main';
import ProdectDetails from './feature/prodect-details/prodect-details';
import AddProdect from './feature/add-prodect/add-prodect';
import PlaceOrder from './feature/place-order/placeOrder';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="product-details/:id" element={<ProdectDetails />} />
            <Route path="add-prodect" element={<AddProdect />} />
            <Route path="about" element={<About />} />
            <Route path="placeOrder" element={<PlaceOrder />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
