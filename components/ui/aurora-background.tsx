'use client'
import {LinkPreview} from '@/components/ui/link-preview'
import {cn} from '@/lib/utils'
import type {ReactNode} from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaXTwitter} from 'react-icons/fa6'

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode
	showRadialGradient?: boolean
}

export const AuroraBackground = ({
	className,
	children,
	showRadialGradient = true,
	...props
}: AuroraBackgroundProps) => {
	return (
		<main>
			<div
				className={cn(
					'relative flex flex-col sm:h-[100dvh] sm:items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg',
					className
				)}
				{...props}
			>
				<div className='absolute inset-0 overflow-hidden'>
					<div
						className={cn(
							`
                [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
                [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
                [background-image:var(--white-gradient),var(--aurora)]
                dark:[background-image:var(--dark-gradient),var(--aurora)]
                [background-size:300%,_200%]
                [background-position:50%_50%,50%_50%]
                filter blur-[10px] invert dark:invert-0
                after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
                after:dark:[background-image:var(--dark-gradient),var(--aurora)]
                after:[background-size:200%,_100%]
                after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
                pointer-events-none
                absolute -inset-[10px] opacity-50 will-change-transform
              `,
							showRadialGradient &&
								'[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]'
						)}
					/>
				</div>
				<div className='pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-20' />
				<div className='absolute top-4 left-4'>
					<LinkPreview
						className='text-black'
						url='https://panel.vavicom.pl/login'
					>
						Panel klienta
					</LinkPreview>
				</div>
				<div className='absolute top-4 right-4 z-10'>
					<LinkPreview
						className='text-black'
						url='https://www.facebook.com/VAVICOM/'
					>
						<FaFacebook className='inline mr-2' size={28} />
					</LinkPreview>
					<LinkPreview className='text-black' url='https://x.com/VAVICOM2/'>
						<FaXTwitter className='inline mr-2' size={28} />
					</LinkPreview>
					<LinkPreview
						className='text-black'
						url='https://www.instagram.com/vavicom_br/'
					>
						<FaInstagram className='inline mr-2' size={28} />
					</LinkPreview>
					<LinkPreview
						className='text-black'
						url='https://www.linkedin.com/company/accounting-office-vavicom/'
					>
						<FaLinkedin className='inline mr-2' size={28} />
					</LinkPreview>
				</div>

				{children}
			</div>
		</main>
	)
}
