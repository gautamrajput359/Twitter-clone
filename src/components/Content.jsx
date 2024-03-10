import React from 'react'

const Content = () => {
  return (
    <div>
      <div className="navbox flex h-12 border border-b-gray-200 border-x-0 border-t-0 ">
        <div className='w-full flex justify-center items-center font-semibold hover:bg-gray-200 cursor-pointer hover:font-bold hover:underline underline-offset-[14px] decoration-sky-400 decoration-4'>For You</div>
        <div className='w-full flex justify-center items-center font-semibold hover:bg-gray-200 cursor-pointer hover:font-bold hover:underline underline-offset-[14px] decoration-sky-400 decoration-4'>Following</div>
        <div className='w-[30%] flex justify-center items-center font-semibold'><span className="material-symbols-outlined hover:bg-gray-200 cursor-pointer hover:rounded-[50%] p-2">settings</span></div>
      </div>
      <div className='border border-b-gray-200 border-x-0 border-t-0'>
        <div className='flex mt-4 gap-4 ml-4'>
          <img src="/account_icon.png" alt="Account" className='h-10 cursor-pointer' />
          <div className='h-16 w-[26rem] border border-b-gray-200 border-x-0 border-t-0'>
          <input type="text" placeholder='What is Happening?!' className='w-full h-8 outline-none text-xl' />
          </div>
        </div>
        <div className='flex h-12 items-center mr-10 ml-[3.8rem] justify-between'>
          <div className='flex items-center text-sky-400'>
            <div className='flex'><span className="material-symbols-outlined p-2 hover:rounded-[50%] hover:bg-sky-100 cursor-pointer ">wallpaper</span></div>
            <div className='flex'><span className="material-symbols-outlined p-2 hover:rounded-[50%] hover:bg-sky-100 cursor-pointer ">gif_box</span></div>
            <div className='flex'><span className="material-symbols-outlined p-2 hover:rounded-[50%] hover:bg-sky-100 cursor-pointer ">page_info</span></div>
            <div className='flex'><span className="material-symbols-outlined p-2 hover:rounded-[50%] hover:bg-sky-100 cursor-pointer ">sentiment_satisfied</span></div>
            <div className='flex'><span className="material-symbols-outlined p-2 hover:rounded-[50%] hover:bg-sky-100 cursor-pointer ">work_history</span></div>
            <div className='flex'><span className="material-symbols-outlined p-2 hover:rounded-[50%] hover:bg-sky-100 cursor-pointer ">location_on</span></div>
          </div>
          <div>
            <button className='bg-sky-500 h-8 w-20 rounded-2xl text-base font-bold text-white'>Post</button>
          </div>
        </div>
      </div>
      <div className="posts py-4 pl-4 flex gap-2 hover:bg-gray-100">
        <img src="/account_icon.png" alt="Account" className='h-10 cursor-pointer' />
        <div>
          <div>
            <div><span className='font-semibold hover:underline cursor-pointer'>Tips & Tricks</span> <span className='text-gray-600'>@awkwardgoogle · 9h</span></div>
            <div>Can you crack the password?</div>
            <img src="/post.jpeg" alt="post" className='rounded-lg mt-4' />
          </div>
          <div className='pt-4 flex justify-between'>
            <div className='flex items-center hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer'><span className="material-symbols-outlined">quick_phrases</span><span className=''>327</span></div>
            <div className='flex items-center hover:rounded-[50%] text-gray-500 hover:text-green-500 cursor-pointer'><span className="material-symbols-outlined">cached</span><span>254</span></div>
            <div className='flex items-center hover:rounded-[50%] text-gray-500 hover:text-pink-500 cursor-pointer'><span className="material-symbols-outlined">favorite</span><span>626</span></div>
            <div className='flex items-center hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer'><span className="material-symbols-outlined">bar_chart</span><span>115k</span></div>
          <div className='flex'>
          <span className="material-symbols-outlined hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer">bookmark</span>
          <span className="material-symbols-outlined hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer">upload</span>
          </div>
          </div>
        </div>
        <span className="material-symbols-outlined hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer">more_horiz</span>
      </div>
      <hr />
      <div className="posts py-4 pl-4 flex gap-2 hover:bg-gray-100">
        <img src="/account_icon.png" alt="Account" className='h-10 cursor-pointer' />
        <div>
          <div>
            <div><span className='font-semibold hover:underline cursor-pointer'>frenzy</span> <span className='text-gray-600'>@FrenzyDose · 19h</span></div>
            <div>Can you crack the password?</div>
            <img src="/post.jpeg" alt="post" className='rounded-lg mt-4' />
          </div>
          <div className='pt-4 flex justify-between'>
            <div className='flex items-center hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer'><span className="material-symbols-outlined">quick_phrases</span><span className=''>546</span></div>
            <div className='flex items-center hover:rounded-[50%] text-gray-500 hover:text-green-500 cursor-pointer'><span className="material-symbols-outlined">cached</span><span>245</span></div>
            <div className='flex items-center hover:rounded-[50%] text-gray-500 hover:text-pink-500 cursor-pointer'><span className="material-symbols-outlined">favorite</span><span>640</span></div>
            <div className='flex items-center hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer'><span className="material-symbols-outlined">bar_chart</span><span>205k</span></div>
          <div className='flex'>
          <span className="material-symbols-outlined hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer">bookmark</span>
          <span className="material-symbols-outlined hover:rounded-[50%] text-gray-500 hover:text-sky-400 cursor-pointer">upload</span>
          </div>
          </div>
        </div>
        <span className="material-symbols-outlined hover:rounded-[50%] hover:text-sky-400 cursor-pointer">more_horiz</span>
      </div>
      <hr />
    </div>
  )
}

export default Content
