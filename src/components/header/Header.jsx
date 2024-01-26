import s from './Header.module.css'
import NavBar from './components/NavBar'
import Logo from './components/Logo'
import Contacts from './components/Contacts'
import Burger from './components/Burger'
import { useState } from 'react'

const Header = () => {
	const [menuState, setMenuState] = useState(false)

	const handleMenuState = (newState = !menuState) => {
		document.body.style.overflow = newState ? 'hidden' : 'visible'
		setMenuState(newState)
	}

	let contentClassName = menuState ? `${s.header__content} ${s._active}` : s.header__content

	return (
		<header className={s.header}>
			<div className={s.header__container + ' ' +'header__container'} 
		// 	style={{
		// 		content: "''",
		// position: "absolute",
		// top: "0",
		// left: "0",
		// width: "100%",
		// height: "100%",
		// backgroundColor: "#262626",
		// 	}}
		>
				<div className={contentClassName}>
					<NavBar handleMenuState={handleMenuState} />
					<div></div>
					<Contacts />
				</div>
				<Logo handleMenuState={handleMenuState} />
				<Burger handleMenuState={handleMenuState} menuState={menuState} />
			</div>
		</header>
	)
}

export default Header
