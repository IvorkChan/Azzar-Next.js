import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/main.module.scss';

export const pageTitle = 'blog';

import { getSortedBlogData } from '../../lib/post-blog';
import Date from '../../components/date';

export default function Home({ allBlogData }) {
	return (
		<Layout>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className={styles.postList}>
				{allBlogData.map(({ id, date, title }) => (
					<li key={id}>
						<Link href={`/blog/${id}`}>{title}</Link>
						<Date dateString={date} />
					</li>
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const allBlogData = getSortedBlogData();
	return {
		props: {
			allBlogData,
		},
	};
}
