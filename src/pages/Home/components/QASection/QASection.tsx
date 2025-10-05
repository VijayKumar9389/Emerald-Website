import React, { useState } from 'react';
import './QASection.Module.scss';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import the plus and minus icons
import SectionHeader from "../../../../components/Header/SectionHeader.tsx";

interface QA {
    question: string;
    answer: string;
}

const QASection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const questions: QA[] = [
        {
            question: "What types of properties do you offer?",
            answer: "We offer a variety of rental properties including condos, penthouses, and townhouses. Each is fully furnished and designed for comfort, whether for short-term or long-term stays."
        },
        {
            question: "Where are your properties located?",
            answer: "Our properties are strategically located across Windsor, including downtown, near EC Row Expressway, shopping districts, the waterfront, and close to key attractions like Caesars Windsor and major bridges."
        },
        {
            question: "What amenities are included?",
            answer: "All rentals come equipped with modern kitchens, in-unit washer and dryer, WiFi, air conditioning, heating, TV, and essentials like towels, linens, and toiletries. Some properties also include pools, gyms, and balconies or patios."
        },
        {
            question: "Can I stay short-term or long-term?",
            answer: "Yes! We accommodate both short-term stays and long-term rentals, with flexible lease options tailored to your needs."
        },
        {
            question: "Are your properties safe and secure?",
            answer: "Absolutely. Properties feature smoke and carbon monoxide alarms, exterior cameras in common areas, and secure entry points to ensure your peace of mind."
        },
        {
            question: "Is parking available?",
            answer: "Yes. Most properties include free on-premises parking, and some offer additional paid or street parking options for guests."
        },
        {
            question: "Are pets allowed?",
            answer: "Some of our properties allow pets or assistance animals. Please check the listing details for each property before booking."
        },
        {
            question: "How close are the properties to attractions and conveniences?",
            answer: "Our rentals are within walking distance or a short drive to restaurants, shopping centers, parks, hospitals, and transit hubs. They offer quick access to bridges and tunnels connecting to Detroit."
        },
    ];

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="qa-section">
            <SectionHeader
                title="Frequently Asked Questions"
                description="Got questions about our rental properties or the leasing process? We've got answers. Below you'll find some of the most common inquiries from our renters."
            />
            <div className="qa-container">
                {questions.map((qa, index) => (
                    <div
                        key={index}
                        className={`qa-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className={`qa-question ${activeIndex === index ? 'active' : ''}`}>
                            <h5>{qa.question}</h5>
                            {activeIndex === index ? (
                                <FaMinus className="icon" /> // Display minus when answer is open
                            ) : (
                                <FaPlus className="icon" /> // Display plus when answer is closed
                            )}
                        </div>
                        <div className={`qa-answer ${activeIndex === index ? 'active' : ''}`}>
                            {qa.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QASection;