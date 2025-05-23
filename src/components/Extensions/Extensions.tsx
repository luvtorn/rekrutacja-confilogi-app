import Card from '../ui/Card/Card'
import styles from './Extensions.module.scss'

const Extensions = () => {
	return (
		<section className={styles.extensions}>
			<div className={styles.extensions__text}>
				<h1>Download the extension</h1>
				<p>
					We've got more browsers in the pipeline. Please do let us know if
					you've got a favourite you'd like us to prioritize.
				</p>
			</div>

			<div className={styles.cards}>
				<Card icon='/images/logo-chrome.svg' name='Chrome' version='63' />
				<Card
					icon='/images/logo-firefox.svg'
					className='40px'
					name='Firefox'
					version='55'
				/>
				<Card
					icon='/images/logo-opera.svg'
					className='80px'
					name='Opera'
					version='46'
				/>
			</div>
		</section>
	)
}

export default Extensions
