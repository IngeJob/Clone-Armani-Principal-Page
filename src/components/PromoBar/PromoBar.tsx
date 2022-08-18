import './PromoBar.css';

const PromoBar = () => {
  return (
    <div className='promoBar__container'>
        <div className='promoBar__wrapper'>
            <div className='slide-1'><a href='/'>Our Services: Discover them all</a></div>
            <div className='slide-2'><a href='/'>Log in to your account to get free standard shipping</a></div>
        </div>
    </div>
  )
}

export default PromoBar