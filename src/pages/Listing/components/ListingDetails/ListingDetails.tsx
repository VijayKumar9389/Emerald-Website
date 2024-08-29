import React from 'react';
import {FaBed, FaBath, FaRulerCombined} from 'react-icons/fa6';
import './ListingDetails.scss';
import {FaHome} from "react-icons/fa";

interface ListingDetailsProps {
    bedrooms: number;
    bathrooms: number;
    size: string;
    propertyType: string;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({bedrooms, bathrooms, size, propertyType}) => {
    const renderDetailItem = (
        Icon: React.ComponentType<{ className?: string }>,
        label: string,
        value: string | number
    ) => (
        <div className="stat-card">
            <Icon className="stat-card__icon"/>
            <p className="stat-card__label"><strong>{value}</strong> {label}</p>
        </div>
    );

    return (
        <div className="listing-detail-overview">
            {renderDetailItem(FaBed, 'Bedrooms', bedrooms)}
            {renderDetailItem(FaBath, 'Bathrooms', bathrooms)}
            {renderDetailItem(FaRulerCombined, 'Size', size)}
            {renderDetailItem(FaHome, 'Type', propertyType)}
        </div>
    );
};

export default ListingDetails;