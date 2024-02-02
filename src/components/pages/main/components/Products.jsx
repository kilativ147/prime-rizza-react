import s from './Products.module.scss'

import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Products = () => {
	return (
		<article className={s.products}>
			<div className={s.products__category}>
				<NavLink to='/' exact className={s.products__category_button}>
					Піца
				</NavLink>
				<NavLink to='/salad' className={s.products__category_button}>
					Салати
				</NavLink>
				<NavLink to='/drinks' className={s.products__category_button}>
					Напої
				</NavLink>
				<NavLink to='/other' className={s.products__category_button}>
					Інше
				</NavLink>
			</div>

			<div className={s.products__items}>
				<Outlet />
			</div>
		</article>
	)
}

export default Products
