import WyandotteOne from './assets/Wyandotte/WyandotteOne.jpg'
import WyandotteOneHalf from './assets/Wyandotte/WyandotteOneHalf.jpg'
import WyandotteTwo from './assets/Wyandotte/WyandotteTwo.jpg'
import WyandotteThree from './assets/Wyandotte/WyandotteThree.jpg'
import WyandotteFour from './assets/Wyandotte/WyandotteFour.jpg'
import WyandotteFive from './assets/Wyandotte/WyandotteFive.jpg'

import ParkOne from './assets/Park/ParkOne.jpg';
import ParkTwo from './assets/Park/ParkTwo.jpg';
import ParkThree from './assets/Park/ParkThree.jpg';
import ParkFour from './assets/Park/ParkFour.jpg';
import ParkFive from './assets/Park/ParkFive.jpg';
import ParkSix from './assets/Park/ParkSix.jpg';
import ParkSeven from './assets/Park/ParkSeven.jpg';
import ParkEight from './assets/Park/ParkEight.jpg';
import ParkNine from './assets/Park/ParkNine.jpg';
import ParkTen from './assets/Park/ParkTen.jpg';
import ParkEleven from './assets/Park/ParkEleven.jpg';
import ParkTwelve from './assets/Park/ParkTwelve.jpg';

import VineOne from './assets/Vine/VineOne.jpg'
import VineTwo from './assets/Vine/VineTwo.jpg'
import VineThree from './assets/Vine/VineThree.jpg'
import VineFour from './assets/Vine/VineFour.jpg'
import VineFive from './assets/Vine/VineFive.jpg'
import VineSix from './assets/Vine/VineSix.jpg'
import VineSeven from './assets/Vine/VineSeven.jpg'
import VineEight from './assets/Vine/VineEight.jpg'
import VineNine from './assets/Vine/VineNine.jpg'
import VineTwelve from './assets/Vine/VineTwelve.jpg'
import VineThirteen from './assets/Vine/VineThirteen.jpg'
import VineFourteen from './assets/Vine/VineFourteen.jpg'
import VineFifteen from './assets/Vine/VineFifteen.jpg'
import VineSeventeen from './assets/Vine/VineSeventeen.jpg'
import VineEighteen from './assets/Vine/VineEighteen.jpg'

// Define the type for each listing object
export type ListingDTO = {
    id: number;
    title: string;
    price: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    propertyType: string;
    location: {
        neighborhood: string;
        city: string;
        state: string;
        zip: string;
    };
    amenities: string[];
    features: string[];
    nearbyAttractions: string[];
    availability: string;
    contact: {
        name: string;
        phone: string;
        email: string;
    };
    photos: string[];
};

// Define the listing data using the `ListingDTO` type
export const listingData: ListingDTO[] = [
    {
        id: 1,
        title: "8475 Wyandotte St E, Windsor, ON N8S 0A4",
        price: "$240/night",
        description: "High-end 2-bedroom condo in Windsor, with hardwood floors, ceramic bathrooms, full-size washer and dryer. Close to restaurants, supermarkets, shopping centers, and EC Row Expressway.",
        bedrooms: 2,
        bathrooms: 1,
        size: "950 sqft",
        propertyType: "Condo",
        location: {
            neighborhood: "High-End Area",
            city: "Windsor",
            state: "ON",
            zip: "N8S 0A4"
        },
        amenities: [
            "Air conditioning",
            "Heating",
            "Washer & Dryer",
            "TV",
            "Wifi",
            "Dedicated workspace",
            "Patio/Balcony",
            "Pool",
            "Gym",
            "Elevator"
        ],
        features: [
            "Hardwood floors",
            "Ceramic and porcelain bathrooms",
            "Close to shopping and restaurants",
            "Parking spot in front of entrance"
        ],
        nearbyAttractions: [
            "EC Row Expressway",
            "Windsor Marina",
            "Shopping district"
        ],
        availability: "Available immediately",
        contact: {
            name: "Vijay Kumar",
            phone: "+1 (306) 994-5031",
            email: "VijayMKumar2095@gmail.com"
        },
        photos: [
            WyandotteOne,
            WyandotteOneHalf,
            WyandotteTwo,
            WyandotteThree,
            WyandotteFour,
            WyandotteFive
        ],
    },
    {
        id: 2,
        title: "150 Park St W, Windsor, ON N9A 7A2",
        price: "$275/night",
        description: "Fully furnished 2-bedroom penthouse suite in downtown Windsor, smoke- and pet-free. Includes utilities, WiFi, pool & exercise room access, en-suite laundry, kitchen supplies, and allocated parking.",
        bedrooms: 2,
        bathrooms: 1.5,
        size: "1,240 sqft",
        propertyType: "Condo",
        location: {
            neighborhood: "Downtown",
            city: "Windsor",
            state: "ON",
            zip: "N9A 7A2"
        },
        amenities: [
            "Heating",
            "Washer & Dryer",
            "TV",
            "Wifi",
            "Pool",
            "Gym",
            "Shared hot tub",
            "Elevator",
            "Patio/Balcony"
        ],
        features: [
            "Penthouse level suite",
            "Private entrance",
            "Decorative fireplace",
            "All linens included"
        ],
        nearbyAttractions: [
            "Caesars Windsor",
            "Riverwalk",
            "Ambassador Bridge",
            "Detroit tunnel"
        ],
        availability: "Available immediately",
        contact: {
            name: "Vijay Kumar",
            phone: "+1 (306) 994-5031",
            email: "VijayMKumar2095@gmail.com"
        },
        photos: [
            ParkOne,
            ParkTwo,
            ParkThree,
            ParkFour,
            ParkFive,
            ParkSix,
            ParkSeven,
            ParkEight,
            ParkNine,
            ParkTen,
            ParkEleven,
            ParkTwelve
        ],
    },
    {
        id: 3,
        title: "2650 Vine Ct, Windsor, ON N8T 2X3",
        price: "$250/night",
        description: "4-bedroom townhouse near shopping and restaurants, with pool, party facility, and large backyard. Less than 5 min drive to EC Row Expressway, 10 min to airport, 15 min to bridge/tunnel. Refundable deposit $1,000.",
        bedrooms: 4,
        bathrooms: 2,
        size: "1,800 sqft",
        propertyType: "Townhouse",
        location: {
            neighborhood: "Residential Area",
            city: "Windsor",
            state: "ON",
            zip: "N8T 2X3"
        },
        amenities: [
            "Air conditioning",
            "Heating",
            "Washer & Dryer",
            "TV",
            "Wifi",
            "Pets allowed",
            "Shared pool",
            "Parking on premises",
            "Street parking"
        ],
        features: [
            "Huge backyard",
            "Walking distance to shopping and park",
            "Access to pool and party facility",
            "Refundable deposit $1,000"
        ],
        nearbyAttractions: [
            "EC Row Expressway",
            "Downtown Windsor",
            "Nearby schools and restaurants"
        ],
        availability: "Available immediately",
        contact: {
            name: "Vijay Kumar",
            phone: "+1 (306) 994-5031",
            email: "VijayMKumar2095@gmail.com"
        },
        photos: [
            VineOne,
            VineTwo,
            VineThree,
            VineFour,
            VineFive,
            VineSix,
            VineSeven,
            VineEight,
            VineNine,
            VineTwelve,
            VineThirteen,
            VineFourteen,
            VineFifteen,
            VineSeventeen,
            VineEighteen
        ],
    }
];