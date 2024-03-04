import s from './Logo.module.scss'
import imgLogo from '../../../img/Logo.png'
import { NavLink } from 'react-router-dom'

const Logo = ({ handleMenuState }) => {
	const handleClick = () => {
		handleMenuState(false)
	}
	return (
		<NavLink to={'/'} className={s.header__logo} onClick={handleClick}>
			<img src={imgLogo} alt='' />
		</NavLink>
	)
}

export default Logo
