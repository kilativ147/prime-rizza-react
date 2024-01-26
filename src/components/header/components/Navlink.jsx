import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'


const Navlink = ({ link, children, handleMenuState }) => {
	const handleClick = () => {
		handleMenuState(false)
	}
	return (
		<NavLink to={link} className={s.header__link} onClick={handleClick}>
			{children}
		</NavLink>
	)
}

export default Navlink

