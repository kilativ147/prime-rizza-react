import LogoImg from '../../img/Logo.png'
import s from './Header.css'
import NavBar from './components/NavBar'
import Logo from './components/Logo'
import Contacts from './components/Contacts'

const Header = () => {
	return (
		<header class='header'>
			<div class='header__container'>
				{/* <a href='#' class='header__logo-mob'>
					<img src={LogoImg} alt="Prime Pizza"/>
				</a> */}
				<div onclick='inizializeBurger()' class='header__burger'>
					<span></span>
				</div>
				<div class='header__content'>
					<NavBar/>
					<Logo/>
					<Contacts/>
				</div>
			</div>
		</header>
	)
}

export default Header
