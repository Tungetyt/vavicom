'use client'
import dynamic from 'next/dynamic'
import {useEffect, useRef, useState} from 'react'

export default function OSMap() {
	const [shouldLoadMap, setShouldLoadMap] = useState(false)
	const container = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([{isIntersecting}]) => {
				if (isIntersecting) {
					setShouldLoadMap(true)
					observer.disconnect()
				}
			},
			{
				root: null,
				threshold: 0.1
			}
		)

		if (container.current) observer.observe(container.current)

		return observer.disconnect
	}, [])

	const OSM = shouldLoadMap
		? dynamic(() => import('@/components/osm'), {
				ssr: false,
				loading: () => <p>Ładowanie mapy...</p>
			})
		: null

	return (
		<div
			ref={container}
			className='mx-auto w-[98%] h-[480px] flex-1  overflow-hidden rounded-xl shadow-md'
		>
			{OSM && <OSM />}
		</div>
	)
}
