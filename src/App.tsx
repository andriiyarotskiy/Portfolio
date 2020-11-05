import React from 'react';
import './App.css';
import './normalize.css'
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Remoting from "./Remoting/Remoting";
import Contact from "./Contact/Contact";
import Footer from './Footer/Footer';
import Header from "./Main/Header/Header";
import style from "./Main/Main.module.scss";


function App() {
    return (
        <div className="App">
            <div className={style.mainWrapper}>

                <Header/>
                <Main/>

            </div>
            <Skills/>
            <MyProjects/>
            <Remoting/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
