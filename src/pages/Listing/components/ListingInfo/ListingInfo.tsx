import React from 'react';
import { FaStar, FaCogs, FaMapMarkerAlt } from 'react-icons/fa';
import './ListingInfo.scss';

interface ListingInfoProps {
    features: string[];
    amenities: string[];
    nearbyAttractions: string[];
}

const ListingInfo: React.FC<ListingInfoProps> = ({ features, amenities, nearbyAttractions }) => (
    <div className="listing-info">
        <div className="section">
            <div className="section-header">
                <FaStar className="section-icon" />
                <h4>Features</h4>
            </div>
            <ul className="listing-features">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
        <div className="section">
            <div className="section-header">
                <FaCogs className="section-icon" />
                <h4>Amenities</h4>
            </div>
            <ul className="listing-amenities">
                {amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                ))}
            </ul>
        </div>
        <div className="section">
            <div className="section-header">
                <FaMapMarkerAlt className="section-icon" />
                <h4>Nearby Attractions</h4>
            </div>
            <ul className="listing-attractions">
                {nearbyAttractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                ))}
            </ul>
        </div>
    </div>
);

export default ListingInfo;