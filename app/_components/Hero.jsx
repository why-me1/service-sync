import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7'>
        <h2 className="font-bold text-[46px] text-center">
            Find Home
            <span className='text-blue-600'> Services/Repair</span> 
            <br /> Near You</h2>
        <h2 className='text-xl text-gray-400'>Explore Best Home Service & Repair near you</h2>

        <div className='mt-4 flex gap-4 items-center'>
            <input 
            placeholder="Search..."
            className="border border-gray-400 rounded-full w-[350px] md:w-[350px] px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          <Button className="rounded-full bg-blue-600 w-12 h-12 p-0 flex items-center justify-center hover:bg-blue-600">
            <Search className='h-5 w-5'/>
          </Button>
        </div>
    </div>
  )
}

export default Hero