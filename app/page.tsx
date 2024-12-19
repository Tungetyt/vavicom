import ContactForm from '@/components/contact-form'
import {Hero} from '@/components/hero'
import {ModalWithImages} from '@/components/modal'
import ProductCard from '@/components/product-card'
import {contactEmail, contactPhone} from '@/consts'
import {images} from '@/lib/images'
import {
	IconBook2,
	IconCoins,
	IconGavel,
	IconMail,
	IconPhone,
	IconReportAnalytics,
	IconReportMoney,
	IconTaxEuro
} from '@tabler/icons-react'
import Image from 'next/image'
import type {ReactNode} from 'react'

const size = 64

const products = [
	<>
		<IconBook2 key='IconBook2' size={size} />
		Księgowość
	</>,
	<>
		<IconCoins key='IconCoins' size={size} />
		Kadry i płace
	</>,
	<>
		<IconTaxEuro key='IconTaxEuro' size={size} />
		Rozliczenia
	</>,
	<>
		<IconReportMoney key='IconReportMoney' size={size} />
		Usługi finansowe
	</>,
	<>
		<IconReportAnalytics key='IconReportAnalytics' size={size} />
		Usługi biznesowe
	</>,
	<>
		<IconGavel key='IconGavel' size={size} />
		Usługi pozostałe
	</>
] as const satisfies Array<ReactNode>

const Home = () => (
	<>
		<Hero>
			<>
				<div className='text-3xl md:text-7xl mt-32 sm:mt-0 font-bold dark:text-white text-center'>
					<Image
						className='invert'
						src='/vavicom-logo-1_white.png'
						alt='Next.js logo'
						width={180}
						height={38}
						priority
					/>
				</div>
				<div className='text-center font-extralight text-base dark:text-neutral-200 py-4'>
					<div className='text-lg sm:text-2xl md:text-2xl'>
						Kompleksowa obsługa księgowa
					</div>
					<div className='text-base sm:text-lg md:text-xl'>
						<p>Oddziały: Warszawa • Józefosław</p>
						<p className='flex items-center justify-center gap-1'>
							<IconPhone />
							{contactPhone}
						</p>
						<p className='flex items-center justify-center gap-1'>
							<IconMail />
							{contactEmail}
						</p>
					</div>
				</div>
				<ModalWithImages
					trigger={
						<span className='group-hover/modal-btn:translate-x-40 text-center transition duration-500'>
							KONTAKT
						</span>
					}
					triggerClassName='mb-32 sm:mb-0 bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 sm:px-8 py-2 sm:py-4 hover:bg-black/[0.8] hover:shadow-lg'
				>
					<ContactForm />
				</ModalWithImages>
			</>
		</Hero>
		<div className='text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:max-w-md md:max-w-2xl justify-items-center mx-auto '>
			{images.slice(0, products.length).map((image, index) => (
				<ModalWithImages
					key={image}
					trigger={
						<ProductCard imageURL={image}>{products[index]}</ProductCard>
					}
					triggerClassName='w-[clamp(4rem,90%,16rem)]'
				>
					LOREM IPSUM
				</ModalWithImages>
			))}
		</div>
	</>
)

export default Home
