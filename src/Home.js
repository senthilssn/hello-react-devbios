import React from 'react'
import './Home.css';
import logo from './logo.svg';

function Home() {
    return (
        <div>            
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>Hello!</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>                
        </div>
    )
}

export default Home
