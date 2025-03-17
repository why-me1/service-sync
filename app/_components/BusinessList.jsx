import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function BusinessList({ businessList, title, isLoading = false }) {
  const businesses = Array.isArray(businessList) ? businessList : [];
  
  // Use the explicitly passed loading state instead of inferring it
  
  return (
    <div className="my-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className='font-bold text-2xl text-gray-800 mb-6 border-l-4 border-blue-500 pl-3'>{title}</h2>
      </div>
      
      {isLoading ? (
        // Loading skeleton UI
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Skeleton UI elements */}
              <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
              
              <div className="p-5">
                <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4 animate-pulse"></div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-1/2 animate-pulse"></div>
                </div>
                
                <div className="flex items-start gap-2 mb-4">
                  <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse mt-0.5"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
                </div>
                
                <div className="h-10 bg-gray-200 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      ) : businesses.length > 0 ? (
        // Content when data is loaded and not empty
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {businesses.map((business, index) => (
            <Link href={'/details/'+business.id}
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {business?.images && business.images[0] && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={business.images[0].url}
                    alt={business.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {business?.category && (
                    <span className="absolute top-3 right-3 py-1 px-3 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-xs font-medium">
                      {business.category.name}
                    </span>
                  )}
                </div>
              )}
              
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-1">{business.name}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm">{business.contactPerson}</p>
                </div>
                
                <div className="flex items-start gap-2 text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm line-clamp-2">{business.address}</p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full py-2 transition-all">
                  Book Now
                </Button>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // No results found message
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="font-bold text-xl text-gray-700 mb-2">No businesses found</h3>
          <p className="text-gray-500">We couldn't find any businesses in this category.</p>
        </div>
      )}
    </div>
  )
}

export default BusinessList