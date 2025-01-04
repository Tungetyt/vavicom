import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {contactEmail, locations} from '@/consts'
import type {Images} from '@/lib/images'
import {IconFileCv, IconHelpOctagon, IconReceipt} from '@tabler/icons-react'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import AnimatedCarousel from './animated-carousel'

const imageUrls = [
	'/Ogloszenia-o-najwazniejszych-zmianach.avif',
	'/Podglad-ksiegowosci.avif',
	'/Deklaracje-wartosci-oraz-terminy-zaplat.avif',
	'/Mozliwosc-wystawiania-faktur-wlasnych.avif',
	'/Ogloszenia-o-najwazniejszych-zmianach.avif'
] as const satisfies Images

export default function Nav() {
	const t = useTranslations('Nav')

	const servicesRaw = t.raw('services')
	if (!Array.isArray(servicesRaw)) return null
	const services = servicesRaw as ReadonlyArray<{
		service: string
		price: number
	}>

	const faqsRaw = t.raw('faqs')
	if (!Array.isArray(faqsRaw)) return null
	const faqs = faqsRaw as ReadonlyArray<{q: string; a: string}>

	const descriptionsRaw = t.raw('carouselDescriptions')
	if (!Array.isArray(descriptionsRaw)) return null
	const descriptions = descriptionsRaw as string[]

	const carouselItems = imageUrls.map((url, index) => ({
		image: url,
		description: descriptions[index] ?? ''
	}))

	const tabs = [
		{
			value: 'prices',
			label: (
				<>
					<IconReceipt className='hidden sm:block' />
					{t('tabs.prices')}
				</>
			),
			content: (
				<div className='bg-white p-6 rounded shadow mb-1 w-fit'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='w-[100px]'>
									{t('table.service')}
								</TableHead>
								<TableHead className='text-right'>{t('table.price')}</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{services.map(({service, price}) => (
								<TableRow key={service}>
									<TableCell className='font-medium'>{service}</TableCell>
									<TableCell className='text-right'>{price}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			)
		},
		{
			value: 'about',
			label: (
				<>
					<Image
						className='invert sm:mt-0 hidden sm:block'
						src='/logo.avif'
						alt='Vavicom logo'
						width={30}
						height={30}
					/>
					{t('tabs.about')}
				</>
			),
			content: (
				<div className='bg-white p-6 rounded shadow mb-1'>
					<p className='mb-6'>{t('about.p1')}</p>
					<p>{t('about.p2')}</p>
				</div>
			)
		},
		{
			value: 'faq',
			label: (
				<>
					<IconHelpOctagon className='hidden sm:block' />
					{t('tabs.faq')}
				</>
			),
			content: (
				<Accordion
					type='single'
					collapsible
					className='bg-white pt-2 px-6 rounded shadow mb-1'
				>
					{faqs.map(({q, a}) => (
						<AccordionItem key={q} value={q}>
							<AccordionTrigger className='text-left'>{q}</AccordionTrigger>
							<AccordionContent>{a}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			)
		},
		{
			value: 'career',
			label: (
				<>
					<IconFileCv className='hidden sm:block' />
					{t('tabs.career')}
				</>
			),
			content: (
				<div className='bg-white p-6 rounded shadow mb-1'>
					<div>
						<p className='text-lg font-semibold text-gray-800'>
							{t('career.heading1')}
						</p>
						<ul className='list-disc pl-6 space-y-1 my-2'>
							{locations.map(({address, city}) => (
								<li className='text-gray-700' key={address}>
									{city}, {address}
								</li>
							))}
						</ul>
					</div>
					<div className='mb-4'>
						<p className='text-gray-800'>{t('career.p1')}</p>
						<ul className='list-disc pl-6 space-y-1 mt-2'>
							<li className='text-gray-700'>{t('career.positions.0')}</li>
							<li className='text-gray-700'>{t('career.positions.1')}</li>
							<li className='text-gray-700'>{t('career.positions.2')}</li>
							<li className='text-gray-700'>{t('career.positions.3')}</li>
						</ul>
					</div>
					<div className='mb-4'>
						<h2 className='text-lg font-semibold text-gray-800'>
							{t('career.howToApply')}
						</h2>
						<p className='mt-2 text-gray-700'>
							{t('career.applyLine1', {contactEmail})}
						</p>
						<p className='mt-2 text-gray-700'>{t('career.applyLine2')}</p>
					</div>
					<div className='mb-4'>
						<h2 className='text-lg font-semibold text-gray-800'>
							{t('career.programHeading')}
						</h2>
						<p className='mt-2 text-gray-700'>{t('career.programP')}</p>
						<ul className='list-disc pl-6 space-y-1 mt-2'>
							<li className='text-gray-700'>{t('career.programList.0')}</li>
							<li className='text-gray-700'>{t('career.programList.1')}</li>
							<li className='text-gray-700'>{t('career.programList.2')}</li>
							<li className='text-gray-700'>{t('career.programList.3')}</li>
						</ul>
					</div>
					<div className='mb-4'>
						<h2 className='text-lg font-semibold text-gray-800'>
							{t('career.requirementsHeading')}
						</h2>
						<ul className='list-disc pl-6 space-y-1 mt-2'>
							<li className='text-gray-700'>{t('career.requirements.0')}</li>
							<li className='text-gray-700'>{t('career.requirements.1')}</li>
							<li className='text-gray-700'>{t('career.requirements.2')}</li>
							<li className='text-gray-700'>{t('career.requirements.3')}</li>
							<li className='text-gray-700'>{t('career.requirements.4')}</li>
						</ul>
					</div>
					<div>
						<h2 className='text-lg font-semibold text-gray-800'>
							{t('career.tasksHeading')}
						</h2>
						<ul className='list-disc pl-6 space-y-1 mt-2'>
							<li className='text-gray-700'>{t('career.tasks.0')}</li>
							<li className='text-gray-700'>{t('career.tasks.1')}</li>
							<li className='text-gray-700'>{t('career.tasks.2')}</li>
							<li className='text-gray-700'>{t('career.tasks.3')}</li>
							<li className='text-gray-700'>{t('career.tasks.4')}</li>
						</ul>
					</div>
				</div>
			)
		},
		{
			value: 'client-panel-demo',
			label: (
				<>
					<div className='items-center justify-center w-6 h-6 border-2 border-black rounded-full bg-white hidden sm:flex'>
						<span className='text-black text-xl font-bold'>e</span>
					</div>
					{t('tabs.clientPanelDemo')}
				</>
			),
			content: (
				<div className='bg-white p-6 rounded shadow mb-1'>
					<p className='mb-2'>{t('panelIntro')}</p>
					<AnimatedCarousel items={carouselItems} />
				</div>
			)
		}
	] as const

	return (
		<Tabs defaultValue={tabs[0].value} className='mb-32 px-4 overflow-x-hidden'>
			<TabsList className='w-full'>
				{tabs.map(({label, value}) => (
					<TabsTrigger key={value} value={value} className='px-2 sm:px-3'>
						{label}
					</TabsTrigger>
				))}
			</TabsList>
			{tabs.map(({content, value}) => (
				<TabsContent key={value} value={value} className='mx-auto'>
					{content}
				</TabsContent>
			))}
		</Tabs>
	)
}
