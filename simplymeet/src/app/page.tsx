"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { DayPicker } from "react-day-picker";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import Navbar from "../../components/Navbar";

export default function Home() {
    return (
        <>
            <div className="ml-8">
                <Navbar />
            </div>
        </>
    );
}
