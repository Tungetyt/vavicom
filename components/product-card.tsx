'use client'
import type {FC, ReactNode} from 'react'

const ProductCard: FC<{imageURL: string; children: ReactNode}> = ({
	imageURL,
	children
}) => {
	return (
		<div className=' group/card aspect-square w-[clamp(4rem,90%,16rem)]'>
			<div
				style={{backgroundImage: `url('${imageURL}')`}}
				className={
					'cursor-pointer overflow-hidden relative card rounded-md shadow-xl m-auto h-full backgroundImage flex flex-col justify-center bg-cover bg-center'
				}
			>
				<div
					className='absolute w-full h-full top-0 left-0 transition duration-300
                     bg-white/100 backdrop-blur-md opacity-70
                     group-hover/card:bg-white/100 group-hover/card:opacity-45'
				/>
				<div className='text content relative z-10'>
					<p className='font-normal text-3xl text-gray-950 my-4 flex flex-col items-center'>
						{children}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
