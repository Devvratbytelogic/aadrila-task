import ContactDetails from "../../common/ContactDetails";

export default function PrimaryFooter() {
  return (
    <>
      <div className="large_space_form_top">
        <ContactDetails />
      </div>
      <div className="bg-primary py-6 px-4 lg:p-20 text-white">
        <div className='grid grid-cols-12 lg:gap-x-10'>
          <div className='col-span-full lg:col-span-6'>
              <p className="text-sm mb-6">© 2025 by Aadrila Technologies Private Limited CIN U74999UP2017PTC094688</p>
              <p className="text-sm ">Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,</p>
              <p className="text-sm ">Uttar Pradesh, India, 226024</p>
          </div>
        </div>
      </div>
    </>
  )
}
