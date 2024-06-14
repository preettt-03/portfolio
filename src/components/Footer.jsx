import React from 'react';
import { FaInstagram, FaSnapchat, FaYoutube } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
// import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-4">
    {/* <div className="max-w-screen-lg mx-auto text-center">
      <p>&copy; 2024 Preet Patel. All rights reserved.</p>
    </div> */}
    <div className="container mx-auto flex justify-center space-x-6">
        
        <a href="https://leetcode.com/u/preet_03/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <SiLeetcode size={30} />
        </a>
        <a href="https://www.geeksforgeeks.org/user/preetpatel9977/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <SiGeeksforgeeks size={30} />
        </a>
        <a href="https://www.instagram.com/preettt_03/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.snapchat.com/add/preettt_003?share_id=mfCx3pRtQ8yWCXHtleFDZQ&locale=en_IN" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaSnapchat size={30} />
        </a>
        <a href="https://www.youtube.com/channel/UCN5zQMMi_jszpj12rs9uxLw" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaYoutube size={30} />
        </a>
        
      </div>
      {/* <SocialLinks /> */}
      <div className="max-w-screen-lg mx-auto text-center py-4">
      <p>&copy; 2024 Preet Patel. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer;