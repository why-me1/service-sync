"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function CategorySideBar() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const params = usePathname(); // Get URL parameters
  
  useEffect(() => {
    getCategoryList();
  }, [])
  
  useEffect(() => {
    params && setSelectedCategory(params.split('/')[2]);
    console.log("Selected category from URL:", params?.split('/')[2]);
  }, [params])
  
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log("Full response:", resp);
      
      if (resp.data && resp.data.categories) {
        setCategoryList(resp.data.categories);
      } else {
        console.log("Categories not found in response structure");
      }
    }).catch(error => {
      console.error("Error fetching categories:", error);
    });
  }
  
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-5 rounded-xl shadow-lg border border-gray-100">
      <h2 className='font-bold mb-6 text-xl text-blue-700 border-b pb-3 flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Categories
      </h2>
      
      {categoryList.length > 0 ? (
        <div className="space-y-4">
          {categoryList.map((category, index) => (
            <Link href={'/search/'+category.name}
              key={index} 
              className={`group flex items-center gap-3 p-3 rounded-lg
                ${selectedCategory === category.name 
                  ? 'bg-blue-50 border-2 border-blue-600 shadow-md' 
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200'}
                transition-all duration-300 cursor-pointer`}
            >
              <div className={`p-2 rounded-lg transition-colors duration-300
                ${selectedCategory === category.name 
                  ? 'bg-blue-100' 
                  : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                <Image 
                  src={category.icon.url}
                  alt={category.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h2 className={`font-medium transition-colors duration-300
                ${selectedCategory === category.name 
                  ? 'text-blue-700' 
                  : 'group-hover:text-blue-700'}`}>
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 w-10 bg-blue-100 rounded-full mb-3"></div>
            <div className="h-4 w-24 bg-blue-100 rounded mb-3"></div>
            <div className="h-3 w-16 bg-gray-100 rounded"></div>
          </div>
          <p className="mt-4 text-gray-400">Loading categories...</p>
        </div>
      )}
    </div>
  )
}

export default CategorySideBar