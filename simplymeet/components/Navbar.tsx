"use-client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter();

    return (
        <>
            <div className="mt-8 flex items-center justify-between shadow-md">
                <motion.button
                    whileHover={{ rotateZ: 5 }}
                    whileTap={{ rotateZ: -5, scale: 0.9 }}
                    className="text-3xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-b from-customBlue to-blue-300"
                    onClick={() => router.push("/")}
                >
                    SimplyMeet
                </motion.button>
                <div className="flex ml-auto">
                    <motion.button
                        whileHover={{ rotateZ: 5 }}
                        whileTap={{ rotateZ: -5, scale: 0.9 }}
                        className="text-2xl font-bold px-5"
                        onClick={() => router.push("/createEvent")}
                    >
                        Create Event
                    </motion.button>
                    <motion.button
                        whileHover={{ rotateZ: 5 }}
                        whileTap={{ rotateZ: -5, scale: 0.9 }}
                        className="text-2xl font-bold px-5"
                        onClick={() => router.push("/how-it-works")}
                    >
                        How it works
                    </motion.button>
                    <motion.button
                        whileHover={{ rotateZ: 5 }}
                        whileTap={{ rotateZ: -5, scale: 0.9 }}
                        className="px-5"
                        onClick={() => router.push("/profile")}
                    >
                        <img
                            src="profile.png"
                            alt="profile"
                            height="48"
                            width="48"
                        />
                    </motion.button>
                </div>
            </div>
        </>
    );
}
