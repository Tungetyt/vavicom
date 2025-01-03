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
import {IconFileCv, IconHelpOctagon, IconReceipt} from '@tabler/icons-react'
import Image from 'next/image'
import type {ReactNode} from 'react'
import AnimatedCarousel from './animated-carousel'

const imageUrls = [
	'/Ogloszenia-o-najwazniejszych-zmianach.avif',
	'/Podglad-ksiegowosci.avif',
	'/Deklaracje-wartosci-oraz-terminy-zaplat.avif',
	'/Mozliwosc-wystawiania-faktur-wlasnych.avif',
	'/Ogloszenia-o-najwazniejszych-zmianach.avif'
] as const satisfies Array<`/${string}.avif`>

const carouselItems = imageUrls.map(url => ({
	image: url,
	description:
		url
			.split('/')
			.pop()
			?.replace(/\.[^/.]+$/, '')
			.replace(/-/g, ' ') ?? ''
}))

const services = [
	{
		service: 'Kadry i płace',
		price: 60
	},
	{
		service: 'Księga przychodów i rozchodów',
		price: 250
	},
	{
		service: 'Księgi rachunkowe',
		price: 400
	}
] as const satisfies Array<{
	service: Capitalize<string>
	price: number
}>

const faqs = [
	{
		q: 'Na czym polega księgowość online?',
		a: 'To nowoczesna forma księgowości, która umożliwia zdalny dostęp do wszelkich danych finansowych Twojej firmy. Dzięki autorskiej platformie VAVICOM masz 24/7 podgląd dokumentów, szybki obieg informacji oraz bieżącą integrację danych między Tobą a biurem rachunkowym – bez względu na to, gdzie się znajdujesz.'
	},
	{
		q: 'Co to jest integracja systemów?',
		a: 'Integracja systemów łączy kluczowe operacje w firmie (fakturowanie, wpłaty, obsługę magazynu) w jednym miejscu. Dzięki temu, po dodaniu danych księgowych (koszty, płace), wystarczy jedno kliknięcie, by otrzymać kompleksowy wgląd w stan przedsiębiorstwa.'
	},
	{
		q: 'Jaka jest oszczędność czasu przy księgowości online?',
		a: 'Księgowość online eliminuje konieczność częstych wizyt w biurze i przyspiesza przepływ informacji. Zarówno mniejsze, jak i większe firmy mogą w ten sposób zaoszczędzić mnóstwo czasu i na bieżąco kontrolować poprawność wprowadzanych danych.'
	},
	{
		q: 'Jak wygląda dostęp do danych w księgowości online?',
		a: 'Całodobowy. Możesz generować raporty, wykresy i zestawienia z dowolnego miejsca na świecie, a także kontrolować stany magazynowe i bazę kontrahentów w czasie rzeczywistym.'
	},
	{
		q: 'Dlaczego warto zlecać księgowość zewnętrznym biurom rachunkowym?',
		a: 'Oszczędzasz na zakupie systemów finansowo-księgowych, zatrudnianiu i szkoleniu księgowych oraz utrzymywaniu stanowisk pracy. Jednocześnie masz pewność, że Twoje finanse prowadzi zespół z zawsze aktualną wiedzą o przepisach podatkowych.'
	},
	{
		q: 'Czy można zmienić biuro rachunkowe w ciągu roku?',
		a: 'Tak, w dowolnym momencie – choć najwygodniej zrobić to na początku nowego okresu fiskalnego. W trakcie roku kluczowe jest ustalenie odpowiedzialności za poprzednie księgowania i rozliczenia podatkowe.'
	},
	{
		q: 'Szkoda Ci czasu na analizowanie szybko zmieniających się przepisów?',
		a: 'Biuro rachunkowe śledzi wszelkie zmiany w prawie podatkowym i dba o ich właściwe wdrożenie, a Ty możesz skupić się na rozwoju swojej firmy.'
	},
	{
		q: 'Obawiasz się błędów przy samodzielnej księgowości?',
		a: 'Specjaliści z biura rachunkowego minimalizują ryzyko kosztownych błędów. Dzięki temu Twoje rozliczenia zawsze będą zgodne z obowiązującymi przepisami.'
	},
	{
		q: 'Martwisz się, że dokumenty mogą się zgubić?',
		a: 'VAVICOM udostępnia nowoczesną platformę online, gdzie wszystkie faktury i dokumenty są archiwizowane w jednym miejscu. Z łatwością sprawdzisz, co już zostało przekazane i kiedy.'
	},
	{
		q: 'Masz złe doświadczenia ze współpracy z biurami rachunkowymi?',
		a: 'Stawiamy na partnerskie relacje z klientami, aktywne doradztwo oraz stabilny zespół specjalistów. Zależy nam na długofalowej współpracy opartej na zaufaniu.'
	},
	{
		q: 'Nie masz z kim skonsultować bieżących decyzji finansowo-księgowych?',
		a: 'VAVICOM to Twój partner biznesowy – regularnie informujemy o zmianach w prawie oraz wspieramy w decyzjach finansowych.'
	},
	{
		q: 'Czym jest księgowość hybrydowa?',
		a: 'To połączenie tradycyjnej obsługi z nowoczesnymi rozwiązaniami online. Zachowujesz bezpośredni kontakt ze specjalistą, a jednocześnie korzystasz z zalet internetowego dostępu do dokumentów i danych.'
	},
	{
		q: 'W jakiej formie przekazujesz dokumenty do biura?',
		a: 'Najwygodniej elektronicznie – np. za pomocą aplikacji, maila czy platformy online. Jeśli wolisz, możesz też dostarczyć je osobiście lub kurierem.'
	},
	{
		q: 'Ważna jest dla Ciebie kompleksowość, profesjonalizm i terminowość?',
		a: 'W VAVICOM zapewniamy pełną poufność, bezpieczeństwo danych oraz terminową realizację wszystkich powierzonych nam spraw. Wszystko po to, byś czuł się pewnie i mógł skupić się na swoim biznesie.'
	},
	{
		q: 'Czy moje dane są bezpieczne i mogę liczyć na pełną dyskrecję współpracy?',
		a: 'POLITYKA PRYWATNOŚCI Biuro Rachunkowe Vavicom. Administrator: Administratorem danych jest VAVICOM sp. z o.o. z siedzibą w Piasecznie. Dane kontaktowe: Z Administratorem można się skontaktować: elektronicznie: info@vavicom.pl telefonicznie: +48 606 368 694 listownie: ul. Grochowskiego 7 lok.25, 05-500 Piaseczno Administrator powołał Inspektora Ochrony Danych, z którym można skontaktować się we wszystkich kwestiach dotyczących ochrony danych osobowych oraz sposobu realizacji przysługujących osobom fizycznym praw za pomocą email: iod@vavicom.pl Cel przetwarzania i podstawa prawna przetwarzania danych osobowych Komunikacja drogą e-mailową oraz tradycyjną: art. 6 ust. 1 lit. f) RODO Podstawą prawną przetwarzania jest uzasadniony interes Administratora polegający na prowadzeniu korespondencji. Kontakt telefoniczny: art. 6 ust. 1 lit. f) RODO Podstawą prawną przetwarzania jest uzasadniony interes Administratora polegający na konieczności załatwienia zgłoszonej sprawy związanej z prowadzoną działalnością. Rekrutacja: art. 6 ust. 1 lit. c) RODO Podstawą prawną przetwarzania jest obowiązek prawny ciążący na Administratorze w związku z przepisami Kodeksu pracy oraz art. 6 ust. 1 lit. a) RODO Podstawą prawną przetwarzania jest zgoda w celu przeprowadzenia procesu rekrutacji w zakresie danych niewymaganych przepisami prawa, a także dla celów przyszłych procesów rekrutacyjnych. Świadczenie usług: art. 6 ust. 1 lit. a) RODO oraz art. 10 ust. 2 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną. Podstawą prawną przetwarzania jest wyrażona zgoda. Art. 6 ust. 1 lit. b) RODO Podstawą prawną przetwarzania jest zawarcie i wykonanie umowy. Art. 6 ust. 1 lit. f) RODO Podstawą prawną przetwarzania jest prawnie uzasadniony interes Administratora polegający w szczególności na realizacji umowy, marketingu usług własnych. Gromadzenie danych w kontaktach biznesowych: art. 6 ust. 1 lit. a) RODO Podstawą prawną przetwarzania jest wyrażona zgoda. Prowadzenie ksiąg rachunkowych i dokumentacji podatkowej: art. 6 ust. 1 lit. c) RODO w zw. z art. 74 ust. 2 ustawy z dnia 29 września 1994 r. o rachunkowości. Podstawą prawną przetwarzania jest obowiązek prawny ciążący na Administratorze w związku z przepisami ustawy o rachunkowości. Komunikacja z osobami odpowiedzialnymi za wykonanie umowy po stronie partnera biznesowego: art. 6 ust. 1 lit. f) RODO Podstawą prawną przetwarzania jest uzasadniony interes Administratora polegający na komunikacji z partnerami biznesowymi. Odbiorcy danych: podmioty zapewniające świadczenie określonych usług, w tym m.in. dostawcom usług teleinformatycznych, operatorom pocztowym, firmom kurierskim. Dostawcy usług prawnych i doradczych oraz wspierających Administratora w dochodzeniu należnych roszczeń w szczególności kancelariom prawnym. Organy uprawnionym do otrzymania danych osobowych na podstawie przepisów prawa. Prawa osoby, której dane dotyczą: Prawo dostępu do danych osobowych oraz prawo do żądania ich sprostowania, usunięcia lub ograniczenia przetwarzania. Prawo do wniesienia sprzeciwu wobec przetwarzania Państwa danych osobowych. Prawo do jej cofnięcia w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. W zakresie, w jakim Państwa dane są przetwarzane w celu zawarcia i wykonywania umowy o świadczenie usług lub przetwarzane na podstawie Państwa zgody przysługuje Państwu, także prawo do przenoszenia danych osobowych. Przysługuje Państwu, również prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych Okres przechowywania danych: Państwa dane osobowe przechowywane będą do chwili realizacji zadania, dla którego zostały zebrane a następnie, jeśli chodzi o materiały archiwalne, przez czas wynikający z przepisów ustawy z dnia 14 lipca 1983 r. o narodowym zasobie archiwalnym i archiwach. W przypadku przetwarzania Państwa danych osobowych w celu prowadzenia ksiąg rachunkowych i dokumentacji podatkowej dane osobowe będą przechowywane przez 5 lat liczonych od końca roku kalendarzowego, w którym powstał obowiązek podatkowy. W przypadku przetwarzania Państwa danych osobowych do świadczenia usług zaufania o których mowa w art. 17 ust. 2 ustawy z dnia 5 września 2016 r. o usługach zaufania oraz identyfikacji elektronicznej dane osobowe przechowywane będą przez okres wymagany prawem tj. 20 lat. W przypadku przetwarzania Państwa danych osobowych dla potrzeb obecnych oraz przyszłych procesów rekrutacyjnych dane osobowe przechowywane będą przez okres 12 miesięcy. W przypadku przetwarzania danych osobowych w celu dochodzenia Państwa roszczeń dane osobowe będą przechowywane przez okres przedawnienia roszczeń określony w przepisach prawa. W przypadku wyrażenia przez Państwa zgody na przetwarzanie danych osobowych w celach marketingowych dane będą przechowywane do czasu jej wycofania.'
	}
] as const satisfies Array<{
	q: Capitalize<string>
	a: Capitalize<string>
}>

const tabs = [
	{
		value: 'prices',
		label: (
			<>
				<IconReceipt className='hidden sm:block' />
				Cennik
			</>
		),
		content: (
			<div className='bg-white p-6 rounded shadow mb-1 w-fit'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className='w-[100px]'>Usługa:</TableHead>
							<TableHead className='text-right'>Cena od:</TableHead>
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
				O nas
			</>
		),
		content: (
			<div className='bg-white p-6 rounded shadow mb-1'>
				<p className='mb-6'>
					Vavicom to nowoczesne, licencjonowane biuro rachunkowe z wieloletnim
					doświadczeniem, działające w Warszawie (Mokotów, Ursynów) i w całej
					Polsce. Pomagamy firmom w kompleksowej obsłudze finansowo-księgowej:
					prowadzimy księgi, rozliczenia podatkowe, listy płac oraz
					administrację kadrowo-płacową. Nasz zespół specjalistów dba o każdy
					etap współpracy, wykorzystując sprawdzone procesy i innowacyjne
					technologie – dzięki temu zapewniamy stały, 24/7 dostęp online do
					dokumentacji księgowej.
				</p>
				<p>
					Wspieramy zarówno nowych przedsiębiorców, jak i doświadczone podmioty
					o różnych profilach działalności. Zapewniamy indywidualne podejście,
					elastyczną ofertę cenową oraz pełne wsparcie w zakresie doradztwa
					finansowego i podatkowego. Powierzając nam księgowość, zyskujesz
					profesjonalną opiekę i więcej czasu na rozwijanie swojego biznesu.
					Skontaktuj się z nami i sprawdź, co możemy zrobić dla Twojej firmy!
				</p>
			</div>
		)
	},
	{
		value: 'faq',
		label: (
			<>
				<IconHelpOctagon className='hidden sm:block' />
				FAQ
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
				Kariera
			</>
		),
		content: (
			<div className='bg-white p-6 rounded shadow  mb-1'>
				{/* Sekcja: Adresy biur */}
				<div>
					<p className='text-lg font-semibold text-gray-800'>
						Praca hybrydowa, biura:
					</p>
					<ul className='list-disc pl-6 space-y-1 my-2'>
						{locations.map(({address, city}) => (
							<li className='text-gray-700' key={address}>
								{city}, {address}
							</li>
						))}
					</ul>
				</div>

				{/* Sekcja: Stanowiska */}
				<div className='mb-4'>
					<p className='text-gray-800'>
						W związku z dynamicznym rozwojem poszukujemy nowych osób do naszego
						zespołu:
					</p>
					<ul className='list-disc pl-6 space-y-1 mt-2'>
						<li className='text-gray-700'>Księgowa / Księgowy</li>
						<li className='text-gray-700'>Specjalista ds. Kadr i Płac</li>
						<li className='text-gray-700'>
							Przedstawiciel handlowy / Account Manager
						</li>
						<li className='text-gray-700'>
							Student (płatny staż w dziale Księgowości)
						</li>
					</ul>
				</div>

				{/* Sekcja: Jak aplikować */}
				<div className='mb-4'>
					<h2 className='text-lg font-semibold text-gray-800'>
						Jak aplikować?
					</h2>
					<p className='mt-2 text-gray-700'>
						{`Prześlij swoje aktualne CV na adres ${contactEmail}. Prosimy także o dołączenie klauzuli o zgodzie na przetwarzanie danych osobowych na potrzeby rekrutacji.`}
					</p>
					<p className='mt-2 text-gray-700'>
						Dołącz do nas i rozwijaj się w innowacyjnym biurze rachunkowym!
					</p>
				</div>

				{/* Sekcja: Program stażowy */}
				<div className='mb-4'>
					<h2 className='text-lg font-semibold text-gray-800'>
						Program stażowy
					</h2>
					<p className='mt-2 text-gray-700'>
						Z myślą o studentach ostatnich lat studiów ponownie uruchomiliśmy
						płatne staże, które umożliwiają:
					</p>
					<ul className='list-disc pl-6 space-y-1 mt-2'>
						<li className='text-gray-700'>
							Praktyczną naukę zawodu księgowego pod okiem doświadczonych
							ekspertów.
						</li>
						<li className='text-gray-700'>
							Poznanie specyfiki obsługi różnych podmiotów gospodarczych.
						</li>
						<li className='text-gray-700'>
							Pracę w przyjaznej atmosferze i naukę systemu Comarch ERP Optima.
						</li>
						<li className='text-gray-700'>
							Zapoznanie się z nowoczesnymi rozwiązaniami i procesem obiegu
							dokumentów w biurze rachunkowym.
						</li>
					</ul>
				</div>

				{/* Sekcja: Wymagania */}
				<div className='mb-4'>
					<h2 className='text-lg font-semibold text-gray-800'>
						Aplikuj, jeśli:
					</h2>
					<ul className='list-disc pl-6 space-y-1 mt-2'>
						<li className='text-gray-700'>
							Studiujesz księgowość, ekonomię, finanse lub kierunki pokrewne.
						</li>
						<li className='text-gray-700'>
							Lubisz pracę z liczbami, a w MS Office (zwłaszcza Excel i Word)
							czujesz się pewnie.
						</li>
						<li className='text-gray-700'>
							Masz umiejętności analityczne, cenisz pracę zespołową i potrafisz
							też działać samodzielnie.
						</li>
						<li className='text-gray-700'>
							Jesteś skrupulatny/-a, dyspozycyjny/-a 2-3 dni w tygodniu i dbasz
							o poufność danych.
						</li>
						<li className='text-gray-700'>
							Chcesz zdobyć realne doświadczenie w księgowości i
							sprawozdawczości finansowej.
						</li>
					</ul>
				</div>

				{/* Sekcja: Zakres zadań */}
				<div>
					<h2 className='text-lg font-semibold text-gray-800'>Zakres zadań:</h2>
					<ul className='list-disc pl-6 space-y-1 mt-2'>
						<li className='text-gray-700'>
							Księgowanie podstawowych dokumentów i obsługa systemu księgowego.
						</li>
						<li className='text-gray-700'>
							Wsparcie działu w bieżących zadaniach (dokumentacja księgowa,
							sprawozdawczość).
						</li>
						<li className='text-gray-700'>
							Współpraca z klientami i zewnętrznymi partnerami biznesowymi.
						</li>
						<li className='text-gray-700'>
							Pomoc w prowadzeniu sekretariatu i systemu kancelaryjnego.
						</li>
						<li className='text-gray-700'>
							Dbanie o prawidłowy obieg dokumentów i terminowość rozliczeń.
						</li>
					</ul>
				</div>
			</div>
		)
	},
	{
		value: 'client-panel-demo',
		content: (
			<div className='bg-white p-6 rounded shadow  mb-1'>
				<p className='mb-2'>
					Każdy Klient BR VAVICOM ma dostęp do wielofunkcyjego panelu.
				</p>
				<AnimatedCarousel items={carouselItems} />
			</div>
		),
		label: (
			<>
				<div className='items-center justify-center w-6 h-6 border-2 border-black rounded-full bg-white hidden sm:flex'>
					<span className='text-black text-xl font-bold'>e</span>
				</div>
				Panel Klienta
			</>
		)
	}
	// {
	// 	value: 'news',
	// 	label: 'Aktualności',
	// 	content: <>Aktualności</>
	// }
] as const satisfies Array<{
	value: Lowercase<string>
	label: ReactNode
	content: ReactNode
}>

const Nav = () => (
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

export default Nav
