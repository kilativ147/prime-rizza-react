import s from './AboutContent.module.css'
import AboutContentItem from './AboutContentItem'
import img1 from '../../../../img/pages/about/1.png'
import img2 from '../../../../img/pages/about/2.png'
import img3 from '../../../../img/pages/about/3.png'
import img4 from '../../../../img/pages/about/4.png'



const AboutContent = () => {
	const items = [
		{
			img: img1,
			title: 'Молода та амбіційна команда',
			text: 'Молода та амбіційна піцерія з досвідом приготування піци більше як три роки. З кождним днем ми вдосконалюємося, щоб заполонити серця голодних людей. При думці "хочу поїсти" нагадувалось Prime..... місце де швидко, смачно, тепло та багато приємних спогадів....',
		},
		{
			img: img2,
			title: 'Піцца від якої хочеться жити',
			text: 'Ми використовуємо свіжі і якісні інгредієнти, щоб смакувало завжди по особливому, ніжна моцарелла, основа на ваш вибір, смакують бездоганно. Prime дбає про своїх гостей і вижимає максимум з кожного продукту. Якщо ви шукаєте місце де не просто	“перекусити”, а отримати насолоду, замовляйте доставку або приходьте в гості. Раді вас бачити, нагодувати і зігріти в такий нелегкий для всіх час',
		},
		{
			img: img3,
			title: 'Швидко та смачно',
			text: 'Prime продумано налаштувала ефективне приготування страв, щоб це було максимально швидко та смачно. Prime - цінує ваш дорогоцінний час і пропонує надшвидке приготування, якщо ви ще сумніваєтесь ми готові розвіяти сумніви. Замовляйте доставку і засікайте час',
		},
		{
			img: img4,
			title: 'Особливий рецепт',
			text: 'Особливий рецепт приготування - любов. Що може бути кращим? Prime - має унікальний рецепт приготування, в який входить секретний інгредієнт про який не знає ніхто! Секретний інгредієнт - секретний і його можна тільки скуштувати, хочеш дізнатися секрет, замовляй доставку піци і дізнавайся за смаком',
		},
	]

	const ContentItems = () => {
		return items.map((item) => <AboutContentItem img={item.img} title={item.title} text={item.text}/>)
	}

	return (
		<section className={s.about__container}>
			<div className={s.about__content_flex}>
				<ContentItems/>
				
				
			</div>
		</section>
	)
}

export default AboutContent