import React from 'react'
import FeatureCardComponent from '../FeatureCardComponent'

const   WhyChooseUsSection = () => {
    const data = [
        {
          image: 'https://www.iconpacks.net/icons/2/free-truck-icon-1756-thumb.png',
          heading: 'Efficient Delivery',
          para: 'Count on us for timely and secure delivery of your goods.'
        },
        {
          image:
            'https://cdn.iconscout.com/icon/free/png-256/free-globe-showing-asia-australia-earth-33895.png',
          heading: 'Nationwide Coverage',
          para: 'Our extensive network ensures your cargo reaches every corner of the country.'
        },
        {
          image:
            'https://png.pngtree.com/png-clipart/20230423/original/pngtree-solution-flat-icon-png-image_9088938.png',
          heading: 'Tailored Solutions:',
          para: ' Customized transportation plans to meet your specific business requirements.'
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9a1UYypUDymgrpb8kFHaLRQiyJC6y8-9AVg&s',
          heading: 'Modern Fleet:',
          para: ' State-of-the-art trucks equipped with the latest technology for safe and efficient transport.'
        }]
  return (
    <div className='px-5 md:px-24 py-8 bg-gray-100 md:grid grid-cols-2'>
      <div className='md:px-6 space-y-8 text-left'>
          <h1 className='text-xl font-semibold text-red-600'>Why Choose us?</h1>
          <h2 className='text-3xl md:text-5xl font-md text-gray-720'>
            Reliable Trucking Services
            <br />
            <span className='text-3xl md:text-5xl font-light text-red-600'>for Your Business Needs</span>
          </h2>
          <h3 className='text-sm md:text-lg font-md text-gray-700'>
            All the features need for your business
            All the features need for your business
            All the features need for your business
            All the features need for your business
          </h3>
          <a href='/why-us' className='hover:font-semibold font-md text-md text-red-600 border-red-600 '>Read More</a>
        </div>
      <div className='md:grid grid-cols-2 gap-5 '>
      {data &&
            data.map((item, index) => (
              <FeatureCardComponent
                image={item.image}
                heading={item.heading}
                para={item.para}
              />
            ))}
      </div>
    </div>
  )
}

export default WhyChooseUsSection
