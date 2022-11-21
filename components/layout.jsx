import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/layout.module.scss';

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
						<nav className={styles.navbar}>
							<Link href='/' className={styles.logo}>
								<Image
									alt='Logo'
									src='/logo.svg'
									layout='fill'
									objectFit='contain'
									objectPosition='center'
								/>
							</Link>
							<li className={styles.menu}>
								<Link href='/info' aria-label='INFO'>
									INFO
								</Link>
							</li>
							<li className={styles.menu}>
								<Link href='/work' aria-label='WORK'>
									WORK
								</Link>
							</li>
							<li className={styles.menu}>
								<Link href='/blog' aria-label='BLOG'>
									BLOG
								</Link>
							</li>
							<li className={styles.menu}>
								<Link href='/list' aria-label='LIST'>
									LIST
								</Link>
							</li>
						</nav>
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
