import React from 'react';
import './ListingMainPhoto.scss';

interface ListingMainPhotoProps {
    src: string;
}

const ListingMainPhoto: React.FC<ListingMainPhotoProps> = ({ src }) => (
    <div className="listing-main-photo">
        <img src={src} alt="Main Listing Photo" className="main-photo" />
    </div>
);

export default ListingMainPhoto;