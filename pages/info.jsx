import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/main.module.scss';

export const pageTitle = 'info';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className={styles.infoMain}>
				<div className={styles.infoNickName}>Ivork</div>
				<div className={styles.infoRealName}>Yue CHENG</div>
				<ul className={styles.infoPersonal}>
					<li># about me</li>
					<li>Mandarin / English / German</li>
					<li>China</li>
				</ul>
				<ul className={styles.infoInterest}>
					<li># i love</li>
					<li>cat</li>
					<li>design</li>
					<li>tech</li>
					<li>indie game</li>
				</ul>
				<ul className={styles.infoProfession}>
					<li># professional experiences</li>
					<li>21-22, Research Associate at CQU</li>
					<li>15-19, BE in Industrial Design at TJU</li>
				</ul>
				<ul className={styles.infoSocial}>
					<li># find me</li>
					<li>
						<a href='https://twitter.com/ivorkchan'>Twitter</a>
					</li>
					<li>
						<a href='https://www.instagram.com/ivorkchan'>Instagram</a>
					</li>
					<li>
						<a href='https://github.com/ivorkchan'>GitHub</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/id/ivorkchan'>Steam</a>
					</li>
				</ul>
			</div>
		</Layout>
	);
}
