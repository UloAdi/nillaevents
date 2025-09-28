// components/SocialMediaIcons.tsx
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import React from "react";

const iconClass = "text-rose-700";

const icons = [
  { icon: <FaWhatsapp />, url: "https://wa.me/message/GTYMXV4Q7MXDJ1" },
  {
    icon: <FaFacebookF />,
    url: "https://facebook.com/nillaevents.nillaevents",
  },
  {
    icon: <FaYoutube />,
    url: "https://m.youtube.com/@Nillaevents?fbclid=PAVERTVgMtmg9leHRuA2FlbQIxMAABpyrZrCEoDPkNthjTYb8R9Sq_ZPUtUzeUWGMOgxzQ4ZCr6zsKOvtJH3WOzrNf_aem_eGDAOvK4h1lItATYvlTtJg",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/nilla_events?igsh=MW5kMTV6ZTF4bjAwOA==",
  },
  {
    icon: <FaTiktok />,
    url: "https://tiktok.com/@nilla_events",
  },
];

export const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconClass} text-xl`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
