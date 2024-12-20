'use client'
import {cn} from '@/lib/utils'
import {AnimatePresence, motion} from 'framer-motion'
import type React from 'react'
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'

interface ModalContextType {
	open: boolean
	setOpen: (open: boolean) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({children}: {children: ReactNode}) => {
	const [open, setOpen] = useState(false)

	return (
		<ModalContext.Provider value={{open, setOpen}}>
			{children}
		</ModalContext.Provider>
	)
}

export const useModal = () => {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider')
	}
	return context
}

export function Modal({children}: {children: ReactNode}) {
	return <ModalProvider>{children}</ModalProvider>
}

export const ModalTrigger = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	const {setOpen} = useModal()
	return (
		<button className={className} type='button' onClick={() => setOpen(true)}>
			{children}
		</button>
	)
}

export const ModalBody = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	const {open, setOpen} = useModal()

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [open])

	const modalRef = useRef(null)
	useOutsideClick(modalRef, () => setOpen(false))

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1,
						backdropFilter: 'blur(10px)'
					}}
					className='fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full  flex sm:items-center justify-center z-50'
				>
					<motion.div
						ref={modalRef}
						className={cn(
							'sm:min-h-[50%] max-h-[100%] md:max-w-[40%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-x-hidden',
							className
						)}
						initial={{
							opacity: 0,
							scale: 0.5,
							rotateX: 40,
							y: 40
						}}
						animate={{
							opacity: 1,
							scale: 1,
							rotateX: 0,
							y: 0
						}}
						// transition={{
						// type: 'spring',
						// stiffness: 260,
						// damping: 15,
						// }}
					>
						<CloseIcon />
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

const useModalHistory = () => {
	const {open, setOpen} = useModal()

	useEffect(() => {
		const handlePopState = () => setOpen(false)
		if (open) {
			history.pushState({}, '', '#card')
			window.addEventListener('popstate', handlePopState)
		} else history.replaceState({}, '', window.location.pathname)

		return () => window.removeEventListener('popstate', handlePopState)
	}, [open, setOpen])
}

export const ModalContent = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	useModalHistory()

	return (
		<div className={cn('flex flex-col flex-1 p-8 md:p-10', className)}>
			{children}
		</div>
	)
}

export const ModalFooter = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<div
			className={cn(
				'flex justify-end p-4 bg-gray-100 dark:bg-neutral-900',
				className
			)}
		>
			{children}
		</div>
	)
}

const CloseIcon = () => {
	const {setOpen} = useModal()
	return (
		<button
			type='button'
			onClick={() => setOpen(false)}
			className='absolute top-4 right-4 group'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='text-black dark:text-white h-12 w-12 group-hover:scale-125 group-hover:rotate-3 transition duration-200'
				role='img'
			>
				<title>Close modal</title>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M18 6l-12 12' />
				<path d='M6 6l12 12' />
			</svg>
		</button>
	)
}

// Hook to detect clicks outside of a component.
// Add it in a separate file, I've added here for simplicity
export const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement | null>,
	callback: (event: MouseEvent | TouchEvent | EventTarget) => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// DO NOTHING if the element being clicked is the target element or their children
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			callback(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [ref, callback])
}
