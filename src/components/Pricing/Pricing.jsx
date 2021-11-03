import React from 'react'
import './Pricing.css'
import '../uiLibary/styles.css'
import arrowDoneImg from '../../img/arrowDone.png'
import obj from '../../config'
function Pricing() {
    const { pricing } = obj
    return (
        <div className="section">
            <div className="section-header client">
                <h2>Pricing</h2>
                <p>
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics : NewTonian
                    mechanics
                </p>
            </div>
            <div className="pricingInfo">
                {pricing.map(
                    ({ title, subtitle, price, possibilities }, index) => {
                        return (
                            <div key={index} className="priceBlock">
                                <div className="pricesTextSection">
                                    <div className="priceContainerTitles">
                                        <h3 className="priceTitle">{title} </h3>
                                        <h5 className="priceSubTitle">
                                            {subtitle}
                                        </h5>
                                    </div>
                                    <div className="price">
                                        <h2 className="priceNumb">{price}$</h2>
                                        <h5 className="priceConditions">
                                            Per Month
                                        </h5>
                                    </div>

                                    <button className="pricingButton">
                                        Try for free
                                    </button>
                                </div>
                                <div className="possibilities">
                                    {possibilities.map(
                                        (
                                            { possibilityText, className },
                                            indx
                                        ) => {
                                            return (
                                                <div
                                                    key={indx}
                                                    className="possibilityBlock"
                                                >
                                                    <div
                                                        className={
                                                            'circle ' +
                                                            className
                                                        }
                                                    >
                                                        <img
                                                            src={arrowDoneImg}
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="possibilityText">
                                                            {possibilityText}
                                                        </h6>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Pricing
