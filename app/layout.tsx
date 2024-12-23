import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Check Bot Mini App',
	description: 'Удобный поиск популярных ботов и мини-приложений'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={cn(
					`${geistSans.variable} ${geistMono.variable} antialiased`,
					'min-h-full min-w-80 overflow-x-hidden bg-[#0e2531]'
				)}
			>
				<div>
					<main>{children}</main>
				</div>
			</body>
		</html>
	)
}
