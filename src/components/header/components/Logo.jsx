//import s from './Logo.module.css'
import imgLogo from '../../../img/Logo.png'
import { NavLink } from 'react-router-dom'

const Logo = () => {
	return (
		<NavLink to={'/'}>
			<img src={imgLogo} alt='' />
		</NavLink>
	)
}

export default Logo
