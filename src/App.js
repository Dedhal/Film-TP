//import logo from './logo.svg';
import './App.css';
import Banniere from './components/Banniere';
import FilmCard from './components/filmCard';
import FilmQuizz from './components/FilmQuizz';
import 'bulma/css/bulma.min.css';
import Footer from './components/Footer';
import UserCard from './components/UserCard';
import Map_test from './components/Map_test';

import { Route, Routes } from 'react-router-dom';

function App() {
    //console.log(Banniere())
    return (
        <div>
            <meta charset="utf-8" />
            <Banniere />
            <Routes>
                <Route path="/" element={<FilmCard />} />
                <Route path="/filmQuizz" element={<FilmQuizz />} />
                
            </Routes>
        </div>
    );
    //return "test";
}
//<Route path="/FilmCard" element={<FilmCard />} />
export default App;
