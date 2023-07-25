import BenefitsFromIntensiv from './turkishComponents/BenefitsFromIntensiv'
import TurkishIntensivPrices from './turkishComponents/TurkishIntensivPrices'
import TurkishReviews from './turkishComponents/TurkishReviews'

const index = () => {
    return (
        <div className='container'>
            <div className='turkish-intensiv'>
                <BenefitsFromIntensiv />
                <TurkishIntensivPrices />
                <TurkishReviews />
            </div>
        </div>
    )
}

export default index
