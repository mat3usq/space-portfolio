import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarsBackground'
import Skills from '@/components/main/Skills'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Space portoflio',
	description: 'This is my portoflio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
				{children}
				<StarsCanvas />
				<Skills />
			</body>
		</html>
	)
}
