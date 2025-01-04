import localFont from 'next/font/local'
import './globals.css'
import type {Props} from '@/app/[locale]/page'
import {routing} from '@/i18n/routing'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages, setRequestLocale} from 'next-intl/server'
import {notFound} from 'next/navigation'
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

export function generateStaticParams() {
	return routing.locales.map(locale => ({locale}))
}

export default async function RootLayout({
	children,
	params
}: Props & {children: ReactNode}) {
	const {locale} = await params
	// Ensure that the incoming `locale` is valid
	if (!locale || !routing.locales.includes(locale)) notFound()

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages()

	// Enable static rendering
	setRequestLocale(locale)

	return (
		<html lang={locale}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased text-balance`}
			>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
