'use client'

import { animationDurationUnit } from "@/src/utils/animationUnit"
import BlogSlider from "../../sliders/BlogSlider"
import ImageComponent from "../../ui/ImageComponent"
import { motion } from "framer-motion"

export default function OurBlogs() {
    return (
        <>
            <motion.div
                className="relative text-center "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: animationDurationUnit }}
                viewport={{ once: false, amount: 0.3 }}
            >

                {/* Left Floating Dot */}
                <motion.div
                    className="absolute left-6 top-0 -z-10"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: animationDurationUnit, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ImageComponent url="/images/shapes/dot2.svg" img_title="" object_cover={false} />
                </motion.div>

                {/* Heading */}
                <motion.div
                    className="w-[90%] sm:w-3/5 m-auto"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.4 }}
                >
                    <h5 className="extra_large_heading">Blogs</h5>
                    <p className="normal_heading gradient_text font-manrope! font-normal!"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. </p>
                </motion.div>

                {/* Blog Slider */}
                <motion.div
                    className="relative normal_space_form_top"
                    initial={{ scale: 0.96, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <BlogSlider />

                    {/* Right Floating Dot */}
                    <motion.div
                        className="absolute right-0 top-10 z-0"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: animationDurationUnit, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ImageComponent url="/images/shapes/dot1.svg" img_title="" object_cover={false} />
                    </motion.div>
                </motion.div>

            </motion.div>
        </>
    )
}