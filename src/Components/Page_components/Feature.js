import React from 'react'

const Feature = () => {

    const data = [
        { image:'../../Assets/website poster.png',heading:'Road Transport', subheading: "We Provide Logistics Via Roads"},
        { image:"require('../../Assets/website poster.png'",heading:'All India Delivery', subheading: "We Provide Access Across india"},
        { image:"require('../../Assets/website poster.png'",heading:'Fast and Timely Delivery', subheading: "Fast Delivery Within Days"},
        { image:"require('../../Assets/website poster.png'",heading:'Safe and Secure', subheading: "Provide Safe and Secure logistics"},
    ]

  return (
    <div className='w-[70%] mx-auto  text-center my-16'>
      <h1 className=' text-2xl md:text-3xl font-semibold mb-5'>All India Transportation Service</h1>
      <hr className='w-[20%] border-2 border-red-700 mx-auto'/>
      <div className='md:grid grid-cols-4 my-16 space-y-5 md:space-y-0'>
        {data&&data?.map((item,index)=>(
            <div className='text-center flex flex-col justify-between items-center space-y-5'>
            <img className='h-[200px] text- w-[200px] rounded-full border-8 border-gray-200 object-cover' src={require(`../../Assets/website image.jpg`)} />
            <div className='space-y-2'>
                <h1 className='text-xl font-semibold '>{item.heading}</h1>
                <h3 className='text-md font-light text-gray-400 '>{item.subheading}</h3>
                </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Feature
