import Image from 'next/image'
import { useEffect, useState } from 'react'

import telegram1 from '../public/img/telegram1.svg'

const MyServices = () => {
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const individualSessions = document.querySelectorAll(
            '.individual-sessions'
        )
        const consultationForRepetitors = document.querySelectorAll(
            '.consultation-for-repetitors'
        )

        const consultationForSpecificRequests = document.querySelectorAll(
            '.consultation-for-specific-requests'
        )
        const telegramWithHelpfulInformation = document.querySelectorAll(
            '.telegram-with-helpful-information'
        )
        const checklistForCardGames = document.querySelectorAll(
            '.checklist-for-card-games'
        )
        const checklistWithUsefulStuff = document.querySelectorAll(
            '.checklist-with-useful-stuff'
        )
        const telegramWithTextbooksAndMaterilas = document.querySelectorAll(
            '.telegram-with-textbooks-and-materials'
        )
        const offlineLessons = document.querySelectorAll('.offline-lessons')

        const cycleForServices = (event: NodeListOf<Element>) => {
            for (var i = 0; i < event.length; i++) {
                const windowHeight = window.innerHeight
                const elementTop = event[i].getBoundingClientRect().top
                const elementVisible = 150

                if (elementTop < windowHeight - elementVisible) {
                    event[i].classList.add('__animations')
                }
            }
        }

        cycleForServices(individualSessions)
        cycleForServices(consultationForRepetitors)
        cycleForServices(consultationForSpecificRequests)
        cycleForServices(telegramWithHelpfulInformation)
        cycleForServices(checklistForCardGames)
        cycleForServices(checklistWithUsefulStuff)
        cycleForServices(telegramWithTextbooksAndMaterilas)
        cycleForServices(offlineLessons)
    })

    return (
        <div className='services' id='id2'>
            <section className='section individual-sessions'>
                <h2>Индивидуальные занятия</h2>
                <div className='individual-sessions__flex-container'>
                    <p>
                        Формат обучения — только онлайн
                        <br />
                        60 минут — 2000₽
                        <br />
                        90 минут — 3000₽
                        <br />
                        <br />
                        Оплату также можно произвести в любой удобной для вас
                        валюте по текущему курсу
                    </p>
                    <div className='rightside'>
                        <h3>Доступные для изучения языки:</h3>
                        <ul>
                            <li>Английский</li>
                            <li>Французский</li>
                            <li>Арабский</li>
                            <li>Турецкий</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='first-flex-main-section'>
                <section className='section consultation-for-repetitors'>
                    <h2>Консультация для преподавателей</h2>
                    <p>
                        Длительность — 2 часа <br />
                        Стоимость — 3000₽
                        <br />
                        <br />
                        Бонусом вы получите конспект всей консультации и чек
                        лист, в котором собраны и проанализированы самые
                        актуальные материалы, которые вы сможете использовать в
                        своих занятиях.
                        <br />
                        <br />
                        На консультации мы разберем все актуальные вопросы,
                        которые могут возникнуть у вас в начале пути. Подробный
                        план можно посмотреть в закрепленной сторис
                        `&quot;`Консультации`&quot;` в инстаграме.
                    </p>
                </section>
                <div className='first-flex-main-section__right-side'>
                    <section className='section consultation-for-specific-requests'>
                        <h2>Консультация по конкретным запросам</h2>
                        <p>
                            Длительность 1 ч. — Стоимость 1500₽
                            <br />
                            Мы разберем ваши вопросы и рассмотрим конкретные
                            ситуации во время процесса работы.
                        </p>
                    </section>

                    <section className='section telegram-with-helpful-information'>
                        <div className='telegram-with-helpful-information__flex-container'>
                            <h2>Телеграм канал с полезной информацией</h2>
                            <a
                                target='_blank'
                                href='https://t.me/morkoovochka'
                                className='telegram-with-helpful-information__button'
                            >
                                <Image
                                    src={telegram1}
                                    alt={''}
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </a>
                        </div>
                        <p>
                            Кликай и вступай, стоимость — бесплатно.
                            <br />
                            Здесь вы можете найти множество текстовых, аудио,
                            видео материалов и многое другое.
                        </p>
                    </section>
                </div>
            </div>
            {/* <!-- End of first flex-main-section --> */}

            <div className='second-main-flex-section'>
                <div className='second-main-flex-section_left-side'>
                    <section className='section checklist-for-card-games'>
                        <div className='checklist-for-card-games__flex-container'>
                            <h2>Чек лист по играм с карточками</h2>
                            <a
                                target='_blank'
                                className='checklist-for-card-games__button'
                                href='https://drive.google.com/file/u/2/d/1JkaEE_4DATLcXFmFTTDSc84fKYmrNYvR/view?usp=sharing'
                            >
                                Чек лист
                            </a>
                            <p>Кликай, скачивай и пользуйся</p>
                        </div>
                        <p>Стоимость — бесплатно</p>
                    </section>

                    <section className='section checklist-with-useful-stuff'>
                        <h2>Чек лист с полезными материалами</h2>
                        <div className='checklist-with-useful-stuff__flex-container'>
                            <p>
                                Стоимость — 500₽. Чтобы приобрести чек лист
                                напишите мне в личные сообщения. В нем собраны
                                самые актуальные и современные учебники, пособия
                                и другие дополнительные материалы.
                            </p>
                        </div>
                    </section>
                </div>

                <section className='section telegram-with-textbooks-and-materials'>
                    <h2>
                        Телеграм канал с учебниками и материалами для занятий
                    </h2>

                    <p>
                        Доступ в канал — навсегда <br />
                        Стоимость — 700₽
                        <br />
                        Чтобы получить ссылку на канал напишите мне в личные
                        сообщения. <br />
                        <br />
                        Здесь находятся множество популярных учебников и книг на
                        английском и французском языках, а также мои авторские
                        уроки, которые вы сможете применить в своей работе.
                        Примеры учебников на канале (English file; Go Getter;
                        Impact; Speakout; Kidsbox; Oxford phonics)
                    </p>
                </section>
            </div>

            <section className='section offline-lessons'>
                <h2>Оффлайн уроки</h2>

                <p>
                    Стоимость: 1000 руб/урок <br />
                    Этот формат урока подходит самым занятым и тем, у кого
                    бывает плохой интернет! <br />
                    <br />
                    Суть формата: мы созваниваемся, определяем ваши цели,
                    уровень языка, сроки. Исходя из этого я прописываю
                    индивидуальную программу и подбираю материалы конкретно под
                    ваш запрос. <br />
                    <br />
                    Преимущество: вам не нужно подбирать день для онлайн встреч.
                    Все задания вы выполняете самостоятельно, затем отправляете
                    мне на проверку. <br />
                    <br />
                    Доступные языки: английский, французский, турецкий.
                </p>
            </section>
            {/* <!-- End of second main-flex-section --> */}
        </div>
    )
}

export default MyServices
