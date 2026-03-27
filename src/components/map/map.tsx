import { useEffect, useRef } from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import { OfferForCardType } from '../../mosks/types/offer';
import { DEFAULT_CITY, Markers } from '../../const';
import { CityType } from '../../mosks/types/city';

type MapProps = {
  offersCard: OfferForCardType[];
  city: CityType;
  currentCardId: string | null;
  className: string | undefined;
};
const defaultCustomIcon = leaflet.icon({
  iconUrl: Markers.URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: Markers.URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

export default function Map({
  offersCard,
  city,
  currentCardId,
  className
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);

  if(!city) {
    city = DEFAULT_CITY;
  }

  const offersOfCurrentCity = offersCard.filter(
    (offer) => offer.city.name === city.name,
  );

  const map = useMap({ city, mapRef });

  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect((): void => {
    if(map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      offersOfCurrentCity.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon:
                point.id === currentCardId
                  ? currentCustomIcon
                  : defaultCustomIcon,
            },
          )
          .addTo(markerLayer.current);
      });
    }
  }, [map, offersCard, currentCardId, offersOfCurrentCity]);

  return <section className={className} ref={mapRef}></section>;
}
