import React from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHome } from 'react-icons/fa';
import './ListingDetails.scss';

interface ListingDetailsProps {
    title: string;
    price: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    propertyType: string;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({
                                                           title,
                                                           price,
                                                           description,
                                                           bedrooms,
                                                           bathrooms,
                                                           size,
                                                           propertyType,
                                                       }) => {
    const renderDetailItem = (
        Icon: React.ComponentType<{ className?: string }>,
        label: string,
        value: string | number
    ) => (
        <div className="stat-card">
            <Icon className="stat-card__icon" />
            <p className="stat-card__label"><strong>{value}</strong> {label}</p>
        </div>
    );

    return (
        <div className="listing-detail-overview">
            <h1 className="listing-title">{title}</h1>
            <h3 className="listing-price">{price}</h3>
            <p className="listing-description">{description}</p>
            <div className="listing-stats">
                {renderDetailItem(FaBed, 'Bedrooms', bedrooms)}
                {renderDetailItem(FaBath, 'Bathrooms', bathrooms)}
                {renderDetailItem(FaRulerCombined, 'Size', size)}
                {renderDetailItem(FaHome, 'Type', propertyType)}
            </div>
        </div>
    );
};

export default ListingDetails;