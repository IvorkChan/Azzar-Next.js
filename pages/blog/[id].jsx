import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/main.module.scss';

import {AiFillBackward} from 'react-icons/ai';
import {useRouter} from 'next/router';

import {getBlogId, getBlogData} from '../../lib/post-blog';
import Date from '../../components/date';

export default function Home({blogData}) {
	const router = useRouter();
	return (
		<Layout>
			<Head>
				<title>{blogData.title}</title>
			</Head>
			<main className={styles.blogMain}>
				<AiFillBackward
					className={styles.blogIcon}
					onClick={() => router.back()}
				/>
				<blog dangerouslySetInnerHTML={{__html: blogData.blogHtml}}></blog>
				<span className={styles.blogSign}>
					<Date dateString={blogData.date} />
					<span>{blogData.location}</span>
				</span>
			</main>
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
