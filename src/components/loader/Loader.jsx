import s from './Loader.module.scss'
import pizza from '../../img/pages//loader/pizza-piece.png'

const Loader = ({ loader }) => {
	return (
		loader && (
			<section className={s.loader}>
				<div className={s.loader__full}>
					<div className={s.loader__piece}>
						<img src={pizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={pizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={pizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={pizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={pizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={pizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={pizza} alt='' />
					</div>
					<div className={s.loader__piece}>
						<img src={pizza} alt='' />
					</div>
				</div>
			</section>
		)
	)
}

export default Loader
