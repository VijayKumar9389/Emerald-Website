import React from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import './ListingDetails.scss';

interface ListingDetailsProps {
    title: string;
    price: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    size: string;  // "size" can be passed as a string if it contains units (e.g., "1500 sq ft")
    propertyType: string;
}


const ListingDetails: React.FC<ListingDetailsProps> = ({
                                                           title,
                                                           price,
                                                           description,
                                                           bedrooms,
                                                           bathrooms,
                                                           size,
                                                       }) => {
    const renderDetailItem = (
        Icon: React.ComponentType<{ className?: string }>,
        label: string,
        value: string | number
    ) => (
        <div className="stat-card">
            <Icon className="stat-card__icon" />
            <div className="stat-card__label">
                <strong>{value}</strong> {label}
            </div>
        </div>
    );

    return (
        <div className="listing-detail-overview">

            <div>
                <h1 className="listing-title">{title}</h1>
                <h3 className="listing-price">{price}</h3>
                <p className="listing-description">{description}</p>
            </div>

            <div className="stat-card-container">
                {renderDetailItem(FaBed, 'Bedrooms', `${bedrooms} Beds`)}
                {renderDetailItem(FaBath, 'Bathrooms', `${bathrooms} Baths`)}
                {renderDetailItem(FaRulerCombined, 'Size', size)}
            </div>
        </div>
    );
};

export default ListingDetails;