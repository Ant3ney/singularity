import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	allowedDevOrigins: [
		'*.local',
		'*.lan',
		'192.168.*.*',
		'10.*.*.*',
		'172.*.*.*',
	],
};

export default nextConfig;
