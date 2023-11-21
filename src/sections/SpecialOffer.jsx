import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
    return (
        <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex-1'>
                <img src={offer} alt="" width={773} height={687} className='object-containt w-full' />
            </div>
            <div className='flex flex-1 flex-col'>
                <h2 className='mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>

                    <span className='text-coral-red inline-block mt-3'>Special</span> Offer</h2>
                <p className='mt-4 max-w-lg info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections incredible savings, we offer unparalled value taht sets us apart.</p>
                <p className='mt-4 max-w-lg info-text'>Navigate a realm of possibilities designed to fulfill your unique desires. surpassing the lefties expectations. Your journey with us is nothing short of expectations</p>
                <div className='mt-11 flex flex-wrap gap-4'>
                    <Button label="Shop Now" iconUrl={arrowRight} />
                    <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer