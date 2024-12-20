export const images = [
	'/88723845556176902.jpg',
	'/1438935597575109622.jpg',
	'/3554977752061304601.jpg',
	'/6656126476403113043.jpg',
	'/8806819558644939404.jpg',
	'/12950576627901361101.jpg',
	'/15133808056233984268.jpg',
	'/17768666122035772285.jpg'
] as const satisfies Array<`/${number}.jpg`>

export function shuffle(array: Array<string>) {
	let currentIndex = array.length

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		const randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex]
		]
	}

	return array
}

shuffle(images)
