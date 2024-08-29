import React from 'react';
import './ListingPhotos.Module.scss';

interface ListingPhotosProps {
    photos: string[];
    mainPhoto: string;
    onPhotoClick: (photo: string) => void;
}

const ListingPhotos: React.FC<ListingPhotosProps> = ({ photos, mainPhoto, onPhotoClick }) => (
    <div className="listing-photos">
        {photos.map((photo, index) => (
            <img
                key={index}
                src={photo}
                alt={`Listing Photo ${index + 1}`}
                className={`listing-photo ${photo === mainPhoto ? 'selected' : ''}`}
                onClick={() => onPhotoClick(photo)}
            />
        ))}
    </div>
);

export default ListingPhotos;