import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/main.module.scss';

export const pageTitle = 'blog';

import Date from '../components/date';
import {getSortedBlogData} from '../lib/post-blog';

export default function Home({allBlogData}) {
	return (
		<Layout>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main className={styles.main}>
				<bloglist className={styles.blogList}>
					{allBlogData.map(({id, date, title}) => (
						<li key={id}>
							<Date dateString={date} />
							<Link href={`/blog/${id}`}>{title}</Link>
						</li>
					))}
				</bloglist>
			</main>
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
