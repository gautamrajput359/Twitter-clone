import React from 'react'

const Navbar = () => {
    const handlePost = () => {
        confirm("Do you want to post?")
        if(confirm) {
            alert("Posted")
        }
    }
    return (
        <>
            <div className="navbar text-center flex flex-col items-center">
                <div className='flex flex-col items-start text-xl w-48'>
                    <div className="logo my-1 py-3 cursor-pointer hover:bg-gray-300 hover:rounded-[50%]">
                        <img src="/public/twitter_logo.png" alt="logo" className='h-10 w-auto' />
                    </div>
                    <div className='flex gap-4 p-3 items-center hover:font-semibold hover:bg-gray-300 hover:rounded-3xl cursor-pointer'><span className="material-symbols-outlined font-semibold">home</span>Home</div>
                    <div className='flex gap-4 p-3 items-center hover:font-semibold hover:bg-gray-300 hover:rounded-3xl cursor-pointer'><span className="material-symbols-outlined font-semibold">search</span>Explore</div>
                    <div className='flex gap-4 p-3 items-center hover:font-semibold hover:bg-gray-300 hover:rounded-3xl cursor-pointer'><span className="material-symbols-outlined font-semibold">notifications</span>Notifications</div>
                    <div className='flex gap-4 p-3 items-center hover:font-semibold hover:bg-gray-300 hover:rounded-3xl cursor-pointer'><span className="material-symbols-outlined font-semibold">mail</span>Messages</div>
                    <div className='flex gap-4 p-3 items-center hover:font-semibold hover:bg-gray-300 hover:rounded-3xl cursor-pointer'><span className="material-symbols-outlined font-semibold">list_alt</span>Lists</div>
                    <div className='flex gap-4 p-3 items-center hover:font-semibold hover:bg-gray-300 hover:rounded-3xl cursor-pointer'><span className="material-symbols-outlined font-semibold">stack_off</span>Grok</div>
                    <div className='flex gap-4 p-3 items-center hover:font-semibold hover:bg-gray-300 hover:rounded-3xl cursor-pointer'><span className="material-symbols-outlined font-semibold">person</span>Profile</div>
                    <div className='flex gap-4 p-3 items-center hover:font-semibold hover:bg-gray-300 hover:rounded-3xl cursor-pointer'><span className="material-symbols-outlined font-semibold">more_horiz</span>More</div>
                </div>
                    <div><button onClick={handlePost} className='bg-sky-500 hover:bg-sky-600 h-[8vh] w-[15vw] mt-5 text-xl font-bold text-white rounded-3xl outline-none'>Post</button></div>
                    <div></div>
            </div>
        </>
    )
}

export default Navbar
