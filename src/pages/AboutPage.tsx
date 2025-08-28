import React from 'react';
import { Award, Users, Zap, Shield, Heart, Target } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Deepa Enterprises
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Your trusted partner for quality electronics and home appliances since 1985. 
              We believe in bringing the latest technology to every home in India.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 1990 by Mr. Sandeep Jain, Deepa Enterprises started as a small 
                    electronics shop in Sitapur. With a vision to make quality electronics 
                    accessible to every household, we have grown into one of India's trusted 
                    electronics retailers.
                  </p>
                  <p>
                    Over the years, we've built strong relationships with leading brands like 
                    Samsung, LG, Sony, and many others. Our commitment to customer satisfaction 
                    and after-sales service has earned us the trust of thousands of families 
                    across India.
                  </p>
                  <p>
                    Today, Deepa Enterprises operates both online and offline, serving customers 
                    nationwide with a comprehensive range of home appliances, kitchen equipment, 
                    audio-video systems, and consumer electronics.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold">
                      1985
                    </div>
                    <div>
                      <h4 className="font-semibold">Company Founded</h4>
                      <p className="text-sm text-gray-600">Started as a small electronics shop in Mumbai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold">
                      1995
                    </div>
                    <div>
                      <h4 className="font-semibold">First Branch</h4>
                      <p className="text-sm text-gray-600">Expanded to Delhi with our second store</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold">
                      2010
                    </div>
                    <div>
                      <h4 className="font-semibold">Online Presence</h4>
                      <p className="text-sm text-gray-600">Launched e-commerce platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold">
                      2024
                    </div>
                    <div>
                      <h4 className="font-semibold">Digital Revolution</h4>
                      <p className="text-sm text-gray-600">Modern website with enhanced user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Every decision we make prioritizes our customers' needs and satisfaction
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  We source only the finest products from trusted brands and manufacturers
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Reliability</h3>
                <p className="text-gray-600">
                  Building long-term relationships through honest business practices
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Embracing new technologies to enhance our products and services
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  Supporting local communities and contributing to social causes
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Continuously striving for perfection in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide high-quality electronics and home appliances at competitive prices, 
                  backed by exceptional customer service and comprehensive after-sales support. 
                  We aim to make modern technology accessible to every Indian household.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become India's most trusted and preferred destination for electronics and 
                  home appliances, known for our commitment to quality, innovation, and customer 
                  satisfaction. We envision a future where every home is empowered by technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-gray-600">
                Meet the people behind Deepa Enterprises' success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#003366] to-[#004080] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">DS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deepak Sharma</h3>
                <p className="text-[#003366] font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader with 35+ years of experience in the electronics industry
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#003366] to-[#004080] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Sharma</h3>
                <p className="text-[#003366] font-medium mb-3">Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Oversees daily operations and ensures seamless customer experience
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#003366] to-[#004080] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Sharma</h3>
                <p className="text-[#003366] font-medium mb-3">Technology Head</p>
                <p className="text-gray-600 text-sm">
                  Drives digital transformation and innovative technology solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
              <p className="text-gray-200">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <p className="text-gray-200">Happy Customers</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1,000+</div>
                <p className="text-gray-200">Products</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <p className="text-gray-200">Brands</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <p className="text-gray-200">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}