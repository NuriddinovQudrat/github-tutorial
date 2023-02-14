import React from 'react'
import one from './works.img/1.jpg'
import two from './works.img/2.jpg'
import four from './works.img/4.jpg'
import five from './works.img/5.jpg'
import six from './works.img/6.jpg'
import seven from './works.img/7.jpg'
import eight from './works.img/8.jpg'
import nine from './works.img/9.jpg'
import ten from './works.img/10.jpg'
import eleven from './works.img/11.jpg'
import twoleve from './works.img/12.jpg'
import threenten from './works.img/13.jpg'
import fourten from './works.img/14.jpg'
import fiveten from './works.img/15.jpg'
import sixten from './works.img/16.jpg'
import seventen from './works.img/17.jpg'
import threee from '../works/works.img/3.jpg'
import './works.css'




export default function Works() {

    const style = {
        marginTop: '0%'
    }
    return (
        <div className='Container' id='Work'>
            <div className='upper'>
                <h1> НАШИ РАБОТЫ</h1>
                <p>Ниже Вы можете просмотреть работы, которые мы уже выполнили.</p>
            </div>
            <div className='images '>

                <div className='img1'>
                    <img src={one} className='img' alt=''></img>

                </div>
                <div className='img1'>
                    <img src={two} className='img' alt=''></img>
                </div>
                <div className='img1'>
                    <img src={threee} className='img' alt=''></img>
                </div>
                <div className='img1'>
                    <img src={four} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={five} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={six} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={seven} className='img' alt=''></img>

                </div>
                <div className='img1 ' style={style}>
                    <img src={eight} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={nine} className='img' style={style} alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={ten} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={eleven} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={twoleve} className='img' style={style} alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={threenten} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={fourten} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={fiveten} className='img' alt=''></img>

                </div>
                <div className='img1' style={style}>
                    <img src={sixten} className='img' alt=''></img>

                </div>
                <div
                    className='img1' >
                    <img src={seventen} className='img' alt=''></img>
                </div>



            </div>

        </div>

    )
}