import React from 'react';
import './App.css';
import atthepark from '../images/atthepark.jpeg';
import Navbar from './Navbar';


function App() {
    const title = "Welcome to Iroko in React";

    return (
    <div className="App">
    <div className="content">

        <header>
            <i class="fas fa-bars" onclick="openSideNav()"></i>
            
            <h1>{title}</h1>
        </header>
        
        <div className="image">
        <img src={atthepark} width="500px" height="auto" alt="Iroko at the park" />
        </div>
        <Navbar />
    </div>
    </div>
    );
}



export default App;