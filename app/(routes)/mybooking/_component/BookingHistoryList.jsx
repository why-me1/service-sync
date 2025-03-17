import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BookingHistoryList({ bookingHistory }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookingHistory.map((booking, index) => (
        <div key={booking.id || index} className="bg-white border border-gray-200 shadow-md rounded-xl p-5 transition-all hover:shadow-lg">
          <div className="flex items-center gap-4">
            {booking?.businessList?.name &&
              <Image src={booking.businessList.images[0]?.url}
                alt="Business Image"
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">{booking.businessList.name}</h2>
              <p className="flex items-center gap-2 text-gray-600"><User className="text-primary w-4 h-4" /> {booking.businessList.contactPerson}</p>
              <p className="flex items-center gap-2 text-gray-500"><MapPin className="text-primary w-4 h-4" /> {booking.businessList.address}</p>
              <p className="flex items-center gap-2 text-gray-500"><Calendar className="text-primary w-4 h-4" /> <span className="text-black">{booking.date}</span></p>
              <p className="flex items-center gap-2 text-gray-500"><Clock className="text-primary w-4 h-4" /> <span className="text-black">{booking.time}</span></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookingHistoryList
