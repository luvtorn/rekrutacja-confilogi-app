import Tabs from '../ui/Tabs/Tabs'
import styles from './Features.module.scss'

const tabs = [
	{
		id: 1,
		tabName: 'Simple Bookmarking',
		title: 'Bookmark in one click',
		text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
		image: '/images/illustration-features-tab-1.svg',
	},
	{
		id: 2,
		tabName: 'Speedy Searching',
		title: 'Intelligent Searching',
		text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
		image: '/images/illustration-features-tab-2.svg',
	},
	{
		id: 3,
		tabName: 'Easy Sharing',
		title: 'Share Your Bookmarks',
		text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
		image: '/images/illustration-features-tab-3.svg',
	},
]

const Features = () => {
	return (
		<section className={styles.features}>
			<div className={styles.features__text}>
				<h1>Features</h1>
				<p>
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>

			<Tabs tabs={tabs} />
		</section>
	)
}

export default Features
