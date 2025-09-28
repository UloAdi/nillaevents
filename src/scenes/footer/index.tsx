import footerlogo from "@/assets/footerlogo.png";
import { FaPhoneAlt } from "react-icons/fa";
// components/Footer.tsx
import React from "react";
import { SocialMediaIcons } from "@/scenes/SocialMediaIcons/socialmediaicons";

const Footer = () => {
  return (
    <footer className="bg-rose-100 py-8 text-md">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            className="w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 h-auto"
            alt="logo"
            src={footerlogo}
          />
          <p className="my-5">
            Nilla Events – Crafting unforgettable experiences, one event at a
            time.
            <div>Privacy Policy | Terms of Service</div>
          </p>
          <p>Nilla Events All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <div className="text-rose-800 py-6">
            <div className="container mx-auto text-center">
              <p className="mb-4 flex">Follow us on social media</p>
              <SocialMediaIcons />
              <p className="mt-4 text-sm flex">&copy; 2025 Nilla Events</p>
            </div>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Event Planner, Surprise Planner and Gift Store.
          </p>
          <FaPhoneAlt />
          <span>+234 812 935 2036</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
