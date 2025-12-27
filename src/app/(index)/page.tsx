import HomeBanner from '@/src/components/banner/HomeBanner'
import IndustriesSection from '@/src/components/page-components/home/IndustriesSection'
import OurBlogs from '@/src/components/page-components/home/OurBlogs'
import OurProducts from '@/src/components/page-components/home/OurProducts'

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <div className="large_space_form_top">
        <IndustriesSection />
      </div>
      <div className="large_space_form_top">
        <OurProducts />
      </div>
      <div className="large_space_form_top">
        <OurBlogs />
      </div>
    </>
  )
}
