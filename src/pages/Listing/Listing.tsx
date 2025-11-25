import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { listingData } from '../../data';
import ListingMainPhoto from "./components/ListingMainPhoto/ListingMainPhoto.tsx";
import ListingPhotos from "./components/ListingPhotos/ListingPhotos.tsx";
import ListingDetails from "./components/ListingDetails/ListingDetails.tsx";
import ListingInfo from "./components/ListingInfo/ListingInfo.tsx";
import PopupDialog from './components/PopupDialog/PopupDialog.tsx';
import './Listing.Module.scss';
import { MdArrowOutward, MdHome } from "react-icons/md";

const ListingPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const listingId = parseInt(id || '');
    const listing = listingData.find(item => item.id === listingId);
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

    return (
        <div className="listing-container">
            <div className="listing-wrapper">
                <div className="listing-header">
                    <nav className="breadcrumb">
                        <span className="breadcrumb-link" onClick={() => navigate('/')}>
                            <MdHome size={18} style={{ marginRight: '0.25rem' }} />
                            Home
                        </span>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">Property Listing</span>
                    </nav>
                </div>

                <div className="listing-content">

                    <ListingMainPhoto src={mainPhoto} />

                    <ListingPhotos
                        photos={listing.photos}
                        mainPhoto={mainPhoto}
                        onPhotoClick={setMainPhoto}
                    />

                    <ListingDetails
                        title={listing.title}
                        price={listing.price}
                        description={listing.description}
                        bedrooms={listing.bedrooms}
                        bathrooms={listing.bathrooms}
                        size={listing.size}
                        propertyType={listing.propertyType}
                    />

                    <ListingInfo
                        features={listing.features}
                        amenities={listing.amenities}
                        nearbyAttractions={listing.nearbyAttractions}
                    />

                    {/* ⭐ Address overlay inside map */}
                    <div className="map-section">
                        <h1 className="map-title">{listing.title}</h1>

                        <iframe
                            src={listing.mapEmbedUrl}
                            className="map-iframe"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>

            <div className="footer">
                <button className="btn" onClick={() => setIsDialogOpen(true)}>
                    Contact Agent <MdArrowOutward className="icon" />
                </button>
            </div>

            <PopupDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                listing={listing.title}
            />
        </div>
    );
};

export default ListingPage;