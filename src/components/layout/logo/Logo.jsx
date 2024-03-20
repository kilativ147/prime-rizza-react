import s from './Logo.module.scss'
import { NavLink } from 'react-router-dom'

const Logo = ({ handleMenuState, classComponent }) => {
	const handleClick = () => {
		if (classComponent === 'header') handleMenuState(false)
	}
	const classVar = {
		'header': `${s.logo} ${s.logo__header}`,
		'footer': `${s.logo} ${s.logo__footer}`,
	}
	return (
		<NavLink to={'/'} className={classVar[classComponent]} onClick={handleClick}></NavLink>
	)
}

export default Logo
