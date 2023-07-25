import Link from 'next/link'

const TurkishIntensivPrices = () => {
    return (
        <div className='prices'>
            <h2>Цены</h2>
            <div className='flex-price'>
                <section>
                    <h3>Тариф &quot;Самостоятельный&quot;</h3>
                    <p>Что включено:</p>
                    <ul>
                        <li>Видео-уроки</li>
                        <li>Онлайн задания на игровой платформе</li>
                        <li>Доп.материалы</li>
                        <li>Письменные задания</li>
                        <li>Проверка дз</li>
                        <li>Обратная связь</li>
                        <li>Сертификат после завершения интенсива</li>
                        <li className='flex-price__line-through'>
                            ДВА индивидуальных урока со мной по 40 минут
                        </li>
                        <li className='flex-price__line-through'>
                            Общий созвон с участниками тарифа
                        </li>
                    </ul>
                    <div className='flex-price__number'>Стоимость — 2490₽</div>
                    <Link
                        target='_blank'
                        className='flex-price__button'
                        href='https://t.me/ksenia459'
                    >
                        Записаться
                    </Link>
                </section>
                <section>
                    <h3>Тариф &quot;Я с тобой&quot;</h3>
                    <p>Что включено:</p>
                    <ul>
                        <li>Видео-уроки</li>
                        <li>Онлайн задания на игровой платформе</li>
                        <li>Доп.материалы</li>
                        <li>Письменные задания</li>
                        <li>Проверка дз</li>
                        <li>Обратная связь</li>
                        <li>Сертификат после завершения интенсива</li>
                        <li>ДВА индивидуальных урока со мной по 40 минут</li>
                        <li>Общий созвон с участниками тарифа</li>
                        <li>Скидка 10% на следующий уровень интенсива</li>
                    </ul>
                    <div className='flex-price__number'>Стоимость — 6490₽</div>
                    <Link
                        target='_blank'
                        className='flex-price__button'
                        href='https://t.me/ksenia459'
                    >
                        Записаться
                    </Link>
                </section>
            </div>
            <div className='prices__adv'>
                Классный бонус для всех участников: все материалы остаются у вас{' '}
                <b>навсегда!</b>
            </div>
        </div>
    )
}

export default TurkishIntensivPrices
