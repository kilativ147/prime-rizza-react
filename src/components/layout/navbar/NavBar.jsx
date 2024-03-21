import s from './NavBar.module.scss'
import { NavLink } from 'react-router-dom'

const NavBar = ({ handleMenuState, classComponent }) => {
	const handleClick = () => {
		if (classComponent === 'header') handleMenuState(false)
	}

	const classVar = {
		'header': `${s.nav} ${s.nav__header}`,
		'footer': `${s.nav} ${s.nav__footer}`,
	}
	return (
		<nav className={classVar[classComponent]}>
			<NavLink
				role='link'
				aria-label='Посидання на сторінку "Акції"'
				to='/promotionals'
				className={`${classVar[classComponent]} ${s.link}`}
				onClick={handleClick}
			>
				Акції
			</NavLink>
			<NavLink
				role='link'
				aria-label='Посидання на сторінку "Доставка'
				to='/delivery'
				className={`${classVar[classComponent]} ${s.link}`}
				onClick={handleClick}
			>
				Доставка
			</NavLink>
			<NavLink
				role='link'
				aria-label='Посидання на сторінку "Про нас"'
				to='/about'
				className={`${classVar[classComponent]} ${s.link}`}
				onClick={handleClick}
			>
				Про нас
			</NavLink>
		</nav>
	)
}

export default NavBar
