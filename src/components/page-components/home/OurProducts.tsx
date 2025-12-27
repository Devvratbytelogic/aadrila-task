'use client'

import ImageComponent from '../../ui/ImageComponent'
import ProductCard from '../../common/ProductCard'
import { PRODUCT_DATA } from '@/src/utils/data'
import { motion } from 'framer-motion'
import { animationDurationUnit } from '@/src/utils/animationUnit'

export default function OurProducts() {
    return (
        <>
            <motion.div
                className="relative text-center"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
            >
                {/* Floating Dot */}
                <motion.div
                    className="max-lg:hidden absolute left-6 top-0 -z-10"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: animationDurationUnit, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ImageComponent url="/images/shapes/dot1.svg" img_title="" object_cover={false} />
                </motion.div>

                <h5 className="normal_heading gradient_text font-manrope!">
                    features and benefits.
                </h5>
                <h5 className="extra_large_heading">
                    Our Products
                </h5>
            </motion.div>

            {/* Product Cards */}
            <div className="large_space_form_top lg:space-y-20">
                {PRODUCT_DATA?.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            x: index % 2 === 0 ? -80 : 80,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: animationDurationUnit,
                            ease: 'easeOut',
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <ProductCard data={item} reverse={index % 2 === 1} />
                    </motion.div>
                ))}
            </div>
        </>
    )
}
