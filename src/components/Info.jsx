import React from 'react'
import { useEffect } from 'react'

const Info = () => {
  
  return (
    <div>
      <div className="mx-8 mt-1">
        <div className='flex bg-gray-100 h-10 items-center rounded-3xl'>
          <span className="material-symbols-outlined pl-2">search</span>
          <input type="text" id="" className='flex-1 bg-gray-100 h-10 pl-2 rounded-3xl outline-none text-lg' placeholder='Search' />
        </div>
        <div className='mt-4 bg-gray-100 pl-4 pt-4 rounded-xl pr-16 '>
          <div className="title font-bold text-xl mb-2">Subscribe for Premium</div>
          <div className="content mb-2">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</div>
          <button className='bg-black text-white mb-2 w-32 h-10 rounded-3xl font-semibold text-base'>Subscribe</button>
        </div>
        <div className="mt-4 bg-gray-100  rounded-xl">
        <div className="title text-xl font-bold py-2 px-4">What's Happening</div>
        <div className="content py-3 flex justify-between hover:bg-gray-200 cursor-pointer px-4">
          <div>
            <div className='font-semibold'>Paris Fashion Week Fall 2024</div>
            <div className='text-sm text-gray-500'>Fashion · LIVE</div>
          </div>
          <img src="/public/WQ0d7-9P.jpeg" alt="fashion week" className='h-16 rounded-xl' />
        </div>
        <div className="py-3 flex justify-between px-4 hover:bg-gray-200 cursor-pointer">
          <div>
            <div className='text-gray-500 text-sm'>Trending in India</div>
            <div className='font-semibold text-base'>Education</div>
            <div className='text-gray-500 text-sm'>24.5k posts</div>
          </div>
          <div><span class="material-symbols-outlined">more_horiz</span></div>
        </div>
        <div className="py-3 flex justify-between px-4 hover:bg-gray-200 cursor-pointer">
          <div>
            <div className='text-gray-500 text-sm'>Technology · Trending</div>
            <div className='font-semibold text-base'>Figma</div>
            <div className='text-gray-500 text-sm'>24.5k posts</div>
          </div>
          <div><span class="material-symbols-outlined">more_horiz</span></div>
        </div>
        <div className="py-3 flex justify-between px-4 hover:bg-gray-200 cursor-pointer">
          <div>
            <div className='text-gray-500 text-sm'>Entertainment · Trending</div>
            <div className='font-semibold text-base'>#DishaPatani</div>
            <div className='text-gray-500 text-sm'>24.5k posts</div>
          </div>
          <div><span class="material-symbols-outlined">more_horiz</span></div>
        </div>
        <div className="py-3 flex justify-between px-4 hover:bg-gray-200 cursor-pointer">
          <div>
            <div className='text-gray-500 text-sm'>Sports · Trending</div>
            <div className='font-semibold text-base'>#DishaPatani</div>
            <div className='text-gray-500 text-sm'>24.5k posts</div>
          </div>
          <div><span class="material-symbols-outlined">more_horiz</span></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Info
