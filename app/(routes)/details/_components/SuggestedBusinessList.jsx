import GlobalApi from '@/app/_services/GlobalApi';
import { Button } from '@/components/ui/button';
import { Calendar, Notebook, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import BookingSection from './BookingSection';
  

function SuggestedBusinessList({ business }) {
    const [businessList, setBusinessList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (business) {
            getBusinessList();
        }
    }, [business]);
    
    const getBusinessList = () => {
        setIsLoading(true);
        GlobalApi.getBusinessByCategory(business.category?.name)
            .then(resp => {
                // Filter out the current business from the list
                const filteredList = resp?.businessLists?.filter(item => item.id !== business.id) || [];
                setBusinessList(filteredList);
            })
            .finally(() => setIsLoading(false));
    };
    
    return (
        <div className="sticky top-4">
            {/* Book Appointment Section */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-blue-100">
                <h3 className="font-bold text-xl mb-3 text-gray-800">Book Now</h3>
                
                <BookingSection business={business}>

                <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-6">
                    <Calendar size={18} />
                    <span className="font-semibold">Book Appointment</span>
                </Button>

                </BookingSection>
                
                {business?.phone && (
                    <div className="flex items-center gap-2 mt-4 text-blue-600">
                        <Phone size={16} />
                        <span className="font-medium">{business.phone}</span>
                    </div>
                )}
            </div>
            
            {/* Similar Businesses Section */}
            <div className="bg-white rounded-xl shadow-md p-4 border border-blue-100">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Similar Businesses</h3>
                
                {isLoading ? (
                    <div className="space-y-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="animate-pulse flex gap-3">
                                <div className="bg-gray-200 h-20 w-20 rounded-lg"></div>
                                <div className="space-y-2 flex-1">
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : businessList.length > 0 ? (
                    <div className="space-y-4">
                        {businessList.slice(0, 5).map((biz, index) => (
                            <Link 
                                href={'/details/' + biz.id} 
                                key={index}
                                className="flex gap-3 hover:bg-blue-50 rounded-lg p-2 
                                transition-all duration-300 border border-transparent
                                hover:border-blue-200 cursor-pointer"
                            >
                                <div className="h-20 w-20 relative flex-shrink-0 rounded-lg overflow-hidden">
                                    <Image 
                                        src={biz?.images?.[0]?.url || '/placeholder-business.jpg'}
                                        alt={biz?.name || 'Business image'}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800 line-clamp-1">{biz.name}</h4>
                                    {biz.contactPerson && (
                                        <p className="text-blue-600 text-sm font-medium">{biz.contactPerson}</p>
                                    )}
                                    {biz.address && (
                                        <p className="text-gray-500 text-sm line-clamp-2 mt-1">{biz.address}</p>
                                    )}
                                </div>
                            </Link>
                        ))}
                        
                        {businessList.length > 5 && (
                            <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 mt-2">
                                View More
                            </Button>
                        )}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center py-4">No similar businesses found</p>
                )}
            </div>
        </div>
    );
}

export default SuggestedBusinessList;