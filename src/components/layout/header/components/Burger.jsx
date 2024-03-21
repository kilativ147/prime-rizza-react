import s from './Burger.module.scss'

const Burger = ({ handleMenuState,menuState }) => {
	const handleOpenMenu = () => {
		handleMenuState()
	}
const burgerClassName = menuState ? `${s.burger} ${s._active}` : s.burger
	return (
		<button
			role='button'
			aria-label='Відкриття бургер-меню'
			className={burgerClassName}
			onClick={handleOpenMenu}
			type='button'
		>
			<span></span>
		</button>
	)
}

export default Burger
