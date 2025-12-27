'use client'
import ImageComponent from '../../ui/ImageComponent'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { getAboutUs } from '@/src/routes/routes'
import { motion } from 'framer-motion'
import { animationDurationUnit } from '@/src/utils/animationUnit'

export default function PrimaryHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.div
      className="space_vertically_md w-full lg:mt-4 sticky top-0 z-50 bg-white/10 backdrop-blur-sm"
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: animationDurationUnit, ease: 'easeOut' }}
    >
      <div className='layout_container'>
        <div className="grid grid-cols-12 items-center">

          {/* Logo */}
          <div className="col-span-3">
            <div className="w-45">
              <Link href={`/`}>
                <ImageComponent
                  url='/images/logo.svg'
                  img_title='AADRILA'
                  object_cover={false}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="max-lg:hidden col-span-6">
            <div className="flex justify-center gap-4 lg:gap-5">
              <Link href="#">Home</Link>
              <Link href="#">Industries</Link>
              <Link href="#">Products</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
              <Link href={getAboutUs()}>About Us</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="max-lg:hidden col-span-3 text-end">
            <Button className='btn_global rounded_btn bg_primary'>
              Get a Demo
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="col-span-9 text-end ml-auto lg:hidden text-3xl cursor-pointer"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </div>

        </div>
      </div>
    </motion.div>
  )
}
