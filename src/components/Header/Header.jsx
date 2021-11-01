import React, { useState } from 'react'
import './header.css'
import obj from '../../config'
import logo from '../../img/Vector.png'
import searchlogo from '../../img/1.png'
import basketlogo from '../../img/2.png'
import gamburlogo from '../../img/3.png'

function Header() {
    /*const [width, setWidth] = useState(720)

    window.addEventListener('resize', () => {
        let userWidth = document.querySelector('body').offsetWidth
        setWidth(userWidth)
    })*/

    const width = document.querySelector('body').offsetWidth

    const { navbar } = obj
    return (
        <>
            <div className="Header">
                <div className="navbar">
                    <div className="navbar-items brand">
                        <h3>BrandName</h3>
                    </div>
                    {navbar.map((el) => {
                        return (
                            <div className="navbar-items">
                                <a href="">{el}</a>
                            </div>
                        )
                    })}

                    <div className="login">
                        {width <= 1028 ? (
                            <>
                                <img src={searchlogo} />{' '}
                                <img src={basketlogo} />{' '}
                                <img src={gamburlogo} />{' '}
                            </>
                        ) : (
                            <>
                                <button className="button outline">
                                    Login
                                </button>

                                <button className="button inline">
                                    Become a member <img src={logo} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header
