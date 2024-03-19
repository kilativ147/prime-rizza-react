import s from './Logo.module.scss'
import imgLogo from '../../../img/Logo.webp'
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
		<NavLink to={'/'} className={classVar[classComponent]} onClick={handleClick}>
			<img src={imgLogo} alt='' />
		</NavLink>
	)
}

export default Logo
