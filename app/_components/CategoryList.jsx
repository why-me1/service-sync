import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function CategoryList({ categoryList }) {
  return (
    <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 
     md:grid-cols-4 lg:grid-cols-6 gap-4'>
      {categoryList && categoryList.length > 0 ? categoryList.map((category, index) => {
        // Check for valid icon source
        let iconSrc = null;
        
        // Handle different possible icon formats
        if (typeof category.icon === 'string' && category.icon !== '') {
          iconSrc = category.icon;
        } else if (category.icon && typeof category.icon === 'object') {
          // Try to extract URL from object if it exists
          iconSrc = category.icon.url || category.icon.src || null;
        }
        
        // Get the background color
        const bgColor = category.bgcolor?.hex || category.bgcolor || '#f0f0f0';
        
        return (
          <Link href={'/search/'+category.name}
             key={index}
             className="flex flex-col items-center justify-center
            gap-2 p-5 rounded-lg
            cursor-pointer hover:scale-110 transition-all ease-in-out
            "
            style={{ backgroundColor: bgColor }}
          >
            {iconSrc ? (
              <Image 
                 src={iconSrc}
                alt={category.name || 'Category icon'}
                width={35}
                height={35}
              />
            ) : (
              // Fallback when no valid icon source is available
              <div style={{
                width: 35, 
                height: 35, 
                backgroundColor: '#ffffff', // Contrast with card background
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: bgColor, // Use the category color for text
                fontWeight: 'bold'
              }}>
                {category.name && category.name.charAt(0)}
              </div>
            )}
            {category.name && <span className="text-center font-medium">{category.name}</span>}
          </Link>
        );
      }) : (
        // Loading animation with proper JSX return
        <>
          {[1,2,3,4,5,6].map((item, index) => (
            <div 
              key={index} 
              className='h-[120px] w-full bg-slate-200 animate-pulse rounded-lg'
            >
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default CategoryList