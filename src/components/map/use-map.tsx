import {useEffect, useState, useRef} from 'react';
import leaflet, {Map} from 'leaflet';
import { CityType } from '../../types/city';

type UseMapProps = {
  city: CityType;
  mapRef: React.RefObject<HTMLDivElement>;
}

export default function useMap({city, mapRef}: UseMapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);


  useEffect(() => {
    if(mapRef.current !== null && !isRenderedRef.current) {
      const {latitude, longitude, zoom} = city.location;

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
        scrollWheelZoom: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, city]);

  return map;
}
