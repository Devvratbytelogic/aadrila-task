'use client'
import { Button } from "@heroui/react"
import { motion } from "framer-motion"
import HomeBannerSlider from "../sliders/HomeBannerSlider"
import { animationDurationUnit } from "@/src/utils/animationUnit"

export default function HomeBanner() {
    return (
        <div className="-mt-40 lg:-mt-25 h-full lg:h-screen relative overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: "url('/images/bg/banner-bg.svg')" }}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: animationDurationUnit, ease: "easeOut" }}
            />

            {/* Content */}
            <div className="layout_container h-full relative z-10">
                <div className="grid grid-cols-12 items-center lg:items-end pb-10 h-full">

                    <motion.div
                        className="col-span-full lg:col-span-5 space-y-4 order-2 lg:order-1"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: animationDurationUnit, ease: "easeOut" }}
                    >
                        <h1 className="extra_large_heading">
                            <span className="gradient_text">AI-Powered</span><br />
                            Document Automation & Fraud Detection
                        </h1>
                        <p className="small_text">
                            Enhance security, accuracy, and efficiency with our cutting-edge AI solutions.
                        </p>
                        <div className="flex gap-x-3 lg:gap-x-5 justify-between">
                            <Button className="btn_global rounded_btn bg_primary full_width">Get a Demo</Button>
                            <Button className="btn_global rounded_btn bg_primary full_width">Explore Solutions</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="col-span-full lg:col-span-7 order-1 lg:order-2"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: animationDurationUnit, ease: "easeOut", delay: 0.2 }}
                    >
                        <HomeBannerSlider />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
