import OurTeamSlider from "@/src/components/sliders/OurTeamSlider";
import ImageComponent from "@/src/components/ui/ImageComponent";

export default function AboutUsPage() {
    return (
        <>
            <div className="h-full bg-cover bg-top bg-no-repeat" style={{ backgroundImage: "url('/images/bg/about-bg.jpg')" }}>
                <div className="layout_container">
                    <div className="xl_large_space_form_top">
                        <div className="common_box_shadow p-12.5 bg-white w-fit m-auto rounded-2xl text-center">
                            <h1 className="extra_large_heading font-semibold!">About Us</h1>
                            <p className="small_text gradient_text font-normal! font-manrope!">Meet the Minds Shaping Document Automation.</p>
                        </div>
                    </div>
                </div>

                <div className="relative xl_large_space_form_top space-y-10 lg:space-y-20 pb-20 max-lg:mx-2">
                    {/* OUR VISION */}
                    <div className="lg:w-3/5 common_box_shadow p-4 rounded-3xl lg:rounded-r-full bg-white">
                        <div className="flex flex-col lg:flex-row-reverse gap-5 items-start lg:items-center">

                            {/* Icon */}
                            <div className="w-20 min-w-20 h-20 lg:w-25 lg:h-25 lg:min-w-25 flex items-center justify-center rounded-full bg-primary mx-auto lg:mx-0">
                                <div className="w-10 h-10 lg:w-12 lg:h-12">
                                    <ImageComponent
                                        url="/images/icons/icon4.svg"
                                        img_title=""
                                        object_cover={false}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h5 className="normal_heading font-bold mb-2 hidden lg:block">Our Vision</h5>
                            <div className="text-center lg:text-left w-full">
                                <h5 className="normal_heading font-bold mb-2 block lg:hidden">Our Vision</h5>
                                <p className="font-medium py-3 px-4 lg:px-0 lg:pr-5 lg:pl-10
                       border-t-4 lg:border-t-0 lg:border-r-4 border-secondary">
                                    To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* OUR MISSION */}
                    <div className="lg:w-3/5 ml-auto common_box_shadow p-4 rounded-3xl lg:rounded-l-full bg-white">
                        <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center">

                            {/* Icon */}
                            <div className="w-20 min-w-20 h-20 lg:w-25 lg:h-25 lg:min-w-25 flex items-center justify-center rounded-full bg-primary mx-auto lg:mx-0">
                                <div className="w-10 h-10 lg:w-12 lg:h-12">
                                    <ImageComponent
                                        url="/images/icons/icon5.svg"
                                        img_title=""
                                        object_cover={false}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h5 className="normal_heading font-bold mb-2 hidden lg:block">Our Mission</h5>
                            <div className="text-center lg:text-left w-full">
                                <h5 className="normal_heading font-bold mb-2 block lg:hidden">Our Mission</h5>
                                <p className="font-medium py-3 px-4 lg:px-0 lg:pl-5 lg:pr-10
                       border-t-4 lg:border-t-0 lg:border-l-4 border-secondary">
                                    To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="xl_large_space_form_top">
                <div className='relative text-center '>
                    <div className="absolute left-6 top-0 -z-10">
                        <ImageComponent url={'/images/shapes/circle.svg'} img_title="" object_cover={false} />
                    </div>
                    {/* left dot */}
                    <div className="w-4/5 lg:w-3/5 m-auto">
                        <h5 className='extra_large_heading'>Meet our team</h5>
                        <p className='gradient_text lg:text-2xl'>Meet our passionate and talented team, committed to delivering exceptional results, driving innovation, and transforming your vision into reality.</p>
                    </div>
                    <div className="large_space_form_top relative">
                        <div className="absolute right-6 top-0 -z-10">
                            <ImageComponent url="/images/shapes/dot2.svg" img_title="" object_cover={false} />
                        </div>
                        <OurTeamSlider />
                    </div>
                </div>
            </div>
        </>
    )
}
