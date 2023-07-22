import { useEffect } from 'react'

import Image from 'next/image'
import heroImage from '../public/img/bg1.jpg'
import instagram from '../public/img/instagram.svg'
import skype from '../public/img/skype.svg'
import telegram from '../public/img/telegram.svg'
import vk from '../public/img/vk.svg'
import whatsapp from '../public/img/whatsapp.svg'
import Link from 'next/link'

const HeroSection = () => {
    useEffect(() => {
        const btn = document.getElementById('btn')

        const changeBtnDisplay = () => {
            const delayAnimation = () => {
                document.getElementById('btn')!.style.display = 'none'
            }
            document.getElementById('btn')!.style.visibility = 'none'

            setTimeout(delayAnimation, 800)

            document.getElementById('btn')!.style.opacity = '0'
        }

        const changeContactsDisplay = () => {
            const contacts = document.querySelector('.contacts') as HTMLElement
            const delayAnimation1 = () => {
                contacts.style.display = 'flex'
            }
            const delayAnimation2 = () => {
                contacts.style.opacity = '1'
            }
            setTimeout(delayAnimation1, 800)
            setTimeout(delayAnimation2, 1000)
        }

        btn!.addEventListener('click', function () {
            changeContactsDisplay()
            changeBtnDisplay()
        })
    }, [])

    return (
        <main>
            <div className='flex'>
                <div className='left-side'>
                    <h1>
                        Привет! Меня зовут Ксения и я твой <br />
                        личный преподаватель
                    </h1>
                    <p>
                        Главное для меня — комфорт каждого ученика во время
                        всего процесса обучения. Сейчас я преподаю английский,
                        французский, арабский и турецкий языки.
                    </p>
                </div>
                <Image className='img' src={heroImage} alt={''} />
            </div>

            <a
                className='btn'
                type='button'
                target='_blank'
                href='https://wa.me/79523715490?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%BE%D0%BC%D1%83%20%D1%8F%D0%B7%D1%8B%D0%BA%D1%83%20%D1%81%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%D0%BE%D0%BC%20%22%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%22.'
                // onClick={e => {
                //     e.preventDefault()
                //     window.location.href =
                //         'https://wa.me/79523715490?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%BE%D0%BC%D1%83%20%D1%8F%D0%B7%D1%8B%D0%BA%D1%83%20%D1%81%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%D0%BE%D0%BC%20%22%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%22.'
                // }}
            >
                Записаться на интенсив по турецкому
            </a>
            <button className='btn' type='button' id='btn'>
                Свяжитесь со мной!
            </button>
            <div className='contacts'>
                <a
                    className='contacts__email'
                    href='mailto: ksunchik459@gmail.com'
                >
                    ksunchik459@gmail.com{' '}
                </a>
                <div>
                    <a href='https://vk.me/id246389144' target='_blank'>
                        <Image
                            className='contacts__social_link vk'
                            src={vk}
                            alt={''}
                        />
                    </a>
                    <a
                        href='https://api.whatsapp.com/send?phone=79523715490'
                        target='_blank'
                    >
                        <Image
                            className='contacts__social_link whatsapp'
                            src={whatsapp}
                            alt={''}
                        />
                    </a>
                    <a href='https://t.me/ksenia459' target='_blank'>
                        <Image
                            className='contacts__social_link telegram'
                            src={telegram}
                            alt={''}
                        />
                    </a>
                    <a href='skype:live:ksunchik459?chat' target='_blank'>
                        <Image
                            className='contacts__social_link skype'
                            src={skype}
                            alt={''}
                        />
                    </a>
                    <a
                        href='https://www.instagram.com/morkoovochka/'
                        target='_blank'
                    >
                        <Image
                            className='contacts__social_link instagram'
                            src={instagram}
                            alt={''}
                        />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default HeroSection
