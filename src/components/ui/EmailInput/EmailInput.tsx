import { useState } from 'react'
import styles from './EmailInput.module.scss'
import { PiWarningCircleFill } from 'react-icons/pi'

const EmailInput = () => {
	const [email, setEmail] = useState('')
	const [error, setError] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
		setError(false)
	}

	const handleBlur = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		setError(!emailRegex.test(email))
	}

	return (
		<div className={styles.wrapper}>
			<div className={`${styles.inputContainer} ${error ? styles.error : ''}`}>
				<input
					type='email'
					value={email}
					onChange={handleChange}
					onBlur={handleBlur}
					placeholder='example@email/com'
					className={styles.input}
				/>
				{error && <PiWarningCircleFill className={styles.icon} />}
			</div>
			{error && (
				<p className={styles.errorText}>Whoops, make sure it’s an email</p>
			)}
		</div>
	)
}

export default EmailInput
