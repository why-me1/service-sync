export default function AboutPage() {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg my-8">
        {/* Header Section with modern styling */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-primary mb-4">About ServiceSync</h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-blue-400 to-teal-300 mx-auto rounded-full"></div>
        </div>
        
        {/* Introduction with improved typography */}
        <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto text-center">
          ServiceSync is your go-to platform for finding and booking trusted professionals
          for home services. Whether you need repairs, installations, or maintenance,
          we connect you with top-rated experts in your area.
        </p>
        <br/>
        {/* Features Grid with improved spacing and hover effects */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="bg-primary text-white p-4 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 group-hover:text-primary transition-colors duration-300">Trusted Professionals</h3>
              </div>
              <p className="text-gray-600 text-center">We thoroughly vet all service providers to ensure you receive top-quality workmanship.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="bg-primary text-white p-4 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 group-hover:text-primary transition-colors duration-300">Easy Booking</h3>
              </div>
              <p className="text-gray-600 text-center">Book services with just a few clicks, anytime and anywhere.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="bg-primary text-white p-4 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 group-hover:text-primary transition-colors duration-300">Transparent Pricing</h3>
              </div>
              <p className="text-gray-600 text-center">No hidden fees. Get clear pricing information upfront before booking.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="bg-primary text-white p-4 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 group-hover:text-primary transition-colors duration-300">Satisfaction Guarantee</h3>
              </div>
              <p className="text-gray-600 text-center">We stand behind the quality of our service providers with our satisfaction guarantee.</p>
            </div>
          </div>
        </div>
        
        {/* Added testimonials section to fill space */}
        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-primary p-3 rounded-full mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Plumbing Service</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"ServiceSync made finding a reliable plumber so easy. The booking process was smooth, and the service was excellent!"</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-primary p-3 rounded-full mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Michael Rivera</h3>
                  <p className="text-sm text-gray-500">Electrical Repair</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"I needed an electrician urgently, and ServiceSync connected me with a professional within hours. Great service!"</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-primary p-3 rounded-full mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Emily Chen</h3>
                  <p className="text-sm text-gray-500">HVAC Installation</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The HVAC technician ServiceSync sent was knowledgeable and efficient. Fair pricing and excellent work!"</p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary to-blue-600 p-10 rounded-xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Find trusted professionals in your area and book your service today.</p>
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg">Book a Service</button>
        </div>
      </div>
    );
  }