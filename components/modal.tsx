'use client'
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger
} from '@/components/ui/animated-modal'
import {images} from '@/lib/images'
import {motion} from 'framer-motion'
import Image from 'next/image'
import ContactForm from './contact-form'

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
