import React from 'react'

import Lottie from 'react-lottie-player'

import lottieJson from '@/public/animation.json'

export default function Animation() {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
            className='flex min-h-80 min-w-80 max-h-80 max-w-80 items-center justify-center'
        />
    )
}