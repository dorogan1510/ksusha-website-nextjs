import Link from 'next/link'

const TurkishButtonToMain = () => {
    return (
        <div className='button-to-main-container'>
            <Link className='button-to-main' href={'/'}>
                На главную
            </Link>
        </div>
    )
}

export default TurkishButtonToMain
