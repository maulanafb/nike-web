import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
    return (
        <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
            <div className='flex flex-1 flex-col'>
                <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
                <h2 className='mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
                    We Provide You
                    <span className='text-coral-red inline-block mt-3'>Super Quality</span> Shoes</h2>
                <p className='mt-4 max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience. providing you iwth unmatched quality, innovation and a touch of elegance</p>
                <p className='mt-6 lg:max-w-lg info-text'>Our deddication to detail and excelence ensures your satisfaction</p>

                <div className='mt-11'><Button label="View Detail" /></div>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <img src={shoe8} alt="shoe8" width={570} height={522} className='object-containt' />
            </div>
        </section>
    )
}

export default SuperQuality