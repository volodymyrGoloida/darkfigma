import React from 'react'
import './about.css'
import '../uiLibary/styles.css'
import playbutton from '../../img/playbutton.png'
function About() {
    return (
        <div className="section">
            <div className="section-header">
                <h2>About us</h2>
                <p>
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics : NewTonian
                    mechanicss
                </p>
            </div>
            <div className="aboutContent">
                <div className="aboutImg">
                    <button className="aboutButton">
                        <img src={playbutton} alt="playmg" />
                    </button>
                </div>
                <div className="aboutInfo">
                    <h3>Most trusted in our field</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eligendi in sed veritatis dolore ab ad quos, earum
                        fugiat amet blanditiis autem omnis possimus{' '}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
