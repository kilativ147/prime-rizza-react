import s from './Galery.module.scss'
import img1 from '../../../../img/pages//main/GalleryInst1.png'
import img2 from '../../../../img/pages//main/GalleryInst2.png'
import img3 from '../../../../img/pages//main/GalleryInst3.png'
import img4 from '../../../../img/pages//main/GalleryInst4.png'
import img5 from '../../../../img/pages//main/GalleryInst5.png'
import img6 from '../../../../img/pages//main/GalleryInst6.png'

const Galery = () => {
	const items = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6]

	const imgList = items.map((item) => (
		<div className={s.gallery__back_img}>
			<img src={item} alt='gallery5' />
		</div>
	))

	return (
		<article className={s.gallery}>
			<div className={s.gallery__content}>
				<div className={s.gallery__back}>
					<div className={s.gallery__back_flex}>{imgList}</div>
				</div>
				<div className={s.label}>
					<div className={s.label__border}>
						<div className={s.label__content}>
							<div>
								<img src='img/icons/Instagram_White.svg' alt='' />
							</div>
							<a href='http://instagram.com'>@primepizza.if</a>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Galery
