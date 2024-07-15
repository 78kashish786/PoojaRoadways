import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-0 left-0 right-0 h-[100vh] w-[100vw] bg-white flex justify-center items-center z-40 '>
      <img className='w-[150px] animate-pulse' src={require('../../Assets/logo.png')} alt='logo'/>
    </div>
  )
}

export default Loading
