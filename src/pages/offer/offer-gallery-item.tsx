import { memo } from 'react';

type OfferGalleryItemProps = {
  image: string;
}

export const OfferGalleryItem = memo(({image}: OfferGalleryItemProps): JSX.Element =>
  (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  ));

OfferGalleryItem.displayName = 'OfferGalleryItem';
