"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import {useState, useEffect } from "react";
import BusinessList from "./_components/BusinessList";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  
  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, [])
  
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

  /* Get all business list */
  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then((resp) => {
      console.log("Business response:", resp);
      
      // Add a check to safely access the data
      if (resp && resp.businessLists) {
        setBusinessList(resp.businessLists);
      } else if (resp && resp.data && resp.data.businessLists) {
        setBusinessList(resp.data.businessLists);
      } else {
        console.error("Business list data structure not as expected:", resp);
        setBusinessList([]);
      }
    }).catch(error => {
      console.error("Error fetching business list:", error);
      setBusinessList([]);
    });
  }
  
  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title="Popular Business"/>
    </div>
  );
}