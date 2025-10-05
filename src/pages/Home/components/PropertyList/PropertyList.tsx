import React from 'react';
import {ListingDTO} from "../../../../data.ts";
import './PropertyList.Module.scss';
import {useNavigate} from "react-router-dom";
import SectionHeader from "../../../../components/Header/SectionHeader.tsx";
import {FaBath, FaBed} from "react-icons/fa";
import {FaTableList} from "react-icons/fa6";

interface PropertyListProps {
    listings: ListingDTO[];
}

const PropertyList: React.FC<PropertyListProps> = ({listings}) => {
    const navigate = useNavigate();

    const selectListing = (listingId: number): void => {
        navigate(`/${listingId}`);
        window.scrollTo(0, 0);
    };


    return (
        <div className="property-list-container">
            <SectionHeader
                title="Explore Our Property Listings"
                description="Whether you're searching for a cozy apartment in the heart of Windsor or a spacious family home in the suburbs, we have a range of rental properties to meet your needs."
            />
            <div className="property-list">
                {listings.map((listing) => (
                    <div key={listing.id} className="property-card" onClick={() => selectListing(listing.id)}>
                        <div className="property-image">
                            <img src={listing.photos[0]} alt={listing.title}/>

                        </div>
                        <div className="property-details">
                            <div className="detail-wrapper">
                                <h5 className="property-title">{listing.title}</h5>
                                <h6 className="property-price">{listing.price}</h6>
                                <p className="property-description">{listing.description}</p>
                                <div className="property-info-grid">
                                    <div className="info-item">
                                        <FaBed className="icon" />
                                        <span>{listing.bedrooms} Beds</span>
                                    </div>
                                    <div className="info-item">
                                        <FaBath className="icon" />
                                        <span>{listing.bathrooms} Baths</span>
                                    </div>
                                    <div className="info-item">
                                        <FaTableList className="icon" />
                                        <span>{listing.size} sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyList;