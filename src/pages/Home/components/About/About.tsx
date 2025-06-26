import './About.Module.scss';
import promoOne from '../../../../assets/promo/promoOne.jpg';
import promoTwo from '../../../../assets/promo/promoTwo.jpg';
import promoThree from '../../../../assets/promo/promoThree.jpg';
import { useState, useEffect } from 'react';

const TRANSITION_DURATION = 500;
const SLIDE_INTERVAL = 5000;

const sections = [
    {
        image: promoOne,
        alt: 'Premium suite with modern interior in Windsor'
    },
    {
        image: promoTwo,
        alt: 'Luxury interior with vibrant lighting'
    },
    {
        image: promoThree,
        alt: 'Calm and cozy suite perfect for relaxing'
    }
];

function About() {
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

    const { image, alt } = sections[current];

    return (
        <div className="about-wrapper">
            <div className="about-content">
                <h2>Tailored Rentals for Insurance Providers</h2>
                <p>
                    We specialize in temporary housing solutions for insurance companies and their clients.
                    From emergency relocations to luxury short-term stays, our properties are inspected and ready
                    for immediate placement. Partner with us to simplify client accommodations with care and speed.
                </p>
            </div>

            <div className="about-slide-container">
                <div
                    className={`about-slide ${transition}`}
                    style={{ backgroundImage: `url(${image})` }}
                    aria-label={alt}
                />
                <div className="about-indicators">
                    {sections.map((_, index) => (
                        <span
                            key={index}
                            className={`about-dot ${index === current ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;