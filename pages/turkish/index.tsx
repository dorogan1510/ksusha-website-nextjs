import TurkishBenefitsFromIntensiv from './turkishComponents/TurkishBenefitsFromIntensiv'
import TurkishButtonToMain from './turkishComponents/TurkishButtonToMain'
import TurkishIntensivPrices from './turkishComponents/TurkishIntensivPrices'
import TurkishReviews from './turkishComponents/TurkishReviews'

const index = () => {
    return (
        <div className='container'>
            <div className='turkish-intensiv'>
                <TurkishButtonToMain />
                <TurkishBenefitsFromIntensiv />
                <TurkishIntensivPrices />
                <TurkishReviews />
            </div>
        </div>
    )
}

export default index
