import React from 'react'
import './about.css'
import '../uiLibary/styles.css'
import playbutton from '../../img/playbutton.png'
import obj from '../../config'
import aboutImg1 from '../../img/aboutSectionimg1.png'
import aboutImg2 from '../../img/aboutSectionimg2.png'
function About() {
    const { aboutInfo } = obj
    console.log(aboutInfo)
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
                    {aboutInfo.map((el, index) => {
                        return (
                            <div className="aboutMoreInfo">
                                <div className="aboutMoreImg">
                                    <img
                                        src={
                                            index === 0 ? aboutImg1 : aboutImg2
                                        }
                                        alt="imgabout"
                                    />
                                </div>
                                <div className="aboutMoreText">
                                    <h5>{el.title}</h5>
                                    <h6>{el.text}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About
