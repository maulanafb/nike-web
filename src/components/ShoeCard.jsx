import React from 'react'

const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () => {
        if (bigShoeImage !== imageUrl.bigShoe) {
            changeBigShoeImage(imageUrl.bigShoe)
        }
    }
    return (
        <div
            className={`${bigShoeImage === imageUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} border-2 rounded-xl cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={imageUrl.thumbnail} alt="shoes" width={127} height={103} className='object-containt' />
            </div>
        </div>
    )
}

export default ShoeCard