import Image from 'next/image'
import { useEffect, useState } from 'react'

import review1 from '../public/img/reviews/1.jpg'
import review2 from '../public/img/reviews/2.jpg'
import review3 from '../public/img/reviews/3.jpg'
import review4 from '../public/img/reviews/4.jpg'
import review5 from '../public/img/reviews/5.jpg'
import review6 from '../public/img/reviews/6.jpg'

const Reviews = () => {
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const cycleForReviews = (event: NodeListOf<Element>) => {
            for (var i = 0; i < event.length; i++) {
                const windowHeight = window.innerHeight
                const elementTop = event[i].getBoundingClientRect().top
                const elementVisible = 150

                if (elementTop < windowHeight - elementVisible) {
                    event[i].classList.add('__animations')
                }
            }
        }
        const boxLeft = document.querySelectorAll('.box-left')
        const boxRight = document.querySelectorAll('.box-right')

        cycleForReviews(boxLeft)
        cycleForReviews(boxRight)
    })

    return (
        <div className='reviews' id='id3'>
            <div className='reviews__flex'>
                <div className='box-left'>
                    <Image src={review1} alt={''} />
                </div>
                <div className='second-box box-left'>
                    <Image src={review2} alt={''} />
                </div>
                <div className='box-right'>
                    <Image src={review3} alt={''} />
                </div>
            </div>
            <div className='reviews__flex'>
                <div className='box-left'>
                    <Image src={review4} alt={''} />
                </div>
                <div className='second-box box-right'>
                    <Image src={review5} alt={''} />
                </div>
                <div className='box-right'>
                    <Image src={review6} alt={''} />
                </div>
            </div>
        </div>
    )
}

export default Reviews
