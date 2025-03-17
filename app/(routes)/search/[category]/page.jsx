"use client"
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

function BusinessByCategory() {
    const params = useParams(); // Get URL parameters
    const [businessList, setBusinessList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        console.log("Params object:", params);
        const category = params.category; // Get the category from URL params
        console.log("Category from URL params:", category);
        
        if (category) {
            getBusinessList(category);
        } else {
            console.error("Category parameter is missing");
            setLoading(false);
        }
    }, [params]);
    
    const getBusinessList = (category) => {
        setLoading(true);
        console.log("Fetching businesses for category:", category);
        
        GlobalApi.getBusinessByCategory(category).then((resp) => {
            console.log("Full API response:", resp);
            
            if (resp && resp.businessLists) {
                console.log("Found businesses:", resp.businessLists.length);
                setBusinessList(resp.businessLists);
            } else {
                console.error("BusinessLists property not found in response:", resp);
                setBusinessList([]);
            }
        }).catch((error) => {
            console.error("Error fetching business list by category:", error);
            setBusinessList([]);
        }).finally(() => {
            setLoading(false);
        });
    }
    
    // Determine the title to display
    const title = params?.category || "Businesses";
    
    return (
        <div>
            <BusinessList 
                title={title} 
                businessList={businessList}
                isLoading={loading}
            />
        </div>
    )
}

export default BusinessByCategory