import React from 'react';
import './Services.Module.scss';
import {FaBuilding, FaCalendarCheck, FaDollarSign, FaKey, FaLocationArrow, FaConciergeBell} from 'react-icons/fa';
import SectionHeader from "../../../../components/Header/SectionHeader.tsx";

export const skillsData = [
    {
        title: 'Prime Location Selection',
        description: 'Strategically located in the heart of Downtown Windsor along with the scenic district of Riverside and Fontainebleau.',
        icon: FaLocationArrow, // Location arrow icon for location selection
    },
    {
        title: 'Flexible Leasing Options',
        description: 'Enjoy flexible lease terms tailored to your business needs, with options for short-term and long-term rentals.',
        icon: FaCalendarCheck, // Calendar check icon for leasing options
    },
    {
        title: 'Competitive Pricing',
        description: 'Benefit from competitive pricing models that ensure you get the best value for your executive suite.',
        icon: FaDollarSign, // Dollar sign icon for pricing
    },
    {
        title: 'Secure Access',
        description: 'Experience peace of mind with top-notch security measures, including key card access and 24/7 surveillance.',
        icon: FaKey, // Key icon for secure access
    },
    {
        title: 'Professional Amenities',
        description: 'Access high-quality amenities such as meeting rooms, high-speed internet, and concierge services to support your business operations.',
        icon: FaConciergeBell, // Concierge bell icon for amenities
    },
    {
        title: 'Modern Facilities',
        description: 'Work in modern, fully-furnished spaces designed to create a productive and professional environment for you and your team.',
        icon: FaBuilding, // Building icon for modern facilities
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