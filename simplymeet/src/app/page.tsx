"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { DayPicker } from "react-day-picker";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const css = `
.my-today {
    color: #63bcce;
    font-weight: bold;
    font-size: 1.2em;
}
.my-selected:not([disabled]){
    font-weight: bold;
    background-color: #63bcce;
    color: white;
}
.DayPicker {
    display: inline-block;
    font-size: 4rem;
  }

    `;

export default function Home() {
    const router = useRouter();
    const [selected, setSelected] = useState();
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);

    let footer = <p>Please pick a day.</p>;
    if (selectedDates && selectedDates.length > 0) {
        footer = (
            <p>
                You selected{" "}
                {selectedDates.map((date) => format(date, "MMM d")).join(", ")}
            </p>
        );
    }

    useEffect(() => {
        console.log(selectedDates);
    }, [selectedDates]);

    return (
        <>
            <style>{css}</style>
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
                <motion.p className="text-3xl font-sans">
                    What days would you like to meet on?
                </motion.p>
                <motion.button
                    whileHover={{ rotateZ: 5 }}
                    whileTap={{ rotateZ: -5, scale: 0.9 }}
                    className="text-customBlue font-sans border-2 border-customBlue rounded-lg px-5 py-1 text-xl font-bold flex items-center hover:bg-customBlue hover:text-white"
                    onClick={() => router.push("/create")} // Use onClick instead of onTap
                >
                    Let's meet
                    <svg
                        className="ml-2" // This adds a margin to the left of the icon
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M10 8l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.button>
            </div>
            <div className="mx-16 text-xl font-sans mt-8">{footer}</div>
            <div className="flex justify-center mt-16">
                <DayPicker
                    mode="multiple"
                    selected={selectedDates}
                    onSelect={setSelectedDates}
                    showOutsideDays
                    modifiersClassNames={{
                        selected: "my-selected",
                        today: "my-today",
                    }}
                    styles={{
                        head_cell: {
                            width: "150px",
                        },
                        table: {
                            maxWidth: "none",
                        },
                        day: {
                            margin: "10%",
                            padding: "25%",
                        },
                    }}
                />
            </div>
        </>
    );
}
