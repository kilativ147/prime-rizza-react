import LogoImg from '../../img/Logo.png'
import s from './Header.module.css'
import NavBar from './components/NavBar'
import Logo from './components/Logo'
import Contacts from './components/Contacts'
import Burger from './components/Burger'

const Header = () => {
	return (
		<header className={s.header}>
			<div className='header__container'>
				<div className={s.header__content}>
					<NavBar />
					<div></div>
					<Contacts />
				</div>
				<Logo />
				<Burger />
			</div>
		</header>
	)
}

export default Header
