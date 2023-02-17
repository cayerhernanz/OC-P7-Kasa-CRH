import './carrousel.scss'

import arrowRight from '../../assets/carrousel-right-arrow.png'
import arrowLeft from '../../assets/carrousel-left-arrow.png'

import {useState} from 'react'

export default function Carrousel({images}){
    const [current, setCurrent]= useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current + 1)
        if( current === length - 1)
        setCurrent(0)
    };

    const prevSlide = () => {
        setCurrent(current - 1)
        if (current === 0)
        setCurrent(length - 1)
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className='carrousel'>
            <img className='carrousel_image' src={images[current]} alt="photogrpahie du logement" />
            {length > 0 &&
            <>
                <img
                    className='carrousel_arrow_left'
                    src={arrowLeft}
                    alt="photographie précédente"
                    onClick={prevSlide}
                />
            
                <img
                    className='carrousel_arrow_right'
                    src={arrowRight}
                    alt="photographie suivante"
                    onClick={nextSlide}
                />
                <p className='carrousel_slideCount'>{current + 1} / {length}</p>
            </>
        }
        </section>
    )
}