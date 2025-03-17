import { gql, request } from "graphql-request";

const CONTENT_API_URL = 'https://ap-south-1.cdn.hygraph.com/content/cm87d93ol02yw07wfabd5gpl8/master';

const getCategory = async () => {
  const query = `
    query {
      categories {
        id
        name
        bgcolor {
          hex
        }
        icon {
          url
        }
      }
    }
  `;

  try {
    const response = await fetch(CONTENT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Body: ${errorText}`);
    }

    const result = await response.json();
    console.log('Raw API response:', result);
    
    return result;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;

  const result = await request(CONTENT_API_URL, query);
  return result;
};


const getBusinessByCategory=async(category)=>{
  const query = gql`
  query MyQuery {
  businessLists(where: {category:
   {name: "`+category+`"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}`;

const result = await request(CONTENT_API_URL, query);
  return result;

}


const getBusinessById=async(id)=>{
  const query = gql`
  query GetBusinessById {
  businessList(where: {id: "`+id+`"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}`;

const result = await request(CONTENT_API_URL, query);
  return result; 
}

const createNewBooking=async(businessId,date,time,userEmail,userName)=>{
  const mutationQuery = gql`
  mutation CreateBooking {
  createBooking(
    data: {bookingStatus: booked, businessList:
     {connect: {id: "`+businessId+`"}},
     date: "`+date+`", time: "`+time+`", userEmail: "`+userEmail+`", userName: "`+userName+`"}
  ) {
    id
  }
  publishManyBookings(to: PUBLISHED) {
    count
  }
}
  `
  const result = await request(CONTENT_API_URL, mutationQuery);
  return result; 
}

const BusinessBookedSlot=async(businessId,date)=>{
  const query=gql`
  query BusinessBookedSlot {
    bookings(where: {businessList: 
      {id: "`+businessId+`"}, date: "`+date+`"}) {
      date
      time
    }
  }
  `
  const result=await request(CONTENT_API_URL,query)
  return result;
}

const GetUserBookingHistory=async(userEmail)=>{
  const query=gql`
  query GetUserBookingHistory {
    bookings(where: {userEmail: "`+userEmail+`"}
    orderBy: publishedAt_DESC) {
      businessList {
        name
        images {
          url
        }
        contactPerson
        address
      }
      date
      time
      id
    }
  }
  `
  const result=await request(CONTENT_API_URL,query)
  return result;

}
// Export the functions directly
export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory
};