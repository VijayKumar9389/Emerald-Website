import Hero from "./components/Hero/Hero.tsx";
import PropertyList from "./components/PropertyList/PropertyList.tsx";
import {listingData} from "../../data.ts";
import Services from "./components/Services/Services.tsx";
import QASection from "./components/QASection/QASection.tsx";
import Contact from "./components/Contact/Contact.tsx";
import './Home.Module.scss';
import Footer from "./components/Footer/Footer.tsx";


const Home = () => {

    return (
        <div className="home-container">
            <Hero/>
            <div className="home-body">
                <PropertyList listings={listingData}/>
                <Services/>
                <QASection/>
                <Contact/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;