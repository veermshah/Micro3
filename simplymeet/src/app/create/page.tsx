"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const validDollarFormat = /^\$?\d+(\.\d{1,2})?$/;

export default function Create() {
    const router = useRouter();

    const [price, setPrice] = useState("$");
    const [selectedLevel, setSelectedLevel] = useState(null);

    const handleButtonClickLevel = (level) => {
        setSelectedLevel(level);
    };

    const buttonClasses = (level) =>
        `px-4 py-2 mx-2 font-bold text-gray-500 rounded ${
            selectedLevel === level ? "bg-customBlue text-white" : "bg-gray-200"
        }`;

    const handleChange = (event) => {
        const inputValue = event.target.value;

        // Ensure dollar sign is always at the beginning
        if (
            inputValue.startsWith("$") &&
            (inputValue === "$" || validDollarFormat.test(inputValue))
        ) {
            setPrice(inputValue);
        }
    };

    const handleKeyDown = (event) => {
        // Prevent deleting the dollar sign
        if (event.key === "Backspace" && price === "$") {
            event.preventDefault();
        }
    };

    const justifyOptions = [
        { name: "Light", code: "NY" },
        { name: "Moderate", code: "RM" },
        { name: "Heavy", code: "LDN" },
    ];

    return (
        <div>
            <div className="flex justify-center mt-16">
                <motion.button
                    whileHover={{ rotateZ: 5 }}
                    whileTap={{ rotateZ: -5, scale: 0.9 }}
                    className="text-6xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-b from-customBlue to-blue-300"
                    onClick={() => router.push("/")} // Use onClick instead of onTap
                >
                    SimplyMeet
                </motion.button>
            </div>
            <div className="flex mt-16 mx-16 justify-between items-center">
                <motion.input
                    whileFocus={{ scale: 1.025 }}
                    className="w-3/4 px-4 py-2 text-2xl font-bold border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-customBlue"
                    placeholder="Enter your event name"
                />
                <motion.button
                    whileHover={{ rotateZ: 5 }}
                    whileTap={{ rotateZ: -5, scale: 0.9 }}
                    className="text-customBlue font-sans border-2 border-customBlue rounded-lg px-5 py-1 text-xl font-bold flex items-center hover:bg-customBlue hover:text-white"
                >
                    Create
                </motion.button>
            </div>
            <div>
                <h1 className="mx-16 mt-16 font-sans text-xl text-gray-500 font-bold">
                    What's your event about?
                </h1>
                <motion.input
                    whileFocus={{ scale: 1.025 }}
                    className="mt-4 mx-16 w-3/4 px-4 py-2 text-md font-bold border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-customBlue"
                    placeholder="Describe your event"
                />
                <h1 className="mx-16 mt-16 font-sans text-xl text-gray-500 font-bold">
                    What times would you like to meet between?
                </h1>
            </div>
            <div className="flex mt-4 mx-16 items-center">
                <h1 className="text-gray-500 font-bold mx-5 text-md font-sans">
                    From
                </h1>
                <motion.input
                    whileFocus={{ scale: 1.025 }}
                    className="w-1/12 px-4 py-2 text-md font-bold border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-customBlue"
                    placeholder="9 am"
                />
                <h1 className="text-gray-500 font-bold mx-5 text-md font-sans">
                    to
                </h1>
                <motion.input
                    whileFocus={{ scale: 1.025 }}
                    className="w-1/12 px-4 py-2 text-md font-bold border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-customBlue"
                    placeholder="5 pm"
                />
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="mx-16 mt-16 font-sans text-xl text-gray-500 font-bold">
                        Maximum Price
                    </h1>
                    <motion.input
                        whileFocus={{ scale: 1.025 }}
                        className="mt-4 mx-16 w-3/4 px-4 py-2 text-md font-bold border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-customBlue"
                        value={price}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div>
                    <h1 className="mx-16 mt-16 font-sans text-xl text-gray-500 font-bold">
                        Event Mood
                    </h1>
                    <motion.input
                        whileFocus={{ scale: 1.025 }}
                        className="mt-4 mx-16 w-3/4 px-4 py-2 text-md font-bold border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-customBlue"
                        placeholder="Active, Relaxed, Solemn, etc."
                    />
                </div>
                <div>
                    <h1 className="mx-16 mt-16 font-sans text-xl text-gray-500 font-bold">
                        Dress Code
                    </h1>
                    <motion.input
                        whileFocus={{ scale: 1.025 }}
                        className="mt-4 mx-16 w-3/4 px-4 py-2 text-md font-bold border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-customBlue"
                        placeholder="Suit and tie, casual, etc."
                    />
                </div>
                {/* Spacer */}
                <div className="w-1/5"></div>
            </div>
            <div className="flex items-center">
                <h1 className="mx-16 mt-16 font-sans text-xl text-gray-500 font-bold">
                    Activity Level
                </h1>
                <div className="mt-16">
                    <button
                        onClick={() => handleButtonClickLevel("Light")}
                        className={buttonClasses("Light")}
                    >
                        Light
                    </button>
                    <button
                        onClick={() => handleButtonClickLevel("Moderate")}
                        className={buttonClasses("Moderate")}
                    >
                        Moderate
                    </button>
                    <button
                        onClick={() => handleButtonClickLevel("Heavy")}
                        className={buttonClasses("Heavy")}
                    >
                        Heavy
                    </button>
                </div>
            </div>
        </div>
    );
}
