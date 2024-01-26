//import s from './Products.module.css'

const Products = () => {
  return (
		<article className='products'>
			<div className='products__category'>
				<a className='products__category-button _activeButton'>Піца</a>
				<a className='products__category-button'>Салат</a>
				<a className='products__category-button'>Напої</a>
				<a className='products__category-button'>Інше</a>
			</div>
			<div className='products__list animation-show'>
				<div id='pizza' className='product__body '>
					<div className='product__items-grid' />
				</div>
				<div id='salad' className='product__body '>
					<div className='product__items-grid' />
				</div>
				<div id='drinks' className='product__body '>
					<div className='product__items-grid' />
				</div>
				<div id='other' className='product__body '>
					<div className='product__items-grid' />
				</div>
			</div>
		</article>
	)
}

export default Products