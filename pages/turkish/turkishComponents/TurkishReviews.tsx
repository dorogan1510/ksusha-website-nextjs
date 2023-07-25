import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import img1 from '../../../public/img/turkish-reviews/(1).jpg'
import img2 from '../../../public/img/turkish-reviews/(2).jpg'
import img3 from '../../../public/img/turkish-reviews/(3).jpg'
import img4 from '../../../public/img/turkish-reviews/(4).jpg'
import img5 from '../../../public/img/turkish-reviews/(5).jpg'
import img6 from '../../../public/img/turkish-reviews/(6).jpg'
import img7 from '../../../public/img/turkish-reviews/(7).jpg'
import img8 from '../../../public/img/turkish-reviews/(8).jpg'

const TurkishReviews = () => {
    const reviews = [
        {
            id: 1,
            img: img1,
        },
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        },
        {
            id: 4,
            img: img4,
        },
        {
            id: 5,
            img: img5,
        },
        {
            id: 6,
            img: img6,
        },
        {
            id: 7,
            img: img7,
        },
        {
            id: 8,
            img: img8,
        },
    ]

    return (
        <div className='reviews'>
            <h2>Отзывы</h2>
            <div>
                <Carousel autoPlay={false}>
                    {reviews.map(data => (
                        <Image
                            key={data.id}
                            src={data.img}
                            alt={'review'}
                            loading='lazy'
                            style={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: '1rem',
                            }}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default TurkishReviews
