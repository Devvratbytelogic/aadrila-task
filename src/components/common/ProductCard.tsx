'use client'
import { IProduct } from '@/src/types/product';
import ImageComponent from '../ui/ImageComponent'
import { Button } from '@heroui/react'
import { animationDurationUnit } from '@/src/utils/animationUnit';
import { motion } from 'framer-motion'

interface ProductCardProps {
  data: IProduct;
  reverse: boolean;
}
export default function ProductCard({ data, reverse }: ProductCardProps) {
  return (
    <>
      <div className='relative xl_large_space_form_top' key={data?.id}>
        <div className={`layout_container grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-x-20`}>
          <motion.div
            className={`col-span-1 lg:col-span-6 relative order-2 lg:${reverse ? 'order-2' : 'order-1'}`}
            initial={{ x: reverse ? 80 : -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="space-y-4">
              <Button className='btn_global rounded_btn gradient_button auto_width z-10'>{data?.tag}</Button>
              <h3 className='large_heading'>{data?.title}</h3>
              <div className='space-y-2'>
                <h5 className='small_text bold light_color'>Features:</h5>
                <ul className='list_disc light_color_text font-raleway'>
                  {data?.features && data?.features?.length > 0 && data?.features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='space-y-2'>
                <h5 className='small_text bold light_color'>Benefits:</h5>
                <ul className='list_disc light_color_text font-raleway'>
                  {data?.benefits && data?.benefits?.length > 0 && data?.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-4 lg:gap-7 mt-8">
              <Button className='btn_global rounded_btn bg_primary'>Learn More</Button>
              <Button className='btn_global rounded_btn bg_primary'>Schedule a Demo</Button>
            </div>
            {data?.id == 2 && <motion.div
              className="absolute right-0 -top-16 lg:right-20 lg:-top-20 -z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: animationDurationUnit, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ImageComponent url="/images/shapes/dot2.svg" img_title="" object_cover={false} />
            </motion.div>}
            {data?.id == 3 && <motion.div
              className="absolute right-0 -top-10 lg:-top-10 -z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: animationDurationUnit, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ImageComponent url="/images/shapes/dot1.svg" img_title="" object_cover={false} />
            </motion.div>}
          </motion.div>
          <div className={`col-span-1 lg:col-span-6 z-40 ${reverse ? 'lg:order-1' : 'lg:order-2'} relative order-1`}>
            <ImageComponent url={data?.image || '/images/products/img1.svg'} img_title={data?.title || ''} object_cover={false} />
          </div>
        </div>
        <div className={`absolute top-0 ${!reverse ? 'rotate-180 -right-20' : '-left-20'} -z-10`}>
          <ImageComponent url={'/images/shapes/circle.svg'} img_title='' object_cover={false} />
        </div>
      </div>
    </>
  )
}