import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const listDir = path.join(process.cwd(), 'src/list');

export function getSortedListData() {
	const listNames = fs.readdirSync(listDir);
	const allListData = listNames.map((listName) => {
		const id = listName.replace(/\.mdx$/, '');
		const listPath = path.join(listDir, listName);
		const listContent = fs.readFileSync(listPath, 'utf8');
		const listMatter = matter(listContent);
		return {
			id,
			...listMatter.data,
		};
	});
	return allListData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getListId() {
	const listNames = fs.readdirSync(listDir);
	return listNames.map((listName) => {
		return {
			params: {
				id: listName.replace(/\.mdx$/, ''),
			},
		};
	});
}

export async function getListData(id) {
	const listPath = path.join(listDir, `${id}.mdx`);
	const listContent = fs.readFileSync(listPath, 'utf8');
	const listMatter = matter(listContent);
	const listHtmlRaw = await remark().use(html).process(listMatter.content);
	const listHtml = listHtmlRaw.toString();
	return {
		id,
		...listMatter.data,
		listHtml,
	};
}
