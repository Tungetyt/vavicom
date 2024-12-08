import {Hero} from '@/components/hero'
import {FormModal} from '@/components/modal'
import {contactEmail, contactPhone} from '@/consts'
import {IconMail, IconPhone} from '@tabler/icons-react'
import Image from 'next/image'
export default function Home() {
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
			{/* <div>
        AAAAAAAAAAAAAAA
      </div><div>
        BBBBBBBBBBBBBB
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        AAAAAAAAAAAAAAA
      </div><div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div>
      <div>
        CCCCCCCCCCCCCCCC
      </div> */}

			{/* <div className="flex justify-center items-center">
        <FormModal />
      </div> */}
		</>
	)
}
