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
                        href='https://wa.me/79523715490?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%BE%D0%BC%D1%83%20%D1%8F%D0%B7%D1%8B%D0%BA%D1%83%20%D1%81%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%D0%BE%D0%BC%20%22%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%22.'
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
                    </ul>
                    <div className='flex-price__number'>Стоимость — 5490₽</div>
                    <Link
                        target='_blank'
                        className='flex-price__button'
                        href='https://wa.me/79523715490?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%BE%D0%BC%D1%83%20%D1%8F%D0%B7%D1%8B%D0%BA%D1%83%20%D1%81%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%D0%BE%D0%BC%20%22%D0%AF%20%D1%81%20%D1%82%D0%BE%D0%B1%D0%BE%D0%B9!%22.'
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
