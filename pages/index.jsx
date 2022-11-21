import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/main.module.scss';

export const pageTitle = 'Azzar';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main className={styles.main}>
				<div className={styles.homeMain}>
					<span className={styles.homeSlogan}>
						Sensibility is the end of sense.
					</span>
					<div className={styles.homeGrid}>
						<Link href='info' className={styles.homeCard}>
							<div className={styles.homeCardName}>INFO</div>
							<div className={styles.homeCardList}>
								<span>about me</span>
							</div>
						</Link>
						<Link href='work' className={styles.homeCard}>
							<div className={styles.homeCardName}>WORK</div>
							<div className={styles.homeCardList}>
								<span>design</span>
							</div>
						</Link>
						<Link href='blog' className={styles.homeCard}>
							<div className={styles.homeCardName}>BLOG</div>
							<div className={styles.homeCardList}>
								<span>quotes</span>
								<span>journals</span>
							</div>
						</Link>
						<Link href='list' className={styles.homeCard}>
							<div className={styles.homeCardName}>LIST</div>
							<div className={styles.homeCardList}>
								<span>listen</span>
								<span>watch</span>
								<span>read</span>
								<span>play</span>
							</div>
						</Link>
					</div>
				</div>
			</main>
		</Layout>
	);
}
