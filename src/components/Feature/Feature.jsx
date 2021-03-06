import React from 'react'
import './Feature.css'
import obj from '../../config'
import featureimg from '../../img/featureimg.png'
import '../uiLibary/styles.css'

function Feature() {
    const { featuresecton } = obj
    console.log(featuresecton)
    return (
        <div className="section">
            <div className="section-header">
                <h2>
                    Better Strategy With
                    <br /> Quality Business
                </h2>
                <p>
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics : NewTonian
                    mechanics
                </p>
            </div>
            <div className="feature-content">
                {featuresecton.map((el, index) => {
                    return (
                        <div key={index} className="feature-article">
                            <div className="featureImg">
                                <img src={featureimg} alt="img" />
                            </div>
                            <div className="featureInfo">
                                <h5>{el.title}</h5>
                                <p>{el.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Feature
