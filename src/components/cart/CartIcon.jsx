import s from './CartIcon.module.scss'
import { IoIosCart } from "react-icons/io";

const cartIcon = () => {
	return (
		<aside className={s.cart}>
			<div className={s.cart__icon}>
        <IoIosCart/>
				{/* <img src={IoIosCart} alt="Корзина"> */}
			</div>
			<div className={s.cart__count}>88</div>
		</aside>
	)
}

export default cartIcon
