const nextConfig = require('next')({
	reactStrictMode: true,
	swcMinify: true,
});
module.exports = nextConfig;

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: '@mdx-js/react',
	},
});
module.exports = withMDX({
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
