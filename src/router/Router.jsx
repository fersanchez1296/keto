import React from 'react'
import { SectionMain } from '../components/SectionMain.jsx';
import { Breakfast } from '../components/Breakfast.jsx';
import { Lunch } from '../components/Lunch.jsx';
import { Dinner } from '../components/Dinner.jsx';
import { Resume } from '../components/Resume.jsx';
import {Routes, Route, BrowserRouter,HashRouter} from 'react-router-dom';
import { Header } from '../components/Header.jsx';
import { Calendar } from '../components/Calendar.jsx';

export const Router = () => {
  return (
    <HashRouter basename='/keto'>
          {/*Header y Nav*/}
            <Header/>
          {/*Main-Section*/}
          <Routes >
            <Route path="/keto/inicio" element={<SectionMain/>}/>
            <Route path="/Desayuno" element={<Breakfast/>}/>
            <Route path="/Comida" element={<Lunch/>} />
            <Route path="/Cena" element={<Dinner/>} />
            <Route path="/Resumen" element={<Resume/>} />
            <Route path="/Calendar" element={<Calendar/>}   />
          </Routes>

          {/*Main Section*/}
    </HashRouter>
  )
}

