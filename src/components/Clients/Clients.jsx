import React from 'react'
import './clients.css'
import '../uiLibary/styles.css'
import obj from '../../config'
import star from '../../img/star.png'
import starEmpty from '../../img/starEmpty.png'

function Clients() {
    const { disigners } = obj
    let stars = Array(5).fill(star)
    stars.push(starEmpty)

    return (
        <div className="section">
            <div className="section-header client">
                <h2>What Clients Say</h2>
                <p>
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics : NewTonian
                    mechanics
                </p>
            </div>
            <div className="content-cards">
                {disigners.map((client, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="clientImg"></div>
                            <div className="clientInfo">
                                <h3>{client.title}</h3>
                                <h6>{client.subtitle}</h6>
                                <div className="stars">
                                    {stars.map((star) => {
                                        return <img src={star} alt="star" />
                                    })}
                                </div>
                                <p>{client.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Clients
