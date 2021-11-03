import React from 'react'
import './Touch.css'
import '../uiLibary/styles.css'
import obj from '../../config'
function Touch() {
    const { touchs } = obj
    console.log(touchs)
    return (
        <div className="section">
            <div className="section-header client">
                <h2>Get In Touch</h2>
                <p>
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics : NewTonian
                    mechanics
                </p>
            </div>
            <div className="touchInfo">
                {touchs.map(({ email1, email2, img, className }, index) => {
                    return (
                        <div
                            key={index}
                            className={'touchInfoBlock ' + className}
                        >
                            <img
                                className="touchInfoImg"
                                src={img}
                                alt="callimg"
                            />
                            <h5>{email1}</h5>
                            <h6>{email2}</h6>
                            <h4 className="getSupport">Get Support</h4>
                            <button className={'btnTouch ' + className}>
                                <h6> Subscribe</h6>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Touch
