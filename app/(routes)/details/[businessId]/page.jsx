"use client";

import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';

function BusinessDetail({ params: paramsPromise }) {
    const { status } = useSession();
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { businessId } = React.use(paramsPromise); // Unwrap params directly
    
    useEffect(() => {
        if (businessId) {
            fetchBusiness(businessId);
        }
    }, [businessId]);
    
    useEffect(() => {
        if (status === 'unauthenticated') signIn('descope');
    }, [status]);
    
    const fetchBusiness = async (id) => {
        try {
            setLoading(true);
            const resp = await GlobalApi.getBusinessById(id);
            setBusiness(resp?.businessList || null); // Set the business data
        } catch (error) {
            console.error("Error fetching business:", error);
            setError("Failed to load business data");
        } finally {
            setLoading(false);
        }
    };
    
    if (status === 'loading') return <p>Loading session...</p>;
    
    return (
        <div className="py-8 md:py-20 px-10 md:px-36">
            {loading && <p>Loading business details...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && business ? (
                <>
                    <BusinessInfo business={business} />
                    <div className='grid grid-cols-4 gap-4 mt-16'>
                        <div className='col-span-4 md:col-span-3'>
                            <BusinessDescription business={business}/>
                        </div>
                        <div className='col-span-4 md:col-span-1'>
                            <SuggestedBusinessList business={business}/>
                        </div>
                    </div>
                </>
            ) : (
                <p>No business details found.</p>
            )}
        </div>
    );
}

export default BusinessDetail;