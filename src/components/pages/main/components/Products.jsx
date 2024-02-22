import s from './Products.module.scss'

import { Outlet, NavLink } from 'react-router-dom'
// import {  } from 'react-router-dom'

const Products = () => {

	return (
		<article className={s.products}>
			<div className={s.products__category}>
				<NavLink to='/pizza' exact='true' className={s.products__category_button}>
					{/* exact = "true" should mark link as Active by default. It should match with path, but in this case it can't because of AutoScroll */}
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
				<Outlet  />
			</div>
		</article>
	)
}

export default Products
