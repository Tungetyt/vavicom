'use client'
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger
} from '@/components/ui/animated-modal'
import {images, shuffle} from '@/lib/images'
import {motion} from 'framer-motion'
import Image from 'next/image'
import type {ReactNode} from 'react'

export function ModalWithImages({
	children,
	trigger,
	triggerClassName
}: {
	children: ReactNode
	trigger: ReactNode
	triggerClassName?: string
}) {
	return (
		<Modal>
			<ModalTrigger className={triggerClassName ?? ''}>{trigger}</ModalTrigger>
			<ModalBody className='max-w-[56ch]'>
				<ModalContent>
					{children}
					<div className='flex justify-center items-center mt-8'>
						{shuffle([...images]).map(image => (
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
									alt='Vavicom office'
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
