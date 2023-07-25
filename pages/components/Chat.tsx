import { useEffect, useState } from 'react'
const Chat = () => {
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const scrollByElementLeft = document.querySelectorAll('.about-left')
        const scrollByElementRight = document.querySelectorAll('.about-right')
        const cycleForAbout = (event: NodeListOf<Element>) => {
            for (var i = 0; i < event.length; i++) {
                const windowHeight = window.innerHeight
                const elementTop = event[i].getBoundingClientRect().top
                const elementVisible = 150

                if (elementTop < windowHeight - elementVisible) {
                    event[i].classList.add('__active')
                } else {
                    event[i].classList.remove('__active')
                }
            }
        }

        cycleForAbout(scrollByElementLeft)
        cycleForAbout(scrollByElementRight)
    })

    return (
        <div className='about' id='id1'>
            <div>
                <div className='bubble-left about-left'>
                    А какой у тебя опыт преподавания?
                </div>
                <br />
                <div className='bubble-right about-right'>
                    Я преподаю языки с 2017 года, обучила более 80 учеников.
                </div>
                <br />
                <div className='bubble-left about-left'>
                    А у тебя есть какое-то образование?
                </div>
                <div className='bubble-right about-right'>
                    Я закончила Санкт-Петербургский государственный университет,
                    Восточный факультет.
                </div>
                <div className='bubble-left about-left'>
                    А что мы будем делать на уроках?
                </div>
                <div className='bubble-right about-right'>
                    На своих уроках я даю грамматическую базу языка, разговорную
                    практику и практику чтения и перевода. Также мы смотрим и
                    разбираем видео, отрывки из фильмов, слушаем ваши любимые
                    песни.
                </div>
                <div className='bubble-left about-left'>
                    У всех учеников одна программа или у тебя индивидуальный
                    подход?
                </div>
                <div className='bubble-right about-right'>
                    Для каждого ученика разрабатывается индивидуальная программа
                    в соответствии с целями.
                </div>
                <div className='bubble-left about-left'>
                    А какие языки ты преподаешь?
                </div>
                <div className='bubble-right about-right'>
                    Работаю с четырьмя языками (английский, французский,
                    арабский, турецкий) и буду рада помочь вам шаг за шагом
                    осуществить свою мечту заговорить на любом из них!
                </div>
                <div className='bubble-left about-left'>
                    Интересно, а сколько стоит твой урок?
                </div>
                <div className='bubble-right about-right'>
                    Все цены и услуги можно посмотреть ниже 👇
                </div>
            </div>
        </div>
    )
}

export default Chat
