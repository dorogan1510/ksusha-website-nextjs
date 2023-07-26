import type { AppProps } from 'next/app'
import '../pages/turkish/turkishStyles/BenefitsFromIntensiv.scss'
import '../pages/turkish/turkishStyles/TurkishGlobal.scss'
import '../pages/turkish/turkishStyles/TurkishHeroSection.scss'
import '../pages/turkish/turkishStyles/TurkishPrices.scss'
import '../pages/turkish/turkishStyles/TurkishReviews.scss'
import '../pages/turkish/turkishStyles/TurkishButtonToMain.scss'
import '../styles/Chat.scss'
import '../styles/Header.scss'
import '../styles/HeroSection.scss'
import '../styles/MyServices.scss'
import '../styles/Reviews.scss'
import '../styles/globals.scss'

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
