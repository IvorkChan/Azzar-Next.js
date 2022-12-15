import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDir = path.join(process.cwd(), 'src/blog');

export function getSortedBlogData() {
	const blogNames = fs.readdirSync(blogDir);
	const allBlogData = blogNames.map((blogName) => {
		const id = blogName.replace(/\.mdx$/, '');
		const blogPath = path.join(blogDir, blogName);
		const blogContent = fs.readFileSync(blogPath, 'utf8');
		const blogMatter = matter(blogContent);
		return {
			id,
			...blogMatter.data,
		};
	});
	return allBlogData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getBlogId() {
	const blogNames = fs.readdirSync(blogDir);
	return blogNames.map((blogName) => {
		return {
			params: {
				id: blogName.replace(/\.mdx$/, ''),
			},
		};
	});
}

export async function getBlogData(id) {
	const blogPath = path.join(blogDir, `${id}.mdx`);
	const blogContent = fs.readFileSync(blogPath, 'utf8');
	const blogMatter = matter(blogContent);
	const blogHtmlRaw = await remark().use(html).process(blogMatter.content);
	const blogHtml = blogHtmlRaw.toString();
	return {
		id,
		...blogMatter.data,
		blogHtml,
	};
}
