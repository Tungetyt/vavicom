'use client'

import {cn} from '@/lib/utils'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import {AnimatePresence, motion, useMotionValue, useSpring} from 'framer-motion'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import {encode} from 'qss'
import {type ReactNode, useEffect, useState} from 'react'

type BaseProps = {
	readonly children: ReactNode
	readonly url: string
	readonly ariaLabel: string
	readonly className?: string
	readonly width?: number
	readonly height?: number
	readonly quality?: number
	readonly layout?: string
}

type StaticProps = {
	readonly isStatic: true
	readonly imageSrc: string
}

type DynamicProps = {
	readonly isStatic?: false
	readonly imageSrc?: never
}

type LinkPreviewProps = BaseProps & (StaticProps | DynamicProps)

export function LinkPreview({
	children,
	url,
	ariaLabel,
	className,
	width = 200,
	height = 125,
	quality = 50,
	layout = 'fixed',
	isStatic = false,
	imageSrc = ''
}: LinkPreviewProps) {
	const t = useTranslations('LinkPreview')

	if (!ariaLabel || ariaLabel.trim().length === 0) {
		throw new Error(
			'LinkPreview requires a non-empty ariaLabel prop for accessibility'
		)
	}

	let src: string
	if (!isStatic) {
		const params = encode({
			url,
			screenshot: true,
			meta: false,
			embed: 'screenshot.url',
			colorScheme: 'dark',
			'viewport.isMobile': true,
			'viewport.deviceScaleFactor': 1,
			'viewport.width': width * 3,
			'viewport.height': height * 3
		})
		src = `https://api.microlink.io/?${params}`
	} else {
		src = imageSrc
	}

	const [isOpen, setOpen] = useState(false)
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const springConfig = {stiffness: 100, damping: 15}
	const x = useMotionValue(0)
	const translateX = useSpring(x, springConfig)

	function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
		const targetRect = event.currentTarget.getBoundingClientRect()
		const eventOffsetX = event.clientX - targetRect.left
		const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2
		x.set(offsetFromCenter)
	}

	return (
		<>
			{isMounted && (
				<div className='hidden'>
					<Image
						src={src}
						width={width}
						height={height}
						quality={quality}
						layout={layout}
						priority
						alt={t('hiddenImageAlt')}
					/>
				</div>
			)}

			<HoverCardPrimitive.Root
				openDelay={50}
				closeDelay={100}
				onOpenChange={open => setOpen(open)}
			>
				<HoverCardPrimitive.Trigger asChild>
					<Link
						href={url}
						aria-label={ariaLabel}
						onMouseMove={handleMouseMove}
						className={cn('inline-flex items-center text-white', className)}
					>
						{children}
						<span className='sr-only'>{ariaLabel}</span>
					</Link>
				</HoverCardPrimitive.Trigger>

				<HoverCardPrimitive.Content
					className='[transform-origin:var(--radix-hover-card-content-transform-origin)]'
					side='top'
					align='center'
					sideOffset={10}
				>
					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{opacity: 0, y: 20, scale: 0.6}}
								animate={{
									opacity: 1,
									y: 0,
									scale: 1,
									transition: {
										type: 'spring',
										stiffness: 260,
										damping: 20
									}
								}}
								exit={{opacity: 0, y: 20, scale: 0.6}}
								className='shadow-xl rounded-xl'
								style={{x: translateX}}
							>
								<Link
									href={url}
									aria-label={ariaLabel}
									className='block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800'
									style={{fontSize: 0}}
								>
									<Image
										src={src}
										width={width}
										height={height}
										quality={quality}
										layout={layout}
										priority
										className='rounded-lg'
										alt={t('previewImageAlt')}
									/>
								</Link>
							</motion.div>
						)}
					</AnimatePresence>
				</HoverCardPrimitive.Content>
			</HoverCardPrimitive.Root>
		</>
	)
}
