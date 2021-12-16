import React from 'react'
import {BrowserRouter as Router,NavLink,Routes,Route} from 'react-router-dom'
import StronaGłowna from './StronaGłowna';
import Instrukcja from './Instrukcja';
import Ogrze from './Ogrze';
import Gra from './Gra';
function Zawartosc() {
    return (
        <div className="glowny__main">
            
            <Routes>

                <Route path="/https://marcinito.github.io/" element={<Gra/>}></Route>
                <Route path="/main" element={<StronaGłowna/>}></Route>
                <Route path="o-grze" element={<Ogrze/>}></Route>
                <Route path="/instrukcja" element={<Instrukcja/>}></Route>
            </Routes>
        </div>
    )
}

export default Zawartosc
