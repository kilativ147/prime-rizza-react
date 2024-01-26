import s from './NavBar.module.css'
import Navlink from './Navlink'

const NavBar = ({ handleMenuState }) => {
	// let navClassName = menuState ? s.header__nav_active : s.header__nav
	return (
		<nav class={s.header__nav}>
			<Navlink link={'/promotional'} handleMenuState={handleMenuState}>
				Акції
			</Navlink>
			<Navlink link={'/delivery'} handleMenuState={handleMenuState}>
				Доставка
			</Navlink>
			<Navlink link={'/about'} handleMenuState={handleMenuState}>
				Про нас
			</Navlink>
		</nav>
	)
}

export default NavBar
