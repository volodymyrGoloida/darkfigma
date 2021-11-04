import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Feature from './components/Feature/Feature'
import Clients from './components/Clients/Clients'
import About from './components/AboutCompany/About'
import Pricing from './components/Pricing/Pricing'
import Touch from './components/Touch/Touch'
import Footer from './components/Footer/Footer'
function App() {
    return (
        <div className="mainDiv">
            <Header />
            <Title />
            <Feature />
            <Clients />
            <About />
            <Pricing />
            <Touch />
            <Footer />
        </div>
    )
}

export default App
