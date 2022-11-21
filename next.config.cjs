const nextConfig = require('next')({
	reactStrictMode: true,
	swcMinify: true,
});
module.exports = nextConfig;

const withImages = require('next-images');
module.exports = withImages();

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: '@mdx-js/react',
	},
});
module.exports = withMDX({
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
