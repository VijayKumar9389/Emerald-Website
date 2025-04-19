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
            answer: "We offer a wide range of rental properties, including condominiums, townhouses, apartments, and single-family homes, all located in prime neighborhoods."
        },
        {
            question: "How can I schedule a property viewing?",
            answer: "Scheduling a property viewing is easy! Simply contact us via phone or email, and one of our agents will arrange a convenient time for you to visit the property."
        },
        {
            question: "What is the process for applying to rent a property?",
            answer: "To apply, complete our online application form and submit the required documents, including proof of income and references. Once your application is reviewed, we will contact you with the next steps."
        },
        {
            question: "Are utilities included in the rent?",
            answer: "Utilities are typically not included in the rent, but we will provide detailed information on which utilities are covered and which are the tenant’s responsibility."
        },
        {
            question: "What are your lease terms and conditions?",
            answer: "Our standard lease terms range from 12 to 24 months. We also offer flexible lease options for certain properties. Please contact us for specific details on the property you're interested in."
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
                            <h6>{qa.question}</h6>
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