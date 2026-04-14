import OfferGalleryItem from './offer-gallery-item';

type OfferGalleryProps = {
  images: string[];
}

export default function OfferGallery({images}: OfferGalleryProps): JSX.Element {
  const imagesForRendering = images.slice(0, 6);
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imagesForRendering.map((image) => <OfferGalleryItem key={image} image={image}/>)}
      </div>
    </div>
  );
}
