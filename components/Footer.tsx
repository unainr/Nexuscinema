import React from 'react'
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-14 ">
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-4"><Link href={"/"}>
							<img
								className="h-8 w-auto"
								src={"/logo1.png"}
								/>
								</Link></h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your gateway to the world of cinema. Stay updated with the latest reviews, news, and trends in the film industry.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6">About Us</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            We are passionate about movies and are dedicated to bringing you the best in movie reviews, news, and insights.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
          <ul className="space-y-3">
            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/movies" className="text-gray-400 hover:text-white transition-colors">Movies</Link></li>
            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Contact Us</h2>
          <ul className="space-y-3">
            <li className="text-sm"><a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">Email: info@Nexuscinema.com</a></li>
            <li className="text-sm"><a href="tel:+123456789" className="text-gray-400 hover:text-white transition-colors">Phone: +1 (234) 567-89</a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; 2024 Nexuscinema. All rights reserved.</p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </footer>
  
  
  
  )
}

export default Footer