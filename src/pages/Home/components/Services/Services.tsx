import React from 'react';
import './Services.Module.scss';
import {FaBuilding, FaCalendarCheck, FaDollarSign, FaKey, FaLocationArrow, FaConciergeBell} from 'react-icons/fa';
import SectionHeader from "../../../../components/Header/SectionHeader.tsx";

export const skillsData = [
    {
        title: 'Prime Windsor Locations',
        description: 'Our properties are strategically located near downtown, EC Row Expressway, shopping districts, and scenic waterfront areas, ensuring convenience and accessibility.',
        icon: FaLocationArrow, // Location arrow icon
    },
    {
        title: 'Flexible Stay Options',
        description: 'Choose from short-term or long-term stays with rentals that accommodate different needs, whether a quick city visit or an extended stay.',
        icon: FaCalendarCheck, // Calendar check icon
    },
    {
        title: 'Affordable & Competitive Rates',
        description: 'Enjoy high-quality accommodations at competitive pricing, offering the best value for comfort, amenities, and location.',
        icon: FaDollarSign, // Dollar sign icon
    },
    {
        title: 'Safe & Secure',
        description: 'All properties feature home security measures including exterior cameras in common areas, smoke and carbon monoxide alarms, and secure entry points.',
        icon: FaKey, // Key icon
    },
    {
        title: 'Fully Equipped Amenities',
        description: 'From modern kitchens with full appliances to in-unit laundry, WiFi, entertainment systems, and patios/balconies, each property is ready for a comfortable stay.',
        icon: FaConciergeBell, // Concierge bell icon
    },
    {
        title: 'Comfortable & Modern Spaces',
        description: 'Our rentals offer stylish and functional living areas, including condos, penthouses, and townhouses with air conditioning, heating, and well-designed interiors.',
        icon: FaBuilding, // Building icon
    },
];

// Skill Component
const Skill = ({title, description, icon: Icon}: { title: string; description: string; icon: React.ElementType }) => {
    return (
        <div className="skill-card" data-aos="fade-up">
            <div className="skill-icon" data-aos="zoom-in">
                <Icon/>
            </div>
            <div className="skill-content" data-aos="fade-up">
                <h5 className="skill-title">{title}</h5>
                <p className="skill-description">{description}</p>
            </div>
        </div>
    );
};

// Skills Component
const Skills = () => {

    return (
        <div className="skills-container">
            <SectionHeader
                title="Why Emerald Executive Housing?"
                description="we are unwavering in our dedication to exceeding our customers' expectations and ensuring their happiness."
            />
            <div className="skills-wrapper">
                {skillsData.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;