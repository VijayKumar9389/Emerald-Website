import React from 'react';
import './Services.Module.scss';
import { FaBuilding, FaCalendarCheck, FaDollarSign, FaKey, FaLocationArrow, FaConciergeBell } from 'react-icons/fa';

export const skillsData = [
    {
        title: 'Prime Location Selection',
        description: 'Choose from a variety of prestigious locations for your executive suite to elevate your business presence.',
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
                <h4 className="skill-title">{title}</h4>
                <p className="skill-description">{description}</p>
            </div>
        </div>
    );
};

// Skills Component
const Skills = () => {

    return (
        <div className="skills-container">
            <div className="header-container">
                <h1>Services We Offer</h1>
                <p>Renters in Windsor looking for a condominium, townhouse, apartment, or house rental have come to the
                    right place.</p>
            </div>
            <div className="skills-wrapper">
                {skillsData.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;