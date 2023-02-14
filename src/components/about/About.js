// O'ktam
import React from "react"
import "./about.css"
const About = () => {
    return (
        <div className="about" id="about">
            <div className="containder">
                <h1>O нас</h1>
                <p>
                    B нашем конструкторе флаеров Вы можете создать свой собственный неповторимый дизайн флаера.
                </p>
                <div className="main-box">
                    <div className="left-img">
                        <img src="https://flaer.uz/img/markus-spiske-144806-unsplash.jpg" alt="" />
                    </div>
                    <div className="right-text">
                        <h3>
                            ЧТО TAKOE ФЛАЕР?</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About