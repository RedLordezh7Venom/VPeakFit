import React from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";

const Footer = () => {
  const socialLinks = [
    { icon: "fa-brands fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fa-brands fa-instagram", href: "#", label: "Instagram" },
    { icon: "fa-brands fa-twitter", href: "#", label: "Twitter" },
    { icon: "fa-brands fa-youtube", href: "#", label: "YouTube" },
  ];

  const footerSections = [
    {
      title: "Explore",
      links: [
        { name: "Workouts", path: "/workouts" },
        { name: "Nutrition", path: "/nutrition" },
        { name: "Progress", path: "/progress" },
        { name: "Challenges", path: "/challenges" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" },
        { name: "Press", path: "/press" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Contact Us", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms", path: "/terms" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand and description */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-gray-600 mt-4">
              Transform your fitness journey with personalized workout plans, nutrition guidance, and progress tracking.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={index} className="md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-base text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="mt-4 text-gray-600">
              Subscribe to our newsletter for the latest fitness tips and updates.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-r-md hover:from-indigo-700 hover:to-purple-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-base text-gray-500">
              &copy; {new Date().getFullYear()} VPeakFit. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500">
                Made with <span className="text-red-500">❤️</span> for fitness enthusiasts
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
