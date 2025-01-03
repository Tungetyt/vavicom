'use client'
import {AnimatePresence, motion} from 'framer-motion'
import Image from 'next/image'
import {type FC, useState} from 'react'

const AnimatedCarousel: FC<
	Readonly<{
		items: ReadonlyArray<{
			image: string
			description: string
		}>
	}>
> = ({items}) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () =>
		setCurrentIndex(prevIndex =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1
		)

	const prevSlide = () =>
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		)

	return (
		<div className='relative w-full overflow-hidden bg-black/10'>
			<button
				type='button'
				onClick={prevSlide}
				className='absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/30 text-white px-2 py-1 rounded'
				aria-label='Previous Slide'
			>
				‹
			</button>
			<button
				type='button'
				onClick={nextSlide}
				className='absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/30 text-white px-2 py-1 rounded'
				aria-label='Next Slide'
			>
				›
			</button>

			<AnimatePresence mode='wait'>
				<motion.div
					key={currentIndex}
					initial={{opacity: 0, x: 50}}
					animate={{opacity: 1, x: 0}}
					exit={{opacity: 0, x: -50}}
					transition={{duration: 0.5}}
					className='relative w-full h-[350px]'
				>
					<Image
						src={items[currentIndex].image}
						alt={`Slide ${currentIndex + 1}`}
						fill
						style={{objectFit: 'contain', objectPosition: 'center'}}
						sizes='(max-width: 768px) 100vw, 800px'
						priority
					/>
					<div className='absolute bottom-4 w-full text-center text-white bg-black/50 py-2'>
						<p className='text-sm'>{items[currentIndex].description}</p>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default AnimatedCarousel
