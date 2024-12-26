export const contactEmail = 'info@vavicom.pl'
export const contactPhone = '+48 884 267 820'

export const locations = [
	{
		city: 'Warszawa',
		address: 'ul. Kłobucka 23C/u115, 02-699',
		url: 'https://www.google.com/maps/place/Biuro+Rachunkowe+VAVICOM/@52.1684201,20.9916999,17z/data=!3m1!4b1!4m6!3m5!1s0x471933859880b4cf:0x1de3377afee6881!8m2!3d52.1684168!4d20.9942802!16s%2Fg%2F11nngwcwdc?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
		coordinates: [52.168617, 20.994354]
	},
	{
		city: 'Józefosław',
		address: 'ul. Ogrodowa 6/u6, 05-500',
		url: 'https://www.google.com/maps/place/VAVICOM+Biuro+Rachunkowe/@52.099943,21.034384,20z/data=!4m6!3m5!1s0x47192f098381079f:0xb128be43bb57ad7!8m2!3d52.0999397!4d21.0344651!16s%2Fg%2F11p9x5w9tr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
		coordinates: [52.099673, 21.034941]
	}
] as const satisfies Array<{
	city: Capitalize<string>
	address: `ul. ${Capitalize<string>} ${number}${Uppercase<string>}/u${number}, ${number}-${number}`
	url: `https://www.google.com/maps/place/${string}`
	coordinates: Readonly<[number, number]>
}>
