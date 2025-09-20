/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		turbo: {},
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	// ✅ Don’t fail the build on TypeScript errors
	typescript: {
		ignoreBuildErrors: true,
	},
	// ✅ Don’t fail the build on ESLint issues
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
