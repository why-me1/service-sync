import { Button } from '@/components/ui/button'
import { MapPin, Share, Mail, User, Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({ business }) {
  if (!business?.name) return null;
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="md:flex gap-8 items-start">
        {/* Business Image */}
        <div className="shrink-0 mb-6 md:mb-0">
          <div className="relative w-[150px] h-[150px] mx-auto md:mx-0">
            <Image 
              src={business?.images[0]?.url}
              alt={business.name}
              fill
              className="rounded-xl object-cover border-4 border-white shadow-md"
            />
          </div>
        </div>
        
        {/* Business Details */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Left Column */}
            <div className="space-y-3">
              {business?.category?.name && (
                <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                  {business.category.name}
                </span>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {business.name}
              </h1>
              
              <div className="space-y-2 mt-2">
                {business.address && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} className="text-blue-500 shrink-0" />
                    <span>{business.address}</span>
                  </div>
                )}
                
                {business.email && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={18} className="text-blue-500 shrink-0" />
                    <span>{business.email}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col items-start md:items-end gap-3">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-blue-50 border-blue-200">
                <Share size={16} />
                <span>Share</span>
              </Button>
              
              {business.contactPerson && (
                <div className="flex items-center gap-2 text-gray-700">
                  <User size={18} className="text-blue-500" />
                  <span className="font-medium">{business.contactPerson}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={18} className="text-blue-500" />
                <span>Available 8:00 AM to 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;