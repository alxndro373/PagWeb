import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useState, useEffect } from "react"
import { useCuidad } from '../../hooks/useCuidad.js'
import { useTerminales } from '../../hooks/useTerminales.js'

const Maps = ({ selectedCity }) => {
    const initialCoordinates = { lat: 25.7530096, lng: -106.1030617 }
    const initialZoom = 4
    const [cityCoordinates, setCityCoordinates] = useState(initialCoordinates)
    const [zoom, setZoom] = useState(initialZoom)
    const [forceRerender, setForceRerender] = useState(false) // Nuevo estado para forzar la re-renderización
    const { ciudades, fetchCuidades } = useCuidad()
    const { terminales, fetchTerminales } = useTerminales()

    useEffect(() => {
        fetchCuidades()
    }, [])

    useEffect(() => {
        fetchTerminales()
    })

    useEffect(() => {
        if (selectedCity) {
            const coordinates = mapCityToCoordinates(selectedCity);
            if (coordinates) {
                setCityCoordinates({ lat: coordinates[0], lng: coordinates[1] })
                setZoom(10)
                setForceRerender(prevState => !prevState); // Cambiar el estado para forzar la re-renderización
            }
        } else {
            setCityCoordinates(initialCoordinates);
            setZoom(initialZoom);
            setForceRerender(prevState => !prevState); // Cambiar el estado para forzar la re-renderización
        }
    }, [selectedCity]);

    const mapCityToCoordinates = (city) => {
        const cityData = ciudades.find(c => c.estado === city)
        if (cityData) {
            return [cityData.latitud, cityData.longitud]
        } else {
            console.log("Coordenadas para city no entradas")
            return null
        }
    }

    return (
        <>
            <MapContainer
                key={`${cityCoordinates.lat}-${cityCoordinates.lng}`} // Utilizamos las coordenadas como parte de la clave para forzar la re-renderización
                center={cityCoordinates}
                zoom={zoom}
                style={{ width: "500px", height: "500px" }}
            >
                <TileLayer
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {selectedCity && (
                    <Marker position={cityCoordinates}>
                        <Popup>{selectedCity}</Popup>
                    </Marker>
                )}

                {terminales.map(terminales => (
                    <Marker key={terminales.id} position={[terminales.latitud, terminales.longitud]}>
                        <Popup>{terminales.nombre}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default Maps
