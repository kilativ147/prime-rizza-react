import s from './NavBar.module.scss'
import { NavLink } from 'react-router-dom'

const NavBar = ({ handleMenuState }) => {
	const handleClick = () => {
		handleMenuState(false)
	}
	return (
		<nav className={s.header__nav}>
			<NavLink to='/promotional' className={s.header__link} onClick={handleClick}>
				Акції
			</NavLink>
			<NavLink to='/delivery' className={s.header__link} onClick={handleClick}>
				Доставка
			</NavLink>
			<NavLink to='/about' className={s.header__link} onClick={handleClick}>
				Про нас
			</NavLink>
		</nav>
	)
}

export default NavBar
