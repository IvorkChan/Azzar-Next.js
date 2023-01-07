import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/main.module.scss';

export const pageTitle = 'Ivork';

import Image from 'next/image';
import homePic from '../public/images/2017-Fangshan.jpg';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className={styles.homeMain}>
				<div className={styles.homePic}>
					<Image src={homePic} alt='Fangshan' fill />
				</div>
			</div>
		</Layout>
	);
}
