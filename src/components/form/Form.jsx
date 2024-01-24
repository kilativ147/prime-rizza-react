import s from './Form.module.css'
import ArrowImg from '../../img/svg/Form ArrowRight.svg'

const Form = () => {
	return (
		<article className={s.main__form}>
			<form action='' className={s.form}>
				<p className={s.form__title}>Заповніть форму і ми одразу зв'яжемось з Вами!</p>
				<div className={s.form__fields}>
					<input
						className={s.form__field}
						name='username'
						type='text'
						placeholder="Ваше ім'я"
						required
					/>
					<input
						className={s.form__field}
						name='userphone'
						type='number'
						placeholder='Номер телефону'
						required
					/>
					<button className={s.form__submit} type='submit'>
						<span>Чекаю дзвінка!</span>
						<div>
							<img src={ArrowImg} alt='' />
						</div>
					</button>
				</div>
			</form>
		</article>
	)
}

export default Form
