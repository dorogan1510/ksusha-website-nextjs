const TurkishHeroSection = () => {
    return (
        <div className='start-block'>
            <h1>Курс по английскому языку для начинающих</h1>
            <p className='start-block__p'>
                Для тех, кто мечтал начать учить английский, но так и не решился
            </p>
            <div className='start-block__flex'>
                <a id='first-button' href='#id1'>
                    Бесплатный модуль
                </a>
                <a id='second-button' href='#id2'>
                    Начать сейчас
                </a>
            </div>

            <div className='start-block__info'>
                <div className='start-block__info-left'>
                    <p className='start-block__info-left1'>Старт курса:</p>
                    <p className='start-block__info-left2'>В процессе</p>
                </div>
                <div className='start-block__info-right'>
                    <p className='start-block__info-right1'>Длительность</p>
                    <p className='start-block__info-right2'>6 недель</p>
                </div>
            </div>
        </div>
    )
}

export default TurkishHeroSection
