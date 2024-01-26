import s from './Greatings.module.css'
import imgBackground from '../../../../img/pages/main/Greatings.png'
import imgPizza from '../../../../img/pages/main/GreatingsPizza.png'

const Greatings = () => {
  return (
		<article className={s.greatings}>
			<div className={s.greatings__back}>
				<img src={imgBackground} alt='' />
			</div>
			<div className={s.greatings__container}>
				<div className={s.greatings__content_flex}>
					<div className={s.greatings__text}>
						<h2>Скуштуй шматочок піци, а потім ще, і ще, і ще... </h2>
						<p>поринь у насолоду з новинкою "Гостріше Гострого"! </p>
					</div>
					<div className={s.greatings__pizza}>
						<img src={imgPizza} alt='' />
					</div>
				</div>
			</div>
		</article>
	)
}

export default Greatings