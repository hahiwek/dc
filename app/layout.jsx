import "./globals.css";

import "./components/modal.css";
import "./components/twemoji.css";

import { FontPreloader } from "./components/fontpreload.jsx";
import { Utils } from "./components/utils";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Meta tags */}
				<title>Decorações de Avatar Falsas do Discord</title>
				<meta
					name="description"
					content="Obtenha decorações de avatar do Discord gratuitamente!"
				/>

				{/* Open Graph embeds */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Decorações de Avatar Falsas do Discord" />
				<meta
					property="og:description"
					content="Obtenha decorações de avatar do Discord gratuitamente!"
				/>
				<meta
					property="og:image"
					content="https://discord-decorations.vercel.app/android-chrome-192x192.png"
				/>

				{/* Twitter embeds */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Decorações de Avatar Falsas do Discord" />
				<meta
					name="twitter:description"
					content="Obtenha decorações de avatar do Discord gratuitamente!"
				/>
				<meta
					property="twitter:image"
					content="https://discord-decorations.vercel.app/android-chrome-192x192.png"
				/>

				{/* Favicon */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />

				{/* Fonts */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
				/>
			</head>
			<body className="bg-base-lower overflow-x-hidden">
				{children}
				<FontPreloader />
				<Utils />
			</body>
		</html>
	);
}
