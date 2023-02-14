import React from 'react'
import './contact.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'


const Contact = () => {
    return (
        <div id='contact'> 
            <form action="">
            <div classNameName='title'>
                <h1 className='title-paragraph'>ОБРАТНАЯ СВЯЗЬ</h1>
                <p className='title-text'>Отправьте нам сообщение и мы ответим Вам в течение 5 минут.</p>
            </div>
            <div className="half">
                <div className="item">
                    <input type="text" id="name" placeholder="Ф.И.О" />
                </div>
                <div className="item">
                    <input type="text" id="email" placeholder="Телефон" />
                </div>
            </div>
            <div className="full">
                <textarea name="" id="message" placeholder="сообщение"></textarea>
            </div>
            <div className="action">
                <input type="submit" value="SEND MESSAGE" />
            </div>
            <div className="icons">
                <span> <BsFillTelephoneFill /> +998997256775</span> <br />
                <span> <AiFillHome /> г. Ташкент ул Богишамол 33а</span>
            </div>
        </form>
        </div>

    )
}

export default Contact
