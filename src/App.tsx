import React from 'react';
import './App.css';
import './normalize.css'
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Footer from './Footer/Footer';
import Header from "./Main/Header/Header";
import style from "./Main/Main.module.scss";


function App() {
    return (
        <div className="App" >
            <div className={style.mainWrapper} id="Home">
                <Header/>
                <Main/>
            </div>
            <Skills/>
            <MyProjects/>
            <Footer/>
        </div>
    );
}

export default App;
