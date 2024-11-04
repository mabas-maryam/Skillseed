import React from 'react'

const Header = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('bg-hero.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-start pl-10 md:pl-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Next Favorite <br /> Product!</h1>
        <button className="bg-[#BBA27B] text-black px-6 py-3 rounded mt-4 hover:bg-[#BBA27B] transition">
          Sign Up for Free
        </button>
      </div>
    </div>
  )
}

export default Header
