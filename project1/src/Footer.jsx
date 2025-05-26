import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRadio } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#12264D] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <div>
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <FontAwesomeIcon icon={faFlag} className="text-blue-300" />
            <span>Go Make Something Awesome</span>
          </h2>
          <p className="text-sm mt-2 text-gray-300 max-w-3xl">
            Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.
            <br />
            Made with <FontAwesomeIcon icon={faHeart} className="text-pink-400" /> and <FontAwesomeIcon icon={faRadio} className="text-gray-300" /> in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="text-gray-400 font-semibold mb-2">Awesomeverse</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Web Awesome</a></li>
              <li><a href="#" className="hover:underline">11ty</a></li>
              <li><a href="#" className="hover:underline">Podcast Awesome</a></li>
              <li><a href="#" className="hover:underline">Blog Awesome</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-semibold mb-2">Font Awesome</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Download</a></li>
              <li><a href="#" className="hover:underline">Changelog</a></li>
              <li><a href="#" className="hover:underline">All Versions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-semibold mb-2">Community</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">GitHub</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
              <li><a href="#" className="hover:underline">Threads</a></li>
              <li><a href="#" className="hover:underline">Awesome Swag</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-semibold mb-2">Help</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Troubleshooting</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pt-6 border-t border-gray-700 mt-4 space-y-2 md:space-y-0">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="#" className="hover:underline">License</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Refunds</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
          </div>
          <div className="mt-2 md:mt-0">
            © Fonticons, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
