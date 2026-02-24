import OfferGalleryItem from './offer-gallery-item';

export default function OfferGallery(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        <OfferGalleryItem />
        <OfferGalleryItem />
        <OfferGalleryItem />
        <OfferGalleryItem />
        <OfferGalleryItem />
      </div>
    </div>
  );
}
