// Importing the images as modules to ensure correct typing
import ImageOne from './assets/Vine.jpg';
import ImageTwo from './assets/Wyandotte.jpg';
import ImageThree from './assets/Condo.jpg';

import featureOne from './assets/vinecourt/featureOne.jpg';
import featureTwo from './assets/vinecourt/featureTwo.jpg';
import featureThree from './assets/vinecourt/featureThree.jpg';
import featureFour from './assets/vinecourt/featureFour.jpg';
import featureFive from './assets/vinecourt/featureFive.jpg';

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
    photos: string[]; // Assuming the photos are strings representing file paths or imports
};

// Define the listing data using the `Listing` type
export const listingData: ListingDTO[] = [
    {
        id: 1,
        title: "123 Vine Street, Springfield",
        price: "$1,200/month",
        description: "This charming three-bedroom home offers spacious living areas and a modern kitchen. Located in a quiet neighborhood with excellent schools and parks nearby. Perfect for families looking for a comfortable and convenient living space.",
        bedrooms: 3,
        bathrooms: 2,
        size: "1,500 sq ft",
        propertyType: "Condo",
        location: {
            neighborhood: "Greenwood",
            city: "Springfield",
            state: "IL",
            zip: "62704"
        },
        amenities: [
            "Central Air Conditioning",
            "Modern Kitchen",
            "Hardwood Floors",
            "Washer/Dryer Included",
            "Garage"
        ],
        features: [
            "Spacious Living Room",
            "Large Backyard",
            "Near Schools and Parks"
        ],
        nearbyAttractions: [
            "Springfield Zoo",
            "Greenwood Park",
            "Local Farmers Market"
        ],
        availability: "Available from October 1, 2024",
        contact: {
            name: "Jane Doe",
            phone: "(555) 123-4567",
            email: "janedoe@example.com"
        },
        photos: [
            ImageOne,
            featureOne,
            featureTwo,
            featureThree,
            featureFour,
            featureFive,
        ],
    },
    {
        id: 2,
        title: "456 Wyandotte Avenue, Springfield",
        price: "$950/month",
        description: "A cozy two-bedroom apartment with an open layout and plenty of natural light. Conveniently located near shopping centers and public transport. Ideal for young professionals or small families.",
        bedrooms: 2,
        bathrooms: 1,
        size: "1,200 sq ft",
        propertyType: "Condo",
        location: {
            neighborhood: "Downtown",
            city: "Springfield",
            state: "IL",
            zip: "62701"
        },
        amenities: [
            "Open Floor Plan",
            "Natural Light",
            "Near Shopping Centers",
            "Public Transport Access"
        ],
        features: [
            "Modern Design",
            "Convenient Location"
        ],
        nearbyAttractions: [
            "City Mall",
            "Public Library",
            "Coffee Shops"
        ],
        availability: "Available immediately",
        contact: {
            name: "John Smith",
            phone: "(555) 987-6543",
            email: "johnsmith@example.com"
        },
        photos: [
            ImageTwo,
            featureOne,
            featureTwo,
            featureThree,
            featureFour,
            featureFive,
        ],
    },
    {
        id: 3,
        title: "789 Vine Street, Springfield",
        price: "$1,500/month",
        description: "This modern two-bedroom unit features stylish finishes and a spacious layout. Enjoy the benefits of living in a vibrant neighborhood with easy access to amenities and entertainment options.",
        bedrooms: 2,
        bathrooms: 2,
        size: "1,200 sq ft",
        propertyType: "Condo",
        location: {
            neighborhood: "Downtown",
            city: "Springfield",
            state: "IL",
            zip: "62701"
        },
        amenities: [
            "Stylish Finishes",
            "Spacious Layout",
            "Fitness Center",
            "Rooftop Deck"
        ],
        features: [
            "Vibrant Neighborhood",
            "Close to Entertainment"
        ],
        nearbyAttractions: [
            "Springfield Museum",
            "Downtown Shopping District",
            "Restaurants and Cafés"
        ],
        availability: "Available from November 1, 2024",
        contact: {
            name: "Emily Johnson",
            phone: "(555) 654-3210",
            email: "emilyjohnson@example.com"
        },
        photos: [
            ImageThree,
            featureOne,
            featureTwo,
            featureThree,
            featureFour,
            featureFive,
        ],
    }
];