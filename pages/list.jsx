import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/main.module.scss';

export const pageTitle = 'list';

import { getSortedListData } from '../lib/post-list';
import Date from '../components/date';

export default function Home({ allListData }) {
	return (
		<Layout>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className={styles.listIntro}>
				<div className={styles.listCard}>
					<span>Records / Favorites</span>
					<ul className={styles.listCategories}>
						<li>read</li>
						<li>listen</li>
						<li>watch</li>
						<li>play</li>
					</ul>
				</div>
				<div className={styles.listCard}>
					<span>More</span>
					<ul className={styles.listLink}>
						<li>
							NeoDB
							<a
								href='https://neodb.social/users/Ivork@mastodon.social/'
								target='_blank'
								rel='noreferrer'
							>
								🡭
							</a>
						</li>
						<li>
							Are.na
							<a
								href='https://www.are.na/ivork-chan/'
								target='_blank'
								rel='noreferrer'
							>
								🡭
							</a>
						</li>
						<li>
							{'ʕ •ᴥ•ʔ'}
							<a
								href='https://ivork.notion.site/'
								target='_blank'
								rel='noreferrer'
							>
								🡭
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.postList}>
				{allListData.map(({ id, date, title }) => (
					<li key={id}>
						<Link href={`/list/${id}`}>{title}</Link>
						<Date dateString={date} />
					</li>
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const allListData = getSortedListData();
	return {
		props: {
			allListData,
		},
	};
}
