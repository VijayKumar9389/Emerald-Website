// components/common/SectionHeader.tsx

import React from 'react';
import './SectionHeader.scss';

interface SectionHeaderProps {
    title: string;
    description: string;
    center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, center = false }) => {
    return (
        <div className={`section-header ${center ? 'center' : ''}`}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default SectionHeader;