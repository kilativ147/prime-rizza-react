import s from './Hero.module.scss'
import imgBackground from '../../../../img/pages/main/Hero.png'
import imgPizza from '../../../../img/pages/main/HeroPizza.png'

const Hero = () => {
  return (
		<article className={s.hero}>
			<div className={s.hero__back}>
				<img src={imgBackground} alt='' />
			</div>
			<div className={s.hero__container}>
				<div className={s.hero__content_flex}>
					<div className={s.hero__text}>
						<h2>Скуштуй шматочок піци, а потім ще, і ще, і ще... </h2>
						<p>поринь у насолоду з новинкою "Гостріше Гострого"! </p>
					</div>
					<div className={s.hero__pizza}>
						<img src={imgPizza} alt='' />
					</div>
				</div>
			</div>
		</article>
	)
}

export default Hero