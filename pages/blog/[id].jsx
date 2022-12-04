import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/main.module.scss';

import {AiFillBackward} from 'react-icons/ai';
import {getBlogId, getBlogData} from '../../lib/post-blog';
import Date from '../../components/date';

export default function Home({blogData}) {
	return (
		<Layout>
			<Head>
				<title>{blogData.title}</title>
			</Head>
			<div className={styles.blogMain}>
				<div className={styles.blogIcon}>
					<Link href='/blog' aria-label='back'>
						<AiFillBackward />
					</Link>
				</div>
				<div dangerouslySetInnerHTML={{__html: blogData.blogHtml}}></div>
				<div className={styles.blogSign}>
					<Date dateString={blogData.date} />
					<span>{blogData.location}</span>
				</div>
			</div>
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
