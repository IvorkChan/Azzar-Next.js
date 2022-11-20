import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/main.module.scss';

export const pageTitle = 'Info';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main className={styles.main}>
				<div>{'WIP'}</div>
			</main>
		</Layout>
	);
}
