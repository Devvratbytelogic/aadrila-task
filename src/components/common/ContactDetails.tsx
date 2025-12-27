'use client'

import { BiSolidMap } from "react-icons/bi"
import ImageComponent from "../ui/ImageComponent"
import Link from "next/link"
import HomeContactForm from "../forms/HomeContactForm"
import { motion } from "framer-motion"
import { animationDurationUnit } from "@/src/utils/animationUnit"

export default function ContactDetails() {
    return (
        <>
            {/* Floating Background Dot */}
            <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.div
                    className="absolute -left-30 top-0 -z-10"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: animationDurationUnit, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ImageComponent url="/images/shapes/dot1.svg" img_title="" object_cover={false} />
                </motion.div>
            </motion.div>

            <div className="layout_container large_space_form_top">
                <div className="grid grid-cols-12 gap-y-4 lg:gap-x-10 pt-4 mb-6 lg:-mb-40">

                    {/* 📝 Left Content */}
                    <motion.div
                        className="col-span-full lg:col-span-6"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="space-y-8">

                            {/* Heading */}
                            <div className="space-y-2">
                                <h2 className="extra_large_heading">Contact Us</h2>
                                <p className="gradient_text text-xl">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's.
                                </p>
                            </div>

                            {/* Office Details */}
                            <motion.div
                                className="space-y-4"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false }}
                            >
                                {/* US Office */}
                                <motion.div
                                    className="text-textdark"
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        show: { y: 0, opacity: 1 }
                                    }}
                                >
                                    <Link href="#">
                                        <h5 className="flex gap-2 items-center font-bold svg_color secondary">
                                            <BiSolidMap size={22} />
                                            <span className="underline underline-offset-4">
                                                U.S. Office
                                            </span>
                                        </h5>
                                    </Link>
                                    <p className="mt-1 text-sm">Aadrila Technologies INC,</p>
                                    <p className="text-sm">
                                        8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.
                                    </p>
                                </motion.div>

                                {/* India Office */}
                                <motion.div
                                    className="text-textdark"
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        show: { y: 0, opacity: 1 }
                                    }}
                                >
                                    <Link href="https://www.aadrila.com/" target="_devvrat">
                                        <h5 className="flex gap-2 items-center font-bold svg_color secondary">
                                            <BiSolidMap size={22} />
                                            <span className="underline underline-offset-4">
                                                India Office
                                            </span>
                                        </h5>
                                    </Link>
                                    <p className="mt-1 text-sm">Aadrila Technologies Private Limited,</p>
                                    <p className="text-sm">
                                        Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road,
                                        Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.
                                    </p>
                                </motion.div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/*  Contact Form */}
                    <motion.div
                        className="col-span-full lg:col-span-6"
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <HomeContactForm />
                    </motion.div>

                </div>
            </div>
        </>
    )
}
