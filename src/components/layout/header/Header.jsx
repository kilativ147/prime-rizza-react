import s from './Header.module.scss'
import { useState } from 'react'

import NavBar from '../navbar/NavBar'
import Logo from '../logo/Logo'
import Contacts from './components/Contacts'
import Burger from './components/Burger'

const Header = () => {
	const [menuState, setMenuState] = useState(false)

	const handleMenuState = (newState = !menuState) => {
		document.body.classList = newState ? '_lock' : ''
		setMenuState(newState)
	}

	let contentClassName = menuState ? `${s.header__content} ${s._active}` : s.header__content

	return (
		<header className={s.header}>
			<div className={s.header__container}>
				<div className={contentClassName}>
					<NavBar handleMenuState={handleMenuState} classComponent='header'/>
					<div></div>
					<Contacts />
				</div>
				<Logo handleMenuState={handleMenuState} classComponent='header' />
				<Burger handleMenuState={handleMenuState} menuState={menuState} />
			</div>
		</header>
	)
}

export default Header
