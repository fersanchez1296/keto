import React from 'react';
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header.jsx'
import { Router } from './router/Router.jsx'

export const App = () => {

  return (
    <div className="App">
        <Router />
    </div>
  )
}

export default App
