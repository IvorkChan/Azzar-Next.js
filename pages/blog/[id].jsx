import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/main.module.scss';

import {getBlogId, getBlogData} from '../../lib/post-blog';
import Date from '../../components/date';

export default function Home({blogData}) {
	return (
		<Layout>
			<Head>
				<title>{blogData.title}</title>
			</Head>
			<main>
				<div>
					<Date dateString={blogData.date} />
				</div>
			</main>
			<div dangerouslySetInnerHTML={{__html: blogData.blogHtml}} />
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getBlogId();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({params}) {
	const blogData = await getBlogData(params.id);
	return {
		props: {
			blogData,
		},
	};
}
