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