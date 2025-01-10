'use client'

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import {locations} from '@/consts'
import type {Writable} from 'type-fest'

const OSM = () => {
	return (
		<MapContainer
			style={{height: '100%', width: '100%'}}
			attributionControl={false}
			scrollWheelZoom={false}
			zoom={11}
			center={[
				52.15,
				locations
					.map(({coordinates}) => coordinates[1])
					.reduce((acc, lon) => acc + lon, 0) / locations.length
			]}
		>
			<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			{locations.map(({address, coordinates}) => (
				<Marker
					key={address}
					position={coordinates as Writable<typeof coordinates>}
					eventHandlers={{
						mouseover: ({target}) => {
							target.openPopup()
						},
						mouseout: ({target}) => {
							target.closePopup()
						}
					}}
				>
					<Popup closeButton={false}>{address}</Popup>
				</Marker>
			))}
		</MapContainer>
	)
}

export default OSM
