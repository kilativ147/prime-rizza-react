import s from './AboutMap.module.css'

const AboutMap = () => {
	return (
		<section className='about__map map animation-bottom'>
			<div className='map__container'>
				<div className='map__content'>
					<div className='map__logo'>
						<img src='img/icons/Logo.png' alt='Logo' />
					</div>
					<address className='map__contacts-flex'>
						<div className='map__contacts-item'>
							<div>
								<img src='img/icons/footer_address.svg' alt='address' />
							</div>
							<p>вул. Європейська площа 3</p>
						</div>
						<div className='map__contacts-item'>
							<div>
								<img src='img/icons/footer_mail.svg' alt='mail' />
							</div>
							<a href='mailto:primepizza@gmail.com'>primepizza@gmail.com</a>
						</div>
						<div className='map__contacts-item'>
							<div>
								<img src='img/icons/footer_phone.svg' alt='phone' />
							</div>
							<a href='tel:+380952081079'>+38 (095) 208 10 79</a>
						</div>
						<div className='map__contacts-item'>
							<div>
								<img src='img/icons/header_time.svg' alt='time' />
							</div>
							<p>Кожного дня 10:00 - 22:00</p>
						</div>
					</address>
				</div>
			</div>
		</section>
	)
}

export default AboutMap
