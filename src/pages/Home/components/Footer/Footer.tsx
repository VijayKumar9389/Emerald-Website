import './Footer.Module.scss';
// import Slider from "../Slider/Slider.tsx";

const Footer = () => {
    return (
        <div className="home-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Or</h3>
                    <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Emerald Executive Housing. All rights reserved.</p>
            </div>
            {/*<Slider />*/}
        </div>
    );
};

export default Footer;