import React from 'react'
import './clients.css'
import '../uiLibary/styles.css'
import obj from '../../config'
import firstImg from '../../img/user.1.png'
function Clients() {
    const { disigners } = obj
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
                {disigners.map((client) => {
                    return (
                        <div class="card">
                            <img src={firstImg} />
                            <h3>{client.title}</h3>
                            <h6>{client.subtitle}</h6>
                            <p>{client.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Clients
