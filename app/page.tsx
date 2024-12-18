import {Hero} from '@/components/hero'
import {FormModal} from '@/components/modal'
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

export default function Home() {
	const products = [
		<>
			<IconBook2 key='IconBook2' size={64} />
			Księgowość
		</>,
		<>
			<IconCoins key='IconCoins' size={64} />
			Kadry i płace
		</>,
		<>
			<IconTaxEuro key='IconTaxEuro' size={64}></IconTaxEuro>
			Rozliczenia
		</>,
		<>
			<IconReportMoney key='IconReportMoney' size={64}></IconReportMoney>
			Usługi finansowe
		</>,
		<>
			<IconReportAnalytics
				key='IconReportAnalytics'
				size={64}
			></IconReportAnalytics>
			Usługi biznesowe
		</>,
		<>
			<IconGavel key='IconGavel' size={64}></IconGavel>
			Usługi pozostałe
		</>
	] as const

	return (
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
					<FormModal />
				</>
			</Hero>
			<div className='text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:max-w-md md:max-w-2xl justify-items-center mx-auto [&>*]:[width:clamp(4rem,90%,16rem)] '>
				{images.slice(0, products.length).map((image, index) => (
					<ProductCard key={image} imageURL={image}>
						{products[index]}
					</ProductCard>
				))}
			</div>
		</>
	)
}
