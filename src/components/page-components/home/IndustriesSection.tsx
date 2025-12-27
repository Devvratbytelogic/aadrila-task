'use client'
import { animationDurationUnit } from "@/src/utils/animationUnit";
import ImageComponent from "../../ui/ImageComponent"
import { motion } from "framer-motion"

export default function IndustriesSection() {
    return (
        <div className="relative min-h-screen large_space_form_top max-lg:pb-6">

            {/* Circle Background */}
            <motion.div
                className="absolute w-[43%] left-0 top-0 z-0"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <ImageComponent url="/images/shapes/circle.svg" img_title="" object_cover={false} />
            </motion.div>

            {/* Headings */}
            <motion.div
                className="layout_container max-sm:text-center relative z-50"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.4 }}
            >
                <h4 className="gradient_text normal_heading">
                    AI-driven innovation for growth.
                </h4>
                <h2 className="extra_large_heading font-semibold!">
                    Industries We Empower
                </h2>
            </motion.div>

            {/* Left Bottom Card */}
            <motion.div
                className="max-sm:mt-8 sm:absolute bottom-0 left-1/12 z-40"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <Card img={`/images/icons/icon1.svg`} title='Insurance' des='Automate claims processing with accurate document validation.' />
            </motion.div>

            {/* Center Card */}
            <motion.div
                className="max-sm:mt-8 sm:absolute top-1/2 left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-40"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <Card img={`/images/icons/icon1.svg`} title='Lending' des='Ensure faster loan approvals with fraud detection and instant verification.' />
            </motion.div>

            {/* Right Top Card + Floating Dot */}
            <motion.div
                className="max-sm:mt-8 sm:absolute top-0 right-1/12 z-40"
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="relative">
                    <Card img="/images/icons/icon1.svg" title="Healthcare" des="Streamline patient record management and ensure compliance with HIPAA standards." />

                    {/* Floating Dot */}
                    <motion.div
                        className="absolute top-2 -left-20 z-0"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: animationDurationUnit, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ImageComponent url="/images/shapes/dot2.svg" img_title="" object_cover={false} />
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Right Dot */}
            <motion.div
                className="absolute right-0 bottom-0 z-0"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: animationDurationUnit, repeat: Infinity, ease: 'easeInOut' }}
            >
                <ImageComponent url="/images/shapes/dot1.svg" img_title="" object_cover={false} />
            </motion.div>

        </div>
    )
}


interface CardProps {
    img: string;
    title: string;
    des: string;
}
function Card({ img, title, des }: CardProps) {
    return (
        <>
            <div className="card_shadow">
                <div className="w-14 h-14">
                    <ImageComponent url={img || ``} img_title={title} object_cover={false} />
                </div>
                <h5 className="normal_heading">{title}</h5>
                <p>{des}</p>
            </div>
        </>
    )
}