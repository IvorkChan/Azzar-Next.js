import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/main.module.scss';

export const pageTitle = 'list';

import { getSortedListData } from '../../lib/post-list';
import Date from '../../components/date';

export default function Home({ allListData }) {
	return (
		<Layout>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className={styles.listIntro}>
				<div className={styles.listCard}>
					<span>Records / Favorites</span>
					<div className={styles.listCategories}>
						<li>Read</li>
						<li>Listen</li>
						<li>Watch</li>
						<li>Play</li>
					</div>
				</div>
				<div className={styles.listCard}>
					<span>More</span>
					<div className={styles.listLink}>
						<li>
							<a
								href='https://neodb.social/users/Ivork@mastodon.social/'
								target='_blank'
								rel='noreferrer'
							>
								NeoDB
							</a>
						</li>
						<li>
							<a
								href='https://are.na/ivork-chan/'
								target='_blank'
								rel='noreferrer'
							>
								Are.na
							</a>
						</li>
						<li>
							<a
								href='https://steamcommunity.com/id/ivorkchan/'
								target='_blank'
								rel='noreferrer'
							>
								Steam
							</a>
						</li>
						<li>
							<a
								href='https://ivork.notion.site/'
								target='_blank'
								rel='noreferrer'
							>
								Cover
							</a>
						</li>
					</div>
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
