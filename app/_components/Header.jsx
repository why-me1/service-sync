"use client"
import Link from 'next/link'; // Correct default import
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const { data } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR mismatch 

  return (
    <div className='p-5 shadow-sm flex justify-between'>
      <div className='flex items-center gap-8'>
        {/* Logo - Ensure consistent rendering */}
        <Link href="/" className="text-3xl mb-1.5 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
          Service Sync
        </Link>
        
        <nav className='md:flex items-center gap-6 hidden'>
          <Link href="/" className="hover-fade-scale-shadow">
            Home
          </Link>
          <Link href="/search/Cleaning" className="hover-fade-scale-shadow">
            Services
          </Link>
          <Link href="/about" className="hover-fade-scale-shadow">
            About Us
          </Link>
        </nav>
      </div>
      
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='relative w-10 h-10'>
                <Image 
                  src={data.user.image || '/default-avatar.png'} 
                  alt='Profile'
                  fill
                  className='rounded-full cursor-pointer object-cover'
                  priority={true}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{data.user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/mybooking">My Bookings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button 
            variant="default" 
            onClick={() => signIn("descope")}
            className='bg-blue-600 hover:bg-blue-700'
          >
            Login / Sign Up
          </Button>
        )}
      </div>
    </div>
  )
}

export default Header