import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const locations = [
	{
		address: 'Warszawa, ul. Kłobucka 23C/u115, 02-699',
		coordinates: [52.168617, 20.994354]
	},
	{
		address: 'Józefosław, ul. Ogrodowa 6/u6, 05-500',
		coordinates: [52.099673, 21.034941]
	}
] as const satisfies Array<{
	address: `${Capitalize<string>}, ul. ${Capitalize<string>} ${number}${Uppercase<string>}/u${number}, ${number}-${number}`
	coordinates: Readonly<[number, number]>
}>
