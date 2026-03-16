type OfferGalleryItemProps = {
  image: string;
}

export default function OfferGalleryItem({image}: OfferGalleryItemProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  );
}
