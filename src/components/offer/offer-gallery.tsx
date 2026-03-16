import OfferGalleryItem from './offer-gallery-item';

type OfferGalleryProps = {
  images: string[];
}

export default function OfferGallery({images}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => <OfferGalleryItem key={image} image={image}/>)}
      </div>
    </div>
  );
}
