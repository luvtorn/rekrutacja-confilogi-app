import Button from '../ui/Button/Button'
import styles from './Contact.module.scss'
import EmailInput from '../ui/EmailInput/EmailInput'
import JoinCounter from '../ui/JoinCounter'

const Contact = () => {
	return (
		<section className={styles.contact}>
			<JoinCounter />
			<h1 className={styles.contact__title}>
				Stay up-to-date with what we're doing
			</h1>

			<div className={styles.contact__form}>
				<EmailInput />
				<Button variant='red-outline' className={styles.contact__button}>
					Contact Us
				</Button>
			</div>
		</section>
	)
}

export default Contact
