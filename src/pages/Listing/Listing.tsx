import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { listingData } from '../../data';
import BackButton from "./components/BackButton/BackButton.tsx";
import ListingMainPhoto from "./components/ListingMainPhoto/ListingMainPhoto.tsx";
import ListingPhotos from "./components/ListingPhotos/ListingPhotos.tsx";
import ListingDetails from "./components/ListingDetails/ListingDetails.tsx";
import ListingInfo from "./components/ListingInfo/ListingInfo.tsx";
import PopupDialog from './components/PopupDialog/PopupDialog.tsx';
import './Listing.Module.scss';
import { MdArrowOutward } from "react-icons/md";

const ListingPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const listingId = parseInt(id || '');
    const listing = listingData.find((item) => item.id === listingId);
    const navigate = useNavigate();

    const [mainPhoto, setMainPhoto] = useState<string>('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if (listing && listing.photos.length > 0) {
            setMainPhoto(listing.photos[0]);
        }
    }, [listing]);

    if (!listing) {
        return <div>Listing not found</div>;
    }

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="listing-container">
            <div className="listing-content">
                <BackButton onClick={() => navigate(-1)} />
                <ListingMainPhoto src={mainPhoto} />
                <ListingPhotos photos={listing.photos} mainPhoto={mainPhoto} onPhotoClick={setMainPhoto} />
                <h1 className="listing-title">{listing.title}</h1>
                <h3 className="listing-price">{listing.price}</h3>
                <div className="listing-details">
                    <p className="listing-description">{listing.description}</p>
                    <ListingDetails
                        bedrooms={listing.bedrooms}
                        bathrooms={listing.bathrooms}
                        size={listing.size}
                        propertyType={listing.propertyType}
                    />
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.8181801692617!2d-104.6496318367994!3d50.46311036737269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e8745881b8d%3A0xac6b2b46d2a22de2!2s4800%204%20Ave%2C%20Regina%2C%20SK%20S4T%200J2!5e0!3m2!1sen!2sca!4v1723402795268!5m2!1sen!2sca"
                    width="600"
                    className="map-iframe"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <ListingInfo
                    features={listing.features}
                    amenities={listing.amenities}
                    nearbyAttractions={listing.nearbyAttractions}
                />
            </div>
            <div className="footer">
                <button className="btn" onClick={handleDialogOpen}>Contact Agent <MdArrowOutward className="icon" /></button>
            </div>

            {/* Popup Dialog */}
            <PopupDialog isOpen={isDialogOpen} onClose={handleDialogClose} listing={listing.title} />
        </div>
    );
};

export default ListingPage;