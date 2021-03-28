import {BrowserRouter, Route,Link} from "react-router-dom";
import React from "react";
import './App.css';
import data from './data'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
<BrowserRouter>
  <div>
    <div className="grid-container">
        <header className="header">
           <div className="brand">
               <button onClick={openMenu}>&#9776;</button>
               <a href="">amazon</a>
           </div>
           <div className="header-links">
               <a href="cart.html">Cart</a>
               <a href="signin.html">Signin</a>
           </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Menu</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="">Pants</a>
                </li>
                <li>
                    <a href="">Shirts</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
                <Route path="/products/:id" component={ProductScreen} />
                <Route path= "/" exact ={true} component={HomeScreen} />
                
            </div>
            
        </main>
        <footer className="footer">
            All rights reserved
        </footer>
    </div>
 </div>
 </BrowserRouter>
  );
}


export default App;
