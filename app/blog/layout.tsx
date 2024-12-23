import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Блог',
	description: 'Узнайте что мы думаем о нашем боте 🔥'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<main>{children}</main>
		</div>
	)
}
