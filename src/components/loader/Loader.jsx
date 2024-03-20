import s from './Loader.module.scss'
import imgPizza from '../../img/pages//loader/pizza-piece.webp'

const Loader = () => {
	return (
		
			<section className={s.loader}>
				<div className={s.loader__full}>
					<div className={s.loader__piece}>
						<img src={imgPizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={imgPizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={imgPizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={imgPizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={imgPizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={imgPizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={imgPizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={imgPizza} alt='' />
					</div>
				</div>
			</section>
		
	)
}

export default Loader
