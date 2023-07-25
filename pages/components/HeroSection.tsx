import { useEffect } from 'react'

import Image from 'next/image'
import heroImage from '../../public/img/bg1.jpg'
import instagram from '../../public/img/instagram.svg'
import skype from '../../public/img/skype.svg'
import telegram from '../../public/img/telegram.svg'
import vk from '../../public/img/vk.svg'
import whatsapp from '../../public/img/whatsapp.svg'

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

            <a className='btn' type='button' href='/turkish'>
                Об интенсиве по турецкому
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
