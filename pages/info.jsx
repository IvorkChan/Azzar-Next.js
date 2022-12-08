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
					<li>#</li>
					<li>Mandarin / English / German</li>
					<li>China</li>
				</ul>
				<ul className={styles.infoInterest}>
					<li>#</li>
					<li>cat</li>
					<li>design</li>
					<li>tech</li>
					<li>indie game</li>
				</ul>
				<ul className={styles.infoProfession}>
					<li>#</li>
					<li>
						{'21-22, Research Associate at '}
						<a href='https://www.cqu.edu.cn/' target='_blank' rel='noreferrer'>
							CQU
						</a>
					</li>
					<li>
						{'15-19, BE in Industrial Design at '}
						<a
							href='https://www.tongji.edu.cn/'
							target='_blank'
							rel='noreferrer'
						>
							TJU
						</a>
					</li>
				</ul>
				<ul className={styles.infoSocial}>
					<li>#</li>
					<li>
						<a
							href='https://twitter.com/ivorkchan'
							target='_blank'
							rel='noreferrer'
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/ivorkchan'
							target='_blank'
							rel='noreferrer'
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							href='https://github.com/ivorkchan'
							target='_blank'
							rel='noreferrer'
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href='https://steamcommunity.com/id/ivorkchan'
							target='_blank'
							rel='noreferrer'
						>
							Steam
						</a>
					</li>
				</ul>
			</div>
		</Layout>
	);
}
