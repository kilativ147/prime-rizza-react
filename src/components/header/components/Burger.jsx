import s from './Burger.module.css'

const Burger = ({ handleMenuState,menuState }) => {
	const handleOpenMenu = () => {
		handleMenuState()
	}
const burgerClassName = menuState ? `${s.burger} ${s._active}` : s.burger
	return (
		<button className={burgerClassName} onClick={handleOpenMenu} type='button'>
			<span></span>
		</button>
	)
}

export default Burger