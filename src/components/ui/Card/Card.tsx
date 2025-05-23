import styles from './Card.module.scss'
import Button from '../Button/Button'

interface CardProps {
	icon: string
	name: string
	version: string
	className?: string
}

const Card = ({ icon, name, version, className }: CardProps) => {
	return (
		<div className={styles.card} style={{ marginTop: className }}>
			<img src={icon} alt={name} className={styles.icon} />
			<h3 className={styles.title}>Add to {name}</h3>
			<p className={styles.version}>Minimum version {version}</p>
			<div className={styles.dots}></div>
			<Button variant='blue-solid'>Add & Install Extension</Button>
		</div>
	)
}

export default Card
