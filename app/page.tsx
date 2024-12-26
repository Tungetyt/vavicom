import ContactForm from '@/components/contact-form'
import {Hero} from '@/components/hero'
import {ModalWithImages} from '@/components/modal'
import OSMap from '@/components/osmap'
import ProductCard from '@/components/product-card'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import {LinkPreview} from '@/components/ui/link-preview'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {contactEmail, contactPhone, locations} from '@/consts'
import {images} from '@/lib/images'
import {
	IconBook2,
	IconBuilding,
	IconChessKnight,
	IconCoins,
	IconGavel,
	IconMail,
	IconPhone,
	IconReportAnalytics,
	IconTaxEuro
} from '@tabler/icons-react'
import Image from 'next/image'
import {Fragment, type ReactNode} from 'react'

const size = 64

const productsContent = [
	{
		icon: <IconBook2 size={size} />,
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
		icon: <IconCoins size={size} />,
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
		icon: <IconTaxEuro size={size} />,
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
		icon: <IconReportAnalytics size={size} />,
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
		icon: <IconChessKnight size={size} />,
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
		icon: <IconGavel size={size} />,
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
	title: Capitalize<string>
	content: Array<Capitalize<string> | '' | Array<string>>
}>

const ContactFormModal = ({showBorder}: {showBorder?: boolean}) => (
	<ModalWithImages
		trigger={
			<span className='group-hover/modal-btn:translate-x-40 text-center transition duration-500'>
				KONTAKT
			</span>
		}
		triggerClassName={`flex m-auto mb-32 sm:mb-0 bg-slate-950 dark:bg-white rounded-full w-fit  dark:text-black text-white px-4 sm:px-8 py-2 sm:py-4 hover:bg-slate-950/[0.8] hover:shadow-lg ${showBorder ? 'border-2 border-white' : ''}`}
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

const tabs = [
	{
		value: 'prices',
		label: 'Cennik',
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
		label: 'O nas',
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
		label: 'FAQ',
		content: (
			<Accordion
				type='single'
				collapsible
				className='bg-white pt-2 px-6 rounded shadow  mb-1'
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
		label: 'Kariera',
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
	}
	// {
	// 	value: 'news',
	// 	label: 'Aktualności',
	// 	content: <>Aktualności</>
	// }
] as const satisfies Array<{
	value: Lowercase<string>
	label: Capitalize<string>
	content: ReactNode
}>

const Home = () => {
	return (
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
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:max-w-md md:max-w-3xl justify-items-center mx-auto mb-32'>
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
							triggerClassName='w-[clamp(4rem,100%,16rem)]'
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
			<Tabs
				defaultValue={tabs[0].value}
				className='grid justify-items-center mb-32 px-4 overflow-x-hidden'
			>
				<TabsList>
					{tabs.map(({label, value}) => (
						<TabsTrigger key={value} value={value}>
							{label}
						</TabsTrigger>
					))}
				</TabsList>
				{tabs.map(({content, value}) => (
					<TabsContent key={value} value={value}>
						{content}
					</TabsContent>
				))}
			</Tabs>

			<footer className='bg-slate-950 flex flex-wrap justify-center gap-8 p-8 text-white'>
				<OSMap />
				<div>
					<Image
						className='mx-auto mb-4'
						src='/vavicom-logo-1_white.png'
						alt='Next.js logo'
						width={180}
						height={38}
					/>
					<ContactInfo />
					{locations.map(({address, url, city}) => (
						<div key={address} className='flex items-center gap-1.5'>
							<IconBuilding />
							<LinkPreview url={url}>
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
