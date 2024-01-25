import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const Navlink = ({ link, children }) => {
	return (
		<NavLink
			to={link}
			className={s.header__link}
		>
			{children}
		</NavLink>
	)
}

export default Navlink

