import banner from '../../assets/img/banner.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='Banner'>
        <img className='img-banner' src={banner} alt="" />
    </div>
  )
}

export default Banner