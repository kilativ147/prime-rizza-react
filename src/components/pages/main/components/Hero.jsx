import s from './Hero.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Hero = () => {
  return (
		<article className={s.hero}>
			<div className={s.hero__back}>
				<LazyLoadImage
					src='/img/mainPage/Hero.webp'
					placeholderSrc='/img/mainPage/Hero-small.webp'
					effect='blur'
					alt={'Hero image'}
				/>
			</div>
			<div className={s.hero__container}>
				<div className={s.hero__content_flex}>
					<div className={s.hero__text}>
						<h2>Скуштуй шматочок піци, а потім ще, і ще, і ще... </h2>
						<p>поринь у насолоду з новинкою "Гостріше Гострого"! </p>
					</div>
					<div className={s.hero__pizza}>
						<LazyLoadImage
							src='/img/mainPage/HeroPizza.webp'
							placeholderSrc='/img/mainPage/HeroPizza-small.webp'
							effect='blur'
							alt={'Hero image'}
						/>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Hero