import React from 'react'

const TranslationsWork = () => {
    return (
        <div className='services'>
            <section className='section translations'>
                <h2>Перевод текста</h2>
                <h3>Стоимость 1 страницы перевода (1800 знаков) – 7$</h3>
                <p>
                    Оплачивать можно на российские карты: Сбербанк, Тинькофф.{' '}
                    <br /> На иностранные карты: Bank of Georgia, Freedom
                    Finance, Kaspi kz, Bangkok Bank
                </p>

                <h3>Направления переводов:</h3>
                <ul>
                    <li>Технический перевод</li>
                    <li>Художественный перевод (книги, эссе, статьи)</li>
                    <li>Научные статьи</li>
                    <li>Учебные пособия</li>
                    <li>Косметические процедуры, перманентный макияж</li>
                    <li>Медицинская тематика</li>
                </ul>
                <h3>Примеры переводов:</h3>
                <a
                    target='_blank'
                    className='translations__button'
                    href='https://docs.google.com/document/d/1C7nflx6xpjt4gBsRa2sgfqyYanyGAwIvZRUi0FySUmw/edit'
                >
                    Пример 1
                </a>
                <a
                    target='_blank'
                    className='translations__button'
                    href='https://docs.google.com/document/d/1--Q-mSN3NgB0CioiE5wfg-8_-YWAF3OGmuQBUDh2Wbs/edit'
                >
                    Пример 2
                </a>
                <a
                    target='_blank'
                    className='translations__button'
                    href='https://docs.google.com/document/d/17sKOV0bVpl0h7HvqxOfvdwHG1qzm37rlc7LI2chazDw/edit'
                >
                    Пример 3
                </a>
            </section>
        </div>
    )
}

export default TranslationsWork
