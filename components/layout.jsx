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
				<meta name='description' content='nothing' />
			</Head>
			<header className={styles.header}>
				<>
					<nav className={styles.navbar}>
						<li className={styles.menuHome}>
							<Link href='/' aria-label='home'>
								azzar
							</Link>
						</li>
						<li className={styles.menu}>
							<Link href='/blog' aria-label='blog'>
								blog
							</Link>
						</li>
						<li className={styles.menu}>
							<Link href='/list' aria-label='list'>
								list
							</Link>
						</li>
						<li className={styles.menu}>
							<Link href='/info' aria-label='info'>
								info
							</Link>
						</li>
					</nav>
				</>
			</header>

			<main className={styles.container}>{children}</main>

			<footer className={styles.footer}>
				{!home && (
					<span className={styles.icon}>
						<Link href='/' aria-label='home'>
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
					<a href='mailto:i@cy.sb' aria-label='mail'>
						<AiFillMail />
					</a>
				</span>
			</footer>
		</>
	);
}
