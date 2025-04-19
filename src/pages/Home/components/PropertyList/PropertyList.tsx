import React from 'react';
import {ListingDTO} from "../../../../data.ts";
import './PropertyList.Module.scss';
import {useNavigate} from "react-router-dom";
import {MdArrowOutward} from "react-icons/md";
import SectionHeader from "../../../../components/Header/SectionHeader.tsx";

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
                    <div key={listing.id} className="property-card">
                        <div className="property-image">
                            <img src={listing.photos[0]} alt={listing.title}/>
                        </div>
                        <div className="property-details">
                            <div>
                                <h5 className="property-title">{listing.title}</h5>
                                <h6 className="property-price">{listing.price}</h6>
                            </div>
                            <div className="property-info">
                                <span>{listing.bedrooms} Beds</span> <span>{listing.bathrooms} Baths</span>
                                <span>{listing.size}</span>
                            </div>
                            <button className="btn" onClick={() => selectListing(listing.id)}>View More <MdArrowOutward
                                className="icon"/>
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyList;