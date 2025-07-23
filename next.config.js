/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		esmExternals: false,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				path: false,
				crypto: false,
			};
		}
		return config;
	},
	async rewrites() {
		return [
			{
				source: "/.well-known/discord",
				destination: "/.well-known/discord/index.html",
			},
		];
	},
	sassOptions: {
		silenceDeprecations: ["legacy-js-api"],
	},
};

module.exports = nextConfig;
