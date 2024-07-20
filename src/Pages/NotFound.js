import React, { useEffect } from 'react'
import Main from '../Components/Main'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Main >
       <div className='flex flex-col text-center justify-center items-center  h-[70vh] md:h-[70vh] space-y-4 my-10'>
        <img className='motion-safe:animate-bounce' src={require('../Assets/notFound.png')} alt='NotFound'/>
        <h1 className=' text-xl md:text-4xl font-semibold text-red-600'>Error 404 | Page Not Found</h1>
        <h1 className=' text-sm md:text-xl font-md '>Click on Link to Go to <a  className='underline text-red-600 font-md  animate-pulse' href='/'>HomePage</a></h1>
       </div>
    </Main>
  )
}

export default NotFound
