'use client'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {contactEmail, contactPhone} from '@/consts'
import {
	NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
	NEXT_PUBLIC_EMAILJS_SERVICE_ID,
	NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
} from '@/env'
import {cn} from '@/lib/utils'
import emailjs from '@emailjs/browser'
import type React from 'react'
import {useRef, useState} from 'react'
import {Textarea} from './ui/textarea'

const inputNames = {
	user_email: 'user_email',
	message: 'message'
} as const satisfies Record<string, string>

export default function ContactForm() {
	const ref = useRef<HTMLFormElement>(null)
	const [sentState, setSentState] = useState<
		'error' | 'success' | 'loading' | null
	>(null)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = ref.current

		if (!form) {
			console.error('Form not found')
			return
		}

		setSentState('loading')

		emailjs
			.sendForm(
				NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form,
				{
					publicKey: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
				}
			)
			.then(
				() => {
					setSentState('success')

					console.log('SUCCESS!')
				},
				error => {
					setSentState('error')
					console.log('FAILED...', error)
				}
			)

		console.log('Form submitted')
	}
	return (
		<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
			<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
				Formularz kontaktowy do {contactEmail}{' '}
				<span className='whitespace-nowrap'>({contactPhone})</span>
			</h2>

			<form ref={ref} className='mt-8' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-4 space-y-2 md:space-y-0 mb-4'>
					<LabelInputContainer>
						<Label htmlFor={inputNames.user_email}>Twój email</Label>
						<Input
							disabled={sentState === 'loading' || sentState === 'success'}
							autoFocus
							name={inputNames.user_email}
							id={inputNames.user_email}
							placeholder='email@gmail.com'
							type='email'
							required
						/>
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor={inputNames.message}>
							Opisz w czym możemy Ci pomóc
						</Label>
						<Textarea
							disabled={sentState === 'loading' || sentState === 'success'}
							className='min-h-32 sm:min-h-28'
							name={inputNames.message}
							id={inputNames.message}
							defaultValue={
								'Dzień dobry,\nchciałabym/chciałbym się z wami skontaktować.\n'
							}
							placeholder='Dzień dobry, chciałabym/chciałbym się z wami skontaktować...'
						/>
					</LabelInputContainer>
				</div>

				{sentState === 'success' ? (
					<p className='text-green-700'>
						Wiadomość została wysłana! Dziękujemy!
					</p>
				) : (
					<button
						className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
						type='submit'
						disabled={sentState === 'loading'}
					>
						{sentState === 'loading' ? 'Wysyłanie...' : 'Wyślij'} &rarr;
						<BottomGradient />
					</button>
				)}

				{sentState === 'error' && (
					<p className='text-destructive'>
						Nastąpił błąd, wiadomość nie została wysłana. Przepraszamy.
					</p>
				)}
			</form>
		</div>
	)
}

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	)
}

const LabelInputContainer = ({
	children,
	className
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div className={cn('flex flex-col space-y-2 w-full', className)}>
			{children}
		</div>
	)
}
