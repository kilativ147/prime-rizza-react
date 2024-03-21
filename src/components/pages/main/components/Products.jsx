import s from './Products.module.scss'
import { Outlet, NavLink } from 'react-router-dom'

const Products = () => {

	return (
		<article className={s.products}>
			<div className={s.products__category}>
				<NavLink
					role='link'
					aria-label='Обрати категорію - Піца'
					to='/pizza'
					exact='true'
					className={s.products__category_button}
				>
					{/* exact = "true" should mark link as Active by default. It should match with path, but in this case it can't because of AutoScroll */}
					Піца
				</NavLink>
				<NavLink role='link' aria-label='Обрати категорію - Салати' to='/salad' className={s.products__category_button}>
					Салати
				</NavLink>
				<NavLink role='link' aria-label='Обрати категорію - Напої' to='/drinks' className={s.products__category_button}>
					Напої
				</NavLink>
				<NavLink role='link' aria-label='Обрати категорію - Інше' to='/other' className={s.products__category_button}>
					Інше
				</NavLink>
			</div>

			<ul className={s.products__items}>
				<Outlet />
			</ul>
		</article>
	)
}

export default Products
