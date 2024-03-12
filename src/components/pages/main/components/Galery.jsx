import s from './Galery.module.scss'
import img1 from '../../../../img/pages//main/GalleryInst1.webp'
import img2 from '../../../../img/pages//main/GalleryInst2.webp'
import img3 from '../../../../img/pages//main/GalleryInst3.webp'
import img4 from '../../../../img/pages//main/GalleryInst4.webp'
import img5 from '../../../../img/pages//main/GalleryInst5.webp'
import img6 from '../../../../img/pages//main/GalleryInst6.webp'
import imgInst from '../../../../img/svg/InstagramWhite.svg'

const Galery = () => {
	const items = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6]

	const imgList = items.map((item, index) => (
		<div key={index} className={s.gallery__back_img}>
			<img src={item} alt='' />
		</div>
	))

	return (
		<article className={s.gallery}>
			<div className={s.gallery__content}>
				<div className={s.gallery__back}>
					<div className={s.gallery__back_flex}>{imgList}</div>
				</div>
				<div className={s.label}>
					<a href='http://instagram.com' target='_blank'>
						<img src={imgInst} alt='' />
						@primepizza
					</a>
				</div>
			</div>
		</article>
	)
}

export default Galery
