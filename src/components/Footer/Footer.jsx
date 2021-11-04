import React from 'react'
import facebookImg from '../../img/facebookImg.png'
import instagramImg from '../../img/instagramImg.png'
import twitterImg from '../../img/twitterImg.png'
import obj from '../../config'
import './Footer.css'
import '../uiLibary/styles.css'
function Footer() {
    const img = [facebookImg, instagramImg, twitterImg]
    const { footersInfo } = obj
    return (
        <div className="footer">
            <div className="footerinfo">
                <h3 className="brandText">BrandName</h3>

                <div className="imageSectionFooter">
                    {img.map((el, index) => {
                        return <img key={index} src={el} alt="imgsocial" />
                    })}
                </div>
            </div>
            <hr />
            <div className="linkToCompanyInfo">
                <div className="sectionWithAllInfo">
                    {footersInfo.map(({ title, links }) => {
                        return (
                            <div className="block">
                                <div className="companyInfoBlock">
                                    <h5 className="titleInfo">{title} </h5>
                                </div>
                                <div className="links">
                                    {links.map((link) => {
                                        return <a href="#">{link}</a>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
