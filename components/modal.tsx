'use client'
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger
} from '@/components/ui/animated-modal'
import {motion} from 'framer-motion'
import Image from 'next/image'
import ContactForm from './contact-form'

const images = [
	'/88723845556176902.jpg',
	'/1438935597575109622.jpg',
	'/3554977752061304601.jpg',
	'/6656126476403113043.jpg',
	'/8806819558644939404.jpg',
	'/12950576627901361101.jpg',
	'/15133808056233984268.jpg',
	'/17768666122035772285.jpg'
] as const satisfies Array<`/${number}.jpg`>

function shuffle(array: Array<string>) {
	let currentIndex = array.length

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		const randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex]
		]
	}
}

shuffle(images)

export function FormModal() {
	return (
		<Modal>
			<ModalTrigger className='mb-32 sm:mb-0 bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 sm:px-8 py-2 sm:py-4 hover:bg-black/[0.8] hover:shadow-lg'>
				<span className='group-hover/modal-btn:translate-x-40 text-center transition duration-500'>
					KONTAKT
				</span>
			</ModalTrigger>
			<ModalBody>
				<ModalContent>
					<ContactForm />
					<div className='flex justify-center items-center mt-8'>
						{images.map(image => (
							<motion.div
								key={image}
								style={{
									rotate: Math.random() * 20 - 10
								}}
								whileHover={{
									scale: 1.1,
									rotate: 0,
									zIndex: 100
								}}
								whileTap={{
									scale: 1.1,
									rotate: 0,
									zIndex: 100
								}}
								className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden'
							>
								<Image
									src={image}
									alt='bali images'
									width='500'
									height='500'
									className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0'
								/>
							</motion.div>
						))}
					</div>
				</ModalContent>
			</ModalBody>
		</Modal>
	)
}
