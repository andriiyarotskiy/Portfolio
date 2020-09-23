import React from 'react';
import './App.css';
import './normalize.css'
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Remoting from "./Remoting/Remoting";
import Contact from "./Contact/Contact";
import Footer from './Footer/Footer';



function App() {
    return (
        <div className="App">

            <Main />
            <Skills />
            <MyProjects />
            <Remoting />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
