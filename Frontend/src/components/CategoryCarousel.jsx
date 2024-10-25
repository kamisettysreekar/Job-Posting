import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

const CategoryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically cycle through carousel items
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % category.length);
        }, 3000);  // Change slide every 3 seconds

        return () => clearInterval(interval);  // Cleanup on unmount
    }, []);

    return (
        <div className="relative overflow-hidden w-full max-w-xl mx-auto my-20">
            <div
                className="flex transition-transform ease-in-out duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`, // Moves carousel items
                }}
            >
                {category.map((cat, index) => (
                    <div
                        key={index}
                        className="min-w-full flex justify-center items-center bg-blue"
                    >
                        <Button className="rounded-full px-6 py-2 border border-red-400">
                            {cat}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCarousel;