import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.scss';

// snippets and icons
import Clock from 'react-live-clock';
import {AiFillHome, AiFillMail} from 'react-icons/ai';

export default function Layout({children, home}) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.svg' />
				<meta name='charset' content='utf-8' />
				<meta name='author' content='Ivork Chan' />
				<meta name='description' content='Nothing here.' />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<div className={styles.homeTitle}>
							<div className={styles.homeBox}>A</div>
							<div className={styles.homeBox}>Z</div>
							<div className={styles.homeBox}>Z</div>
							<div className={styles.homeBox}>A</div>
							<div className={styles.homeBox}>R</div>
						</div>
					</>
				) : (
					<>
						<div className={styles.pageNavbar}>
							<div>Azzar</div>
							<div>MENU</div>
						</div>
					</>
				)}
			</header>

			<main className={styles.container}>{children}</main>

			<footer className={styles.footer}>
				{!home && (
					<span className={styles.icon}>
						<Link href='/' aria-label='Home'>
							<AiFillHome />
						</Link>
					</span>
				)}
				<span className={styles.time}>
					<span>Chongqing,</span>
					<Clock
						format={'HH:mm:ss'}
						timezone={'Asia/Chongqing'}
						ticking={true}
					/>
				</span>
				<span className={styles.icon}>
					<a href='mailto:i@cy.sb' aria-label='Mail'>
						<AiFillMail />
					</a>
				</span>
			</footer>
		</>
	);
}
