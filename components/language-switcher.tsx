'use client'
import {Button} from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {useLocale} from 'next-intl'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {IoLanguageOutline} from 'react-icons/io5'

const languages = [
	{code: 'en', label: 'English'},
	{code: 'pl', label: 'Polski'},
	{code: 'de', label: 'Deutsch'},
	{code: 'fr', label: 'Français'}
] as const satisfies Array<{code: Lowercase<string>; label: Capitalize<string>}>

type Code = (typeof languages)[number]['code']

export function LanguageSwitcher() {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const currentLanguageLabel =
		languages.find(({code}) => code === locale)?.label ?? 'Language'

	function handleChangeLanguage(lang: Code) {
		const params = new URLSearchParams(Array.from(searchParams.entries()))
		const newPath = pathname.replace(/^\/(en|pl|fr|de)/, '')
		router.push(`/${lang}${newPath}?${params.toString()}`)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline'>
					<IoLanguageOutline />
					{currentLanguageLabel}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{languages.map(({code, label}) => (
					<DropdownMenuItem
						key={code}
						onClick={() => handleChangeLanguage(code)}
					>
						{label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
