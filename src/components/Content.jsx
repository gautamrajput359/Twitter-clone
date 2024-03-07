import React from 'react'

const Content = () => {
  return (
    <div>
      <div className="navbox flex h-12 border border-b-gray-200 border-x-0 border-t-0 ">
        <div className='w-full flex justify-center items-center font-semibold hover:bg-gray-200 cursor-pointer hover:font-bold hover:underline underline-offset-[14px] decoration-sky-400 decoration-4'>For You</div>
        <div className='w-full flex justify-center items-center font-semibold hover:bg-gray-200 cursor-pointer hover:font-bold hover:underline underline-offset-[14px] decoration-sky-400 decoration-4'>Following</div>
        <div className='w-[30%] flex justify-center items-center font-semibold'><span className="material-symbols-outlined hover:bg-gray-200 cursor-pointer hover:rounded-[50%] p-2">settings</span></div>
      </div>
    </div>
  )
}

export default Content
