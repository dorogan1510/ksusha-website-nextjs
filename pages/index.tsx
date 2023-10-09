import type { NextPage } from 'next'
import Head from 'next/head'
import Chat from '../components/Chat'
import Chat2 from '../components/Chat2'
import HeroSection from '../components/HeroSection'
import MyServices from '../components/MyServices'
import Reviews from '../components/Reviews'
import BenefitsFromIntensiv from '../components/TurkishIntensiv/BenefitsFromIntensiv'
import TurkishIntensivPrices from '../components/TurkishIntensiv/TurkishIntensivPrices'
import Header from '../globalComponents/Header'
import Chat3 from '../components/Chat3'
import TranslationsWork from '../components/TranslationsWork'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Ксения Сухарева — Преподаватель иностранных языков.
                </title>
                <meta
                    name='description'
                    content='Ксения Сухарева. Со мной можно выучить английский, турецкий, французский и арабский языки. Также у меня можно пройти онлайн интенсив по турецкому языку и с нуля начать говорить на турецком.'
                />
                <meta
                    name='keywords'
                    content='english language, french language, arabic language, turkish language, английский язык, турецкий язык, арабский язык, французский язык, онлайн курс по турецкому языку, интенсив по турецкому, выучить английский, выучить вранцузский, выучить арабский, выучить турецкий, morkoovochka, преподаватель английского, английский для начинающих, турецкий для начинающих, арабский для начинающих, французский для начинающих'
                />
                <meta name='author' content='Ksenia Sukhareva' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='page'>
                <Header />
                <div className='container'>
                    <HeroSection />
                    <BenefitsFromIntensiv />
                    <TurkishIntensivPrices />
                    <Chat />
                    <MyServices />
                    <Chat2 />
                    <TranslationsWork />
                    <Chat3 />
                    <Reviews />
                </div>
            </div>
        </>
    )
}

export default Home
