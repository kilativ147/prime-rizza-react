import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const Navlink = ({ link, children }) => {
	return (
		<NavLink
			to={link}
			className={({ isActive }) => (isActive ? s.header__link_active : s.header__link_active)}
		>
			{children}
		</NavLink>
	)
}

export default Navlink

