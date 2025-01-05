import {ModalWithImages} from '@/components/modal'
import ProductCard from '@/components/product-card'
import {images} from '@/lib/images'
import {IconCoins, IconReportAnalytics} from '@tabler/icons-react'
import {useTranslations} from 'next-intl'
import {GoLaw} from 'react-icons/go'
import {LiaChessSolid} from 'react-icons/lia'
import {LuBookText, LuBriefcaseBusiness} from 'react-icons/lu'

const size = 64
const icons = [
	<LuBookText size={size} key='LuBookText' />,
	<IconCoins size={size} key='IconCoins' />,
	<LuBriefcaseBusiness size={size} key='LuBriefcaseBusiness' />,
	<IconReportAnalytics size={size} key='IconReportAnalytics' />,
	<LiaChessSolid size={size} key='LiaChessSolid' />,
	<GoLaw size={size} key='GoLaw' />
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
