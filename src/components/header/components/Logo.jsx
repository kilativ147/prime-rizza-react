//import s from './Logo.module.css'
import LogoImg from '../../../img/Logo.png'

const Logo = () => {
  return (
		<a href='#' class='header__logo'>
			<img src={LogoImg} alt='Prime Pizza' />
		</a>
	)
}

export default Logo