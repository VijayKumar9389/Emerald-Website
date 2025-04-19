import React from 'react';
import { FaStar, FaCogs, FaMapMarkerAlt } from 'react-icons/fa';
import './ListingInfo.scss';

interface ListingInfoProps {
    features: string[];
    amenities: string[];
    nearbyAttractions: string[];
}

const ListingInfo: React.FC<ListingInfoProps> = ({ features, amenities, nearbyAttractions }) => {
    const sections = [
        { title: 'Features', icon: <FaStar />, items: features },
        { title: 'Amenities', icon: <FaCogs />, items: amenities },
        { title: 'Nearby Attractions', icon: <FaMapMarkerAlt />, items: nearbyAttractions },
    ];

    return (
        <div className="listing-info">
            {sections.map((section, idx) => (
                <div className="listing-info__section" key={idx}>
                    <div className="listing-info__section-header">
                        <h4 className="listing-info__section-title">{section.title}</h4>
                        <div className="listing-info__section-icon">{section.icon}</div>
                    </div>
                    <ul className="listing-info__list">
                        {section.items.map((item, index) => (
                            <li key={index} className="listing-info__list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ListingInfo;