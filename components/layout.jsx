import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/layout.module.scss';

import Clock from 'react-live-clock';
import { AiFillHome, AiFillMail } from 'react-icons/ai';

export default function Layout({ children, home }) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.svg' />
				<meta name='charset' content='utf-8' />
				<meta name='author' content='Ivork Chan' />
				<meta name='description' content='nothing' />
			</Head>
			<header className={styles.header}>
				<div className={styles.menu}>
					<li className={styles.menuTag}>
						<Link href='/' aria-label='home'>
							azzar
						</Link>
					</li>
					<li className={styles.menuTag}>
						<Link href='/info' aria-label='info'>
							info
						</Link>
					</li>
					<li className={styles.menuTag}>
						<Link href='/blog' aria-label='blog'>
							blog
						</Link>
					</li>
					<li className={styles.menuTag}>
						<Link href='/list' aria-label='list'>
							list
						</Link>
					</li>
				</div>
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<div className={styles.menu}>
					{!home && (
						<li className={styles.icon}>
							<Link href='/' aria-label='home'>
								<AiFillHome />
							</Link>
						</li>
					)}
					<li className={styles.time}>
						<Clock
							format={'HH:mm:ss'}
							timezone={'Asia/Chongqing'}
							ticking={true}
						/>
					</li>
					<li className={styles.icon}>
						<a href='mailto:i@cy.sb' aria-label='mail'>
							<AiFillMail />
						</a>
					</li>
				</div>
			</footer>
		</>
	);
}
