import React from 'react'

import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Feature from './components/Feature/Feature'
import Clients from './components/Clients/Clients'
import About from './components/AboutCompany/About'
function App() {
    return (
        <>
            <Header /> <Title />
            <Feature />
            <Clients />
            <About />
        </>
    )
}

export default App
