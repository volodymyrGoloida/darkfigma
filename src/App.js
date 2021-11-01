import React, { useState } from 'react'

import obj from './config'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Feature from './components/Feature/Feature'
import Clients from './components/Clients/Clients'

function App() {
    return (
        <>
            <Header /> <Title />
            <Feature />
            <Clients />
        </>
    )
}

export default App
