import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AudioProvider from "@/providers/AudioProvider";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
