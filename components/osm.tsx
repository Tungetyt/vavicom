'use client'

import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import {locations} from '@/lib/utils'
import L from 'leaflet'
import {useEffect} from 'react'
import type {Writable} from 'type-fest'

const FitBounds = ({
	coordinates
}: {
	coordinates: Array<Writable<(typeof locations)[number]['coordinates']>>
}) => {
	const map = useMap()

	useEffect(() => {
		if (!map || coordinates.length === 0) return
		map.fitBounds(L.latLngBounds(coordinates), {
			padding: [100, 100],
			maxZoom: 16
		})
	}, [map, coordinates])

	return null
}

const OSM = () => {
	return (
		<MapContainer
			scrollWheelZoom={false}
			style={{height: '100%', width: '100%'}}
			attributionControl={false}
			zoomControl={false}
		>
			<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			<FitBounds
				coordinates={locations.map(
					({coordinates}) => coordinates as Writable<typeof coordinates>
				)}
			/>
			{locations.map(({address, coordinates}) => (
				<Marker
					key={address}
					position={coordinates as Writable<typeof coordinates>}
					draggable={false}
					eventHandlers={{
						mouseover: e => {
							e.target.openPopup()
						},
						mouseout: e => {
							e.target.closePopup()
						}
					}}
				>
					<Popup>{address}</Popup>
				</Marker>
			))}
		</MapContainer>
	)
}

export default OSM
