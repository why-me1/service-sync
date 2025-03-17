import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center py-12 md:py-16 lg:py-20 px-4 max-w-4xl mx-auto'>
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
        Find Home
        <span className='text-blue-600'> Services/Repair</span>
        <br /> Near You
      </h2>
      
      <p className='text-lg md:text-xl text-gray-500 mt-3 text-center max-w-xl'>
        Explore Best Home Service & Repair near you
      </p>
      
      <div className='mt-6 md:mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3 items-center'>
        <div className='relative w-full'>
          <input
            placeholder="Search for services..."
            className="border-2 border-gray-300 rounded-full w-full px-5 py-3 focus:border-blue-500 focus:outline-none shadow-sm transition-all duration-200 placeholder-gray-400"
          />
        </div>
        
        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 w-12 h-12 flex-shrink-0 p-0 flex items-center justify-center shadow-md transition-all duration-200">
          <Search className='h-5 w-5' />
        </Button>
      </div>
    </div>
  )
}

export default Hero