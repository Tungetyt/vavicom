import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'
import type {ReactNode} from 'react'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export const metadata: Metadata = {
	title: 'Vavicom Biuro Rachunkowe',
	description: 'Kompleksowa obsługa księgowa - Warszawa • Józefosław'
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased text-balance`}
			>
				{children}
			</body>
		</html>
	)
}
