import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/Header.scss'
import '../styles/HeroSection.scss'
import '../styles/Chat.scss'
import '../styles/MyServices.scss'
import '../styles/Reviews.scss'
import '../styles/TurkishIntensiv/BenefitsFromIntensiv.scss'
import '../styles/TurkishIntensiv/Prices.scss'
import '../styles/TurkishIntensiv/TurkishHeroSection.scss'

import { Raleway } from '@next/font/google'

const raleway = Raleway({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={raleway.className}>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
