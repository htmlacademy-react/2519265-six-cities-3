import { useEffect, useRef } from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map';
import { OfferForCardType } from '../../types/offer';
import { Markers } from '../../const';
import { CityType } from '../../types/city';

type MapProps = {
  offersCards: OfferForCardType[];
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
  offersCards,
  city,
  currentCardId,
  className
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const offersOfCurrentCity = offersCards.filter(
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
    if (map && markerLayer.current) {
      markerLayer.current.clearLayers();
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
  }, [map, offersCards, currentCardId, offersOfCurrentCity]);

  return <section className={className} ref={mapRef}></section>;
}
