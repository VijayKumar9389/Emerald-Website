import React from 'react';
import {ListingDTO} from "../../../../data.ts";
import './PropertyList.Module.scss';
import {useNavigate} from "react-router-dom";
import {MdArrowOutward} from "react-icons/md";

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
            <div className="header-container">
                <h1>Explore Our Property Listings</h1>
                <p>Whether you're searching for a cozy apartment in the heart of Windsor or a spacious family home in
                    the suburbs, we have a range of rental properties to meet your needs.</p>
            </div>
            <div className="property-list">
                {listings.map((listing) => (
                    <div key={listing.id} className="property-card">
                        <div className="property-image">
                            <img src={listing.photos[0]} alt={listing.title}/>
                        </div>
                        <div className="property-details">
                        <h2 className="property-title">{listing.title}</h2>
                            <h4 className="property-price">{listing.price}</h4>
                            <div className="property-info">
                                <span>{listing.bedrooms} Beds</span> | <span>{listing.bathrooms} Baths</span> | <span>{listing.size}</span>
                            </div>
                            <button className="btn" onClick={() => selectListing(listing.id)}>View More <MdArrowOutward className="icon" /> </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyList;