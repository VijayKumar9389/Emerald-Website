import './Hero.Module.scss';
import promoOne from '../../../../assets/promo/promoOne.jpg';
import promoTwo from '../../../../assets/promo/promoTwo.jpg';
import promoThree from '../../../../assets/promo/promoThree.jpg';
import { useState, useEffect } from 'react';
import logo from "../../../../assets/Logo.png";

const TRANSITION_DURATION = 500;
const SLIDE_INTERVAL = 5000;

const sections = [
    {
        image: promoOne,
    },
    {
        image: promoTwo,
    },
    {
        image: promoThree,
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

    const { image  } = sections[current];

    return (
        <div>
            <header className="site-header">
                <img src={logo} alt="Logo" className="site-logo" />
            </header>
        <div className="hero-wrapper">
            <div className="hero-content">
                <h1>Short-term to medium-term rentals</h1>
                <p>We specialize in renting to people between moves, corporations, insurance companies, and business travelers.</p>
            </div>

            <div
                className={`hero-slide ${transition}`}
                style={{ backgroundImage: `url(${image})` }}
                aria-label={"image"}
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
        </div>

    );
}

export default Hero;