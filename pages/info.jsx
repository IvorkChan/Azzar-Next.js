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
					<li>Mandarin / English / German</li>
					<li>China</li>
				</ul>
				<ul className={styles.infoInterest}>
					<li>Cat</li>
					<li>Design</li>
					<li>Tech</li>
					<li>Indie Game</li>
				</ul>
				<ul className={styles.infoProfession}>
					<li>2021-2022</li>
					<li>Research Associate at Chongqing University</li>
					<li>2015-2019</li>
					<li>BE in Industrial Design at Tongji University</li>
				</ul>
				<ul className={styles.infoSocial}>
					<li>
						Twitter
						<a
							href='https://twitter.com/ivorkchan'
							target='_blank'
							rel='noreferrer'
						>
							🡭
						</a>
					</li>
					<li>
						Instagram
						<a
							href='https://www.instagram.com/ivorkchan'
							target='_blank'
							rel='noreferrer'
						>
							🡭
						</a>
					</li>
					<li>
						GitHub
						<a
							href='https://github.com/ivorkchan'
							target='_blank'
							rel='noreferrer'
						>
							🡭
						</a>
					</li>
					<li>
						Steam
						<a
							href='https://steamcommunity.com/id/ivorkchan'
							target='_blank'
							rel='noreferrer'
						>
							🡭
						</a>
					</li>
				</ul>
			</div>
		</Layout>
	);
}
