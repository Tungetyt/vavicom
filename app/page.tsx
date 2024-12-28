import ContactForm, {ContactEmail} from '@/components/contact-form'
import {Hero} from '@/components/hero'
import {ModalWithImages} from '@/components/modal'
import Nav from '@/components/nav'
import OSMap from '@/components/osmap'
import Products from '@/components/products'
import {LinkPreview} from '@/components/ui/link-preview'
import {contactPhone, locations} from '@/consts'
import {IconBuilding, IconPhone} from '@tabler/icons-react'
import Image from 'next/image'
import {Fragment} from 'react'

const ContactFormModal = ({showBorder}: {showBorder?: boolean}) => (
	<ModalWithImages
		trigger={
			<span className='group-hover/modal-btn:translate-x-40 text-center transition duration-500'>
				KONTAKT
			</span>
		}
		triggerClassName={`flex m-auto mb-32 sm:mb-0 bg-slate-950 dark:bg-white rounded-full w-fit dark:text-black text-white px-4 sm:px-8 py-2 sm:py-4 hover:bg-slate-950/[0.8] hover:shadow-lg ${showBorder ? 'border-2 border-white' : ''}`}
	>
		<ContactForm />
	</ModalWithImages>
)

const ContactInfo = () => (
	<div>
		<a href={`tel:${contactPhone}`} className='flex items-center gap-1.5'>
			<IconPhone />
			{contactPhone}
		</a>
		<ContactEmail />
	</div>
)

const Home = () => {
	return (
		<>
			<Hero>
				<>
					<Image
						className='invert mt-32 sm:mt-0'
						src='/vavicom-logo-1_white.png'
						alt='Vavicom logo'
						width={180}
						height={38}
						priority
					/>
					<div className='text-center font-extralight text-base dark:text-neutral-200 py-4'>
						<div className='text-lg sm:text-2xl md:text-2xl'>
							Kompleksowa obsługa księgowa
						</div>
						<div className='text-base sm:text-lg md:text-xl flex flex-col items-center'>
							<div>
								Oddziały:{' '}
								{locations.map(({city, url}, i) => (
									<Fragment key={url}>
										{' '}
										<LinkPreview className='text-black' url={url}>
											{city}
										</LinkPreview>
										{i < locations.length - 1 ? ' •' : null}
									</Fragment>
								))}
							</div>

							<ContactInfo />
						</div>
					</div>
					<ContactFormModal />
				</>
			</Hero>
			<Products />
			<Nav />
			<footer className='bg-slate-950 flex flex-wrap justify-center gap-8 p-8 text-white'>
				<OSMap />
				<div>
					<Image
						className='mx-auto mb-4'
						src='/vavicom-logo-1_white.png'
						alt='Vavicom logo'
						width={180}
						height={38}
					/>
					<ContactInfo />
					{locations.map(({address, url, city}) => (
						<div key={address} className='flex items-center gap-1.5'>
							<LinkPreview className='flex gap-1.5' url={url}>
								<IconBuilding />
								{city}, {address}
							</LinkPreview>
						</div>
					))}
					<div className='mb-5' />
					<ContactFormModal showBorder />
				</div>
			</footer>
		</>
	)
}
export default Home
