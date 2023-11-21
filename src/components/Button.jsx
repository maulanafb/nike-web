import React from 'react'

const Button = ({ iconUrl, label, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? 'bg-white' : 'bg-coral-red'} rounded-full ${textColor ? textColor : 'text-white'}  ${borderColor ? borderColor : 'border-coral-red'} ${fullWidth && 'w-full'}`}>
            {label}
            {iconUrl && <img src={iconUrl} alt='arrow right icon' className='ml-2 rounded-full w-5 h-5' />}
        </button>
    )
}

export default Button