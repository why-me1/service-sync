import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_services/GlobalApi';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import moment from 'moment';
 
function BookingSection({children, business}) {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const {data} = useSession();
    const [bookedSlot,setBookedSlot]=useState([])
    
    useEffect(() => {
        getTime();
    }, [])

    useEffect(()=>{
      date&&BusinessBookedSlot();
  },[date])

  /**
   * Get Selected Date Business Booked Slot
   */
  const BusinessBookedSlot=()=>{
      GlobalApi.BusinessBookedSlot(business.id,moment(date).format('DD-MMM-yyyy'))
      .then(resp=>{
          console.log(resp);
          setBookedSlot(resp.bookings);
      })
  }
    
    const getTime = () => {
        const timeList = [];
   
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            });
   
            timeList.push({
                time: i + ':30 AM'
            });
        }
   
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            });
   
            timeList.push({
                time: i + ':30 PM'
            });
        }
   
        setTimeSlot(timeList);
    };
    
    const saveBooking = () => {
        GlobalApi.createNewBooking(business.id,
            moment(date).format('DD-MMM-yyyy'),selectedTime,data.user.email,data.user.name).then(resp => {
            console.log(resp);
            if(resp) {
                setDate(new Date());
                setSelectedTime(null);
                toast('Booking Successful', 'success');
            }
        }, (e) => {
            toast('Booking Failed', 'error');
        })
    }

    const isSlotBooked=(time)=>{
      return bookedSlot.find(item=>item.time==time)
    }
    
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    {children}
                </SheetTrigger>
                <SheetContent className="overflow-auto" side="right">
                    <SheetHeader>
                        <SheetTitle className="text-xl font-semibold text-blue-600">Book a Service</SheetTitle>
                        <SheetDescription className="text-gray-500">
                            Select Date and Time slot to book a service
                        </SheetDescription>
                    </SheetHeader>
                    
                    <div className="mt-8 space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h2 className="font-semibold text-gray-700 mb-3">Select Date</h2>
                            <div className="bg-white shadow-sm rounded-md">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h2 className="font-semibold text-gray-700 mb-3">Select Time Slot</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {timeSlot.map((item, index) => (
                                    <Button key={index}
                                        disabled={isSlotBooked(item.time)}
                                        variant="outline"
                                        className={`w-full rounded-md py-2 px-3 text-sm transition-all duration-200 
                                        ${selectedTime === item.time 
                                            ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' 
                                            : 'border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300'
                                        }`}
                                        onClick={() => setSelectedTime(item.time)}
                                    >
                                        {item.time}  
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <SheetFooter className="mt-8 pt-4 border-t border-gray-100">
                        <div className="flex w-full gap-3">
                            <SheetClose asChild>
                                <Button 
                                    variant="outline" 
                                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Cancel
                                </Button>
                            </SheetClose>
                            <Button 
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                                disabled={!(selectedTime && date)}
                                onClick={() => saveBooking()}
                            >
                                Book Now
                            </Button>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default BookingSection