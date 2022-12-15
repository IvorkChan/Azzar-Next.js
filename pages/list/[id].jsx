import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/main.module.scss';

import { AiFillBackward } from 'react-icons/ai';
import { getListId, getListData } from '../../lib/post-list';
import Date from '../../components/date';

export default function Home({ listData }) {
	return (
		<Layout>
			<Head>
				<title>{listData.title}</title>
			</Head>
			<div className={styles.articleMain}>
				<div dangerouslySetInnerHTML={{ __html: listData.listHtml }}></div>
				<div className={styles.articleSign}>
					<Link href='/list' aria-label='back' className={styles.articleIcon}>
						<AiFillBackward />
					</Link>
					<Date dateString={listData.date} />
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getListId();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const listData = await getListData(params.id);
	return {
		props: {
			listData,
		},
	};
}
