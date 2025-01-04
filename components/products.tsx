import {ModalWithImages} from '@/components/modal'
import ProductCard from '@/components/product-card'
import {images} from '@/lib/images'
import {
	IconBook2,
	IconChessKnight,
	IconCoins,
	IconGavel,
	IconReportAnalytics,
	IconTaxEuro
} from '@tabler/icons-react'
import {useTranslations} from 'next-intl'

const size = 64
const icons = [
	<IconBook2 size={size} key='IconBook2' />,
	<IconCoins size={size} key='IconCoins' />,
	<IconTaxEuro size={size} key='IconTaxEuro' />,
	<IconReportAnalytics size={size} key='IconReportAnalytics' />,
	<IconChessKnight size={size} key='IconChessKnight' />,
	<IconGavel size={size} key='IconGavel' />
]

export default function Products() {
	const t = useTranslations('Products')
	const productsContent = t.raw('productsContent') as Array<{
		title: string
		content: Array<string | string[]>
	}>

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:max-w-md md:max-w-3xl justify-items-center mx-auto mb-32'>
			{images.slice(0, productsContent.length).map((image, index) => {
				const {title, content} = productsContent[index]

				return (
					<ModalWithImages
						key={image}
						trigger={
							<ProductCard imageURL={image}>
								{icons[index]}
								{title}
							</ProductCard>
						}
						triggerClassName='w-[clamp(4rem,100%,16rem)]'
					>
						<p className='text-3xl mb-4'>{title}</p>
						{content.map(c => {
							if (typeof c === 'string') {
								return (
									<p key={crypto.randomUUID()} className='mb-4'>
										{c}
									</p>
								)
							}

							return (
								<ul key={crypto.randomUUID()} className='list-disc ml-6'>
									{c.map(item => (
										<li key={crypto.randomUUID()} className='mb-4'>
											{item}
										</li>
									))}
								</ul>
							)
						})}
					</ModalWithImages>
				)
			})}
		</div>
	)
}
