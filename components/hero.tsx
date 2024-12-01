"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Image from "next/image";

export function Hero() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    <Image
                        className="invert dark:invert-0"
                        src="/vavicom-logo-1_white.png"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </div>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                    Kompleksowa obsługa księgowa
                    <p className="text-center">+48 884 267 820</p>
                    <p className="text-center">info@vavicom.pl</p>
                </div>
                <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    KONTAKT
                </button>
            </motion.div>
        </AuroraBackground>
    );
}
