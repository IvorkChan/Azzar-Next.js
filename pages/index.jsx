import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/main.module.scss';

import Image from 'next/image';
import homePic from '../public/images/2017-fangshan.jpg';

export const pageTitle = 'azzar';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main className={styles.main}>
				<div className={styles.homeMain}>
					<div className={styles.homeSlogan}>
						Sensibility is the end of sense.
					</div>
					<div className={styles.homePic}>
						<Image src={homePic} alt='Fangshan' fill />
					</div>
				</div>
			</main>
		</Layout>
	);
}
