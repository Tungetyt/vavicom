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

const productsContent = [
	{
		icon: <IconBook2 key='IconBook2' size={size} />,
		title: 'Księgowość',
		content: [
			'Skomplikowane i dynamiczne zmiany prawa gospodarczego, w tym sprawozdawczości finansowej i podatkowej wymagają nieustannego śledzenia i prawidłowego interpretowania przepisów prawa.',
			'Zlecając bieżące prowadzenie ksiąg rachunkowych i sporządzanie sprawozdań finansowych, możesz przestać koncentrować się na śledzeniu zmian w przepisach i skupić się na codziennym prowadzeniu biznesu.',
			'',
			'Nasze usługi obejmują:',
			[
				'prowadzenie księgi przychodów i rozchodów KPIR;',
				'prowadzenie ksiąg handlowych;',
				'sporządzanie lub aktualizację polityki rachunkowości we współpracy z Klientem;',
				'przygotowanie bazy danych w systemie finansowo – księgowym;',
				'ewidencję dokumentów otrzymywanych do Państwa i kontrahentów;',
				'bieżące prowadzenie ksiąg rachunkowych;',
				'raportowanie danych finansowych do zarządu firmy oraz grupy zgodnie z Państwa wymogami;',
				'przygotowanie statutowych sprawozdań finansowych oraz pomoc w sporządzeniu sprawozdania zarządu z działalności;'
			],

			'',
			'Naszym priorytetem jest zagwarantowanie klientom obsługi księgowej zawsze na czas i przy zachowaniu najwyższych standardów jakości. Świadczone przez nas usługi księgowe i sprawozdawczości zawsze dostosowujemy do konkretnych oczekiwań zarówno pod względem formalnym, jak i merytorycznym z uwzględnieniem terminów ustawowych i wymaganych przez klienta.',
			'Świadczymy kompleksową obsługę podmiotów gospodarczych w szczególności mikro, małych i średnich przedsiębiorstw. Podstawowym celem jest wypełnienie bieżących obowiązków podatnika w zakresie prowadzenia ksiąg rachunkowych oraz sprawozdawczości podatkowej.',
			'',
			'Proponujemy konkurencyjne ceny:',
			[
				'Ewidencja przychodów dla potrzeb podatku zryczałtowanego od 200 zł.',
				'KPIR księga przychodów i rozchodów od 250 zł.',
				'Księgowość rachunkowa (księgi handlowe) od 400 zł.'
			]
		]
	},
	{
		icon: <IconCoins key='IconCoins' size={size} />,
		title: 'Kadry i płace',
		content: [
			'Zapewniamy kompleksową obsługę w zakresie naliczania płac zgodnie z obowiązującymi przepisami prawa pracy, ubezpieczeń społecznych oraz podatku dochodowego od osób fizycznych.',
			'Dbamy również o prawidłowe, zgodne z kodeksem pracy, administrowanie teczkami personalnymi i całą dokumentacją dotyczącą stosunku pracy i urlopów. Przygotowujemy deklaracje rozliczeniowe do ZUS, PFRON oraz urzędu skarbowego. Współpracujemy z tymi instytucjami w zakresie przygotowanej dokumentacji w przypadku jakichkolwiek pytań.',
			'Zakres usług obejmuje także pomoc w procesie zatrudniania nowych oraz odchodzących pracowników. Dbamy o to, żeby procesy kadrowe i płacowe realizowane dla Państwa były zgodne z przepisami, efektywne i łatwe w realizacji.',
			'',
			'W ramach usługi prowadzenia kadr i płac oferujemy Państwu między innymi:',
			[
				'naliczanie wynagrodzeń z uwzględnieniem dodatków i potrąceń;',
				'naliczanie świadczeń związanych z chorobą i macierzyństwem;',
				'sporządzanie deklaracji PIT i ZUS w imieniu pracodawcy;',
				'przygotowywanie dokumentacji płacowej dla firmy i jej pracowników;',
				'asystę przy płatnościach wynagrodzeń i składek na ubezpieczenia społeczne;',
				'przygotowywanie i składanie rocznych informacji o dochodach/deklaracji (PIT-11, PIT-4R, PIT-40);',
				'tworzenie i administracja teczek personalnych;',
				'ewidencję i kontrolę wymiaru urlopów pracowniczych;',
				'monitorowanie ważności badań lekarskich i szkoleń BHP;',
				'przygotowywanie świadectw pracy;',
				'przygotowywanie i rozliczanie list płac dla osób zatrudnionych na podstawie umów cywilno-prawnych;',
				'sporządzanie informacji o przychodach z innych źródeł (PIT-28, PIT-8C).'
			],
			'',
			'Nasze oferta Oferujemy rozwiązania uwzględniające specyfikę struktury organizacyjnej obowiązującej w Państwa firmie, złożoność składników płacowych i raportów kadrowo-płacowych. Szybko reagujemy i jesteśmy elastyczni w stosunku do Państwa potrzeb i wymagań. Zapewniamy całkowitą poufność i bezpieczeństwo w przechowywaniu danych kadrowo-płacowych oraz prowadzonych projektów restrukturyzacyjnych. Pomagamy obniżyć koszty zarządzania kadrami.',
			'Naszą szeroką ofertę kierujemy do każdego pracodawcy, który zatrudnia pracowników, niezależnie od wielkości firmy również pomagamy prowadzącym działalność gospodarczą w formie samozatrudnienia.',
			'',
			'Proponujemy konkurencyjne ceny:',
			['Usługi Płacowe od 45 zł', 'Usługi Kadrowe od 35 zł za 1 pracownika']
		]
	},
	{
		icon: <IconTaxEuro key='IconTaxEuro' size={size} />,
		title: 'Rozliczenia księgowo-podatkowe',
		content: [
			'Polski system podatkowy w większości przypadków nakłada cykliczny obowiązek płacenia podatków.',
			'Wymaga to systematycznego kalkulowania zobowiązań podatkowych oraz sporządzania dla organów skarbowych wielu informacji i zeznań podatkowych o różnych terminach wymagalności. Biuro Rachunkowe VAVICOM oferuje usługi sporządzania wymaganych deklaracji podatkowych, jak również wsparcie w kontaktach z organami podatkowymi, obejmujące m.in. obsługę kontroli podatkowych.',
			'',
			'Nasze prace w ramach przygotowania rozliczeń z tytułu CIT obejmują kompleksowe przygotowanie okresowych kalkulacji oraz rocznego zeznania CIT-8. W szczególności, usługi te zawierają przygotowanie:',
			[
				'Okresowych oraz rocznej kalkulacji CIT wraz ze szczegółowymi informacjami;',
				'rocznego rozliczenia, przygotowanie i złożenia zeznania podatkowego CIT-8 wraz ze stosownymi załącznikami sporządzonego na podstawie okresowych kalkulacji CIT;',
				'ustalenie kwoty podatku należnego, który Spółka zobowiązana jest przelać na rachunek bankowy urzędu skarbowego przed upływem ustawowego terminu płatności.'
			],
			'',
			'Rozliczenia podatku VAT obejmują przygotowanie rejestrów oraz deklaracji VAT, w tym:',
			[
				'sporządzanie rejestrów zakupu i sprzedaży VAT na podstawie otrzymanej dokumentacji;',
				'przedstawianie propozycji klasyfikacji transakcji, które mogłyby wpływać na wysokość zobowiązania podatkowego, tzw. koszty uzyskania przychodów;',
				'sporządzanie deklaracji VAT w oparciu o rejestry VAT;',
				'informowanie o wysokości zobowiązania podatkowego VAT do zapłaty;',
				'sporządzanie deklaracji VAT-UE – informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach zakupu i sprzedaży, a także korekty deklaracji VAT-UE;',
				'przygotowanie miesięcznych deklaracji Intrastat (jeśli będzie to wymagane);',
				'wskazanie kwoty potencjalnego zwrotu podatku VAT na deklaracji VAT oraz przygotowywanie wniosków o zwrot podatku VAT (w razie potrzeby).'
			]
		]
	},
	{
		icon: <IconReportMoney key='IconReportMoney' size={size} />,
		title: 'Usługi finansowe',
		content: [
			'Zarządzanie finansami przedsiębiorstwa to nieoderwalna część codziennych zadań właścicieli oraz osób zarządzających.',
			'Biuro Rachunkowe VAVICOM posiada zespół specjalistów z wieloletnim doświadczeniem w zakresie zarządzania finansami, doradztwa strategicznego oraz optymalizacji procesów gospodarczych i kosztów. W ramach wdrożenia nasi specjaliści zaprojektują system raportowania indywidualnie dobrany do potrzeb każdego Klienta.',
			'Oferujemy:',

			[
				'Biznesplany i modele finansowe',
				'Prowadzenie rachunkowości zarządczej',
				'Analizy i optymalizację kosztów',
				'Monitorowanie i windykację należności',
				'Tworzenie systemów controlingowych',
				'Analizy kosztów finasowania w tym kosztów leasingu',
				'Wsparcie we współpracy z bankami i instytucjami finansującymi, ubezpieczycielami'
			],
			'Tworzymy biznesplany i modele finansowe, które służą do oceny efektywności projektów inwestycyjnych oraz przygotowania dokumentacji niezbędnej do uzyskania finansowania. Tworzymy modele rachunkowości zarządczej i analizy finansowe – systemy raportowania indywidualnie zaprojektowane dla potrzeb każdego Klienta.',
			'Przeprowadzamy analizy wyników przedsiębiorstwa oraz zaproponujemy alternatywne rozwiązania zmierzające do podniesienia rentowności/efektywności działalności gospodarczej.',
			'Skuteczna windykacja nie musi kończyć się sporem sądowym i utratą klienta. Nasz zespół świadczy usługi monitorowania należności oraz ich odzyskiwania już na bardzo wczesnym etapie. Kiedy takie działania nie przyniosą oczekiwanego efektu prowadzimy kompleksową windykacją sądową i egzekucyjną.'
		]
	},
	{
		icon: <IconReportAnalytics key='IconReportAnalytics' size={size} />,
		title: 'Usługi biznesowe',
		content: [
			'Każdy zarządzający biznesem potrzebuje eksperckiej wiedzy w zakresie dynamicznie zmieniających się przepisów prawa i właściwym na nie reagowaniem.',
			'',
			'Zespół doradców biznesowych wspiera naszych klientów w zakresie:',
			[
				'Skorzystania z pakietów antykryzysowych i dotacji',
				'Zmiany umów z pracownikami',
				'Utrzymania i poprawy płynności finansowej',
				'Opracowania i wdrożenia planów kryzysowych',
				'Renegocjacji umów z dostawcami kontrahentami',
				'Restrukturyzacji',
				'Digitalizacji i automatyzacji przedsiębiorstw'
			],
			'Wdrażanie szeroko pojętych rozwiązań operacyjnych oraz podatkowych pozwala przetrwać w okresie kryzysu oraz uzyskać przewagę konkurencyjną w okresie pokryzysowym.',
			'Opracowujemy rozwiązania zapewniające płynność finansową firm, w tym w obszarze zobowiązań publiczno-prawnych, windykacji należności, analizy wypłacalności klientów itp.',
			'Możemy przeanalizować treści umów zawartych z kontrahentami, zidentyfikować potencjalne możliwości renegocjacji stawek. Z uwagi na sytuację epidemiologiczną, dopuszczalne jest podjęcie kroków, zmierzających do zmiany lub renegocjacji zawartych umów, w szczególności w aspekcie modyfikacji warunków wynagrodzenia i płatności oraz odstąpienia od umowy.',
			'Kiedy jedyną szansą przed utratą płynności finansowej, pozostaje przeprowadzenie postępowania restrukturyzacyjnego przedsiębiorstwa, jesteśmy gotowi opracować plan w zakresie zmniejszenia, odroczenia lub rozłożenia na raty należności publicznoprawnych oraz wobec kontrahentów.',
			'Digitalizacja jest usługą wdrożenia najnowocześniejszych rozwiązań technologicznych i informatycznych, które gwarantują utrzymanie najwyższej jakości obsługi kontrahentów, przy jednoczesnym optymalnym wykorzystaniu posiadanych zasobów. Często związana jest z przemodelowaniem dotychczasowego planu biznesowego i sposobu działania, przynosi poprawę komunikacji wewnętrznej i zewnętrznej oraz znacznie przyspiesza dostęp do informacji, pozwalającej na dokładniejsze i skuteczniejsze kontrolowanie procesów.'
		]
	},
	{
		icon: <IconGavel key='IconGavel' size={size} />,
		title: 'Usługi pozostałe',
		content: [
			'Digitalizacja jest usługą wdrożenia najnowocześniejszych rozwiązań technologicznych i informatycznych, które gwarantują utrzymanie najwyższej jakości obsługi kontrahentów, przy jednoczesnym optymalnym wykorzystaniu posiadanych zasobów. Często związana jest z przemodelowaniem dotychczasowego planu biznesowego i sposobu działania, przynosi poprawę komunikacji wewnętrznej i zewnętrznej oraz znacznie przyspiesza dostęp do informacji, pozwalającej na dokładniejsze i skuteczniejsze kontrolowanie procesów.',
			'Potrzebujesz przeprowadzić zmianę zarządu lub zmienili się wspólnicy? Chcesz dokonać zmiany roku obrotowego, obniżyć kapitał zakładowy albo przeciwnie Twoja spółka potrzebuje dokapitalizowania? Nie musisz szukać wyspecjalizowanych kancelarii prawnych.',
			'',
			'Oferujemy następujące usługi:',
			[
				'Rejestracja działalności gospodarczej',
				'Zakładanie spółek',
				'Zawieszenie działalności lub likwidacja spółki z o.o.',
				'Zmiany rejestrowe takie jak zmiana właścicieli, członków zarządu, siedziby spółki, zakresu działalności (PKD) itp.',
				'Przekształcenia własnościowe i zmiana formy prawnej działalności',
				'Fuzje i przejęcia',
				'Asysta Prawna – przygotowywanie dokumentów prawnych, uchwał, umów'
			],
			'',
			'Oferujemy kompleksową usługę zakładania spółek kapitałowych. Usługa zawiera przygotowanie treści umowy spółki, tak aby ten ważny dokument został dopasowany do indywidualnych potrzeb, wielkości i charakteru Twojego biznesu, mając na względzie Twój szeroko rozumiany interes i bezpieczeństwo.',
			'W trakcie procesu przygotowujemy, składamy i monitorujemy wnioski w sądzie i urzędzie skarbowym oraz w urzędzie statystycznym. Wspieramy w procesie wprowadzania zmian korporacyjnych w spółce, takich jak zmiany członków zarządu, czy zmiany statutu spółki.',
			'Pomagamy w wypełnianiu formalnych obowiązków związanych z procesem zamykania roku obrotowego spółki, poprzez m.in. zatwierdzanie sprawozdań finansowych przez zgromadzenie wspólników lub akcjonariuszy, złożenie sprawozdań finansowych do urzędu skarbowego, złożenie sprawozdań finansowych do sądu rejestrowego.'
		]
	}
] as const satisfies Array<{
	icon: ReactNode
	title: string
	content: Array<string | '' | Array<string>>
}>

const ContactFormModal = () => (
	<ModalWithImages
		trigger={
			<span className='group-hover/modal-btn:translate-x-40 text-center transition duration-500'>
				KONTAKT
			</span>
		}
		triggerClassName='flex m-auto mb-32 sm:mb-0 bg-slate-950 dark:bg-white rounded-full w-fit  dark:text-black text-white px-4 sm:px-8 py-2 sm:py-4 hover:bg-slate-950/[0.8] hover:shadow-lg border-2 border-white'
	>
		<ContactForm />
	</ModalWithImages>
)

const ContactInfo = () => (
	<div>
		<p className='flex items-center gap-1.5'>
			<IconPhone />
			{contactPhone}
		</p>
		<p className='flex items-center gap-1.5'>
			<IconMail />
			{contactEmail}
		</p>
	</div>
)

const Home = () => (
	<>
		<Hero>
			<>
				<Image
					className='invert mt-32 sm:mt-0'
					src='/vavicom-logo-1_white.png'
					alt='Next.js logo'
					width={180}
					height={38}
					priority
				/>
				<div className='text-center font-extralight text-base dark:text-neutral-200 py-4'>
					<div className='text-lg sm:text-2xl md:text-2xl'>
						Kompleksowa obsługa księgowa
					</div>
					<div className='text-base sm:text-lg md:text-xl flex flex-col items-center'>
						<p>Oddziały: Warszawa • Józefosław</p>

						<ContactInfo />
					</div>
				</div>
				<ContactFormModal />
			</>
		</Hero>
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:max-w-md md:max-w-2xl justify-items-center mx-auto mb-32'>
			{images.slice(0, productsContent.length).map((image, index) => {
				const {icon, content, title} = productsContent[index]
				return (
					<ModalWithImages
						key={image}
						trigger={
							<ProductCard imageURL={image}>
								{icon}
								{title}
							</ProductCard>
						}
						triggerClassName='w-[clamp(4rem,90%,16rem)]'
					>
						<p className='text-3xl mb-4'>{title}</p>
						{content.map(c => {
							if (typeof c === 'string')
								return (
									<p key={crypto.randomUUID()} className='mb-4'>
										{c}
									</p>
								)

							return (
								<ul key={crypto.randomUUID()} className='list-disc ml-6'>
									{c.map(item => {
										return (
											<li key={item} className='mb-4 '>
												{item}
											</li>
										)
									})}
								</ul>
							)
						})}
					</ModalWithImages>
				)
			})}
		</div>
		<footer className='bg-slate-950 flex flex-wrap justify-center gap-48 py-8 text-white'>
			<div>MAP</div>
			<div>
				<ContactInfo />
				<div className='mb-5' />
				<ContactFormModal />
			</div>
		</footer>
	</>
)

export default Home
