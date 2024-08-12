import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#4b3b47" },
		{ media: "(prefers-color-scheme: dark)", color: "#0f0c0e" },
	],
};

export const metadata: Metadata = {
	title: "seiWordle",
	description: "seiWordle is a word-guessing game inspired by Wordle.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
