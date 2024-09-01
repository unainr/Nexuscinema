import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Discover and Explore Movies: Your Premier Movie Platform",
	description:
		"Welcome to your ultimate movie platform where cinema comes alive. Explore an extensive collection of films ranging from the latest blockbusters to timeless classics. Our platform offers detailed movie information, insightful reviews, and personalized recommendations to enhance your viewing experience. Stay updated with trends, find your next favorite film, and immerse yourself in the world of movies.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<NextTopLoader
						color="#6366f1"
						crawlSpeed={100}
						speed={1000}
						showSpinner={false}
					/>

					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
