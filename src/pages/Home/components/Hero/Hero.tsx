import './Hero.Module.scss';
import promoOne from '../../../../assets/promo/promoOne.jpg';
import promoTwo from '../../../../assets/promo/promoTwo.jpg';
import promoThree from '../../../../assets/promo/promoThree.jpg';
import Logo from "../../../../assets/Logo.png";
import { useState, useEffect } from 'react';

const TRANSITION_DURATION = 500;
const SLIDE_INTERVAL = 5000;

const sections = [
    {
        title: 'Elegance Redefined: Premium Suites in Windsor',
        image: promoOne,
        alt: 'Premium suite with modern interior in Windsor'
    },
    {
        title: 'Experience Opulence: Luxury Living in Windsor',
        image: promoTwo,
        alt: 'Luxury interior with vibrant lighting'
    },
    {
        title: 'Find Your Sanctuary: The Perfect Suite Awaits',
        image: promoThree,
        alt: 'Calm and cozy suite perfect for relaxing'
    }
];

function Hero() {
    const [current, setCurrent] = useState(0);
    const [transition, setTransition] = useState('fade-in');

    const goToSlide = (index: number) => {
        setTransition('fade-out');
        setTimeout(() => {
            setCurrent(index);
            setTransition('fade-in');
        }, TRANSITION_DURATION);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            goToSlide((current + 1) % sections.length);
        }, SLIDE_INTERVAL);

        return () => clearInterval(intervalId);
    }, [current]);

    const { title, image, alt } = sections[current];

    return (
        <div className="hero-wrapper">
            <div className="hero-icon">
                <img src={Logo} className="logo" alt="Company Logo" />
            </div>

            <div className="hero-content">
                <h2 className="hero-title">{title}</h2>
            </div>

            <div
                className={`hero-slide ${transition}`}
                style={{ backgroundImage: `url(${image})` }}
                aria-label={alt}
            />

            <div className="dot-indicators">
                {sections.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hero;