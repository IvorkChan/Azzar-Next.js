import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/main.module.scss';

export const pageTitle = 'info';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className={styles.infoMain}>
				<div className={styles.infoNickName}>Ivork Chan</div>
				<div className={styles.infoRealName}>Yue Cheng</div>
				<div className={styles.infoPersonal}>
					<li>Mandarin / English / German</li>
					<li>China</li>
				</div>
				<div className={styles.infoInterest}>
					<li>Cat</li>
					<li>Design</li>
					<li>Code</li>
					<li>Tech</li>
					<li>Game</li>
				</div>
				<div className={styles.infoSocial}>
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
							href='https://instagram.com/ivorkchan'
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
				</div>
			</div>
		</Layout>
	);
}
