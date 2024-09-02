import './Hero.Module.scss';
import promoOne from '../../../../assets/promo/promoOne.jpg';
import promoTwo from '../../../../assets/promo/promoTwo.jpg';
import promoThree from '../../../../assets/promo/promoThree.jpg';
import { useState, useEffect } from 'react';
import Logo from "../../../../assets/Logo.png";

const sections = [
    {
        title: 'Elegance Redefined: Premium Suites in Windsor',
        image: promoOne
    },
    {
        title: 'Experience Opulence: Luxury Living in Windsor',
        image: promoTwo
    },
    {
        title: 'Find Your Sanctuary: The Perfect Suite Awaits',
        image: promoThree
    }
];

function Hero() {
    const [currentSection, setCurrentSection] = useState(0);
    const [transitionClass, setTransitionClass] = useState('fade-in');

    useEffect(() => {
        const timer = setInterval(() => {
            setTransitionClass('fade-out'); // Start fade-out effect
            setTimeout(() => {
                setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
                setTransitionClass('fade-in'); // Start fade-in effect
            }, 500); // Duration should match the transition time
        }, 5000); // Change the slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const handleDotClick = (index: number) => {
        setTransitionClass('fade-out'); // Start fade-out effect
        setTimeout(() => {
            setCurrentSection(index);
            setTransitionClass('fade-in'); // Start fade-in effect
        }, 500); // Duration should match the transition time
    };

    return (
        <div className="hero-container">
            <img src={Logo} className="logo" alt="Company Logo"/>

            <div className="hero-wrapper">
                <div className="hero-content">
                    <h1 className="hero-title">{sections[currentSection].title}</h1>
                </div>

                <div
                    className={`hero-slide ${transitionClass}`}
                    style={{
                        backgroundImage: `url(${sections[currentSection].image})`,
                    }}
                />

                <div className="dot-indicators">
                    {sections.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentSection === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="custom-shape-divider-bottom-1725074822">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}

export default Hero;