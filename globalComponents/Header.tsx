'use client'

const Header = () => {
    function menuOnClick() {
        document.getElementById('menu-bar')!.classList.toggle('change')
        document.getElementById('menu-nav')!.classList.toggle('change')
        document.getElementById('menu-bg')!.classList.toggle('change-bg')
    }
    return (
        <header>
            <div className='container'>
                <nav className='nav'>
                    <a href='#id1'>Обо мне</a>
                    <a href='#id2'>Мои услуги</a>
                    <a href='#id3'>Перевод текста</a>
                    <a href='#id4'>Отзывы</a>
                </nav>
                <div id='menu'>
                    <div id='menu-bar' onClick={menuOnClick}>
                        <div id='bar1' className='bar'></div>
                        <div id='bar2' className='bar'></div>
                        <div id='bar3' className='bar'></div>
                    </div>
                    <div className='menu-nav' id='menu-nav'>
                        <ul>
                            <li>
                                <a href='#id1'>Обо мне</a>
                            </li>
                            <li>
                                <a href='#id2'>Мои услуги</a>
                            </li>
                            <li>
                                <a href='#id3'>Перевод текста</a>
                            </li>
                            <li>
                                <a href='#id4'>Отзывы</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='menu-bg' id='menu-bg'></div>
            </div>
        </header>
    )
}

export default Header
