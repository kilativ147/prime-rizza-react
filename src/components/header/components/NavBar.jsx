import s from './NavBar.module.css'
import Navlink from './Navlink'

const NavBar = () => {
	return (
		<nav class={s.header__nav}>
			<Navlink link={'/promotional'}>Акції</Navlink>
			<Navlink link={'/delivery'}>Доставка</Navlink>
			<Navlink link={'/about'}>Про нас</Navlink>
		</nav>
	)
}

export default NavBar
