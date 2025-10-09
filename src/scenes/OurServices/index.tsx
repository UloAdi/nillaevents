// import { SelectedPage, ServiceType } from "@/shared/types";
// import image1 from "@/assets/WeddingImage.png";
// import video1 from "../../../public/weddingDeco3.mp4";
// import image2 from "@/assets/BridalShower.png";
// import video2 from "../../../public/BridalShower1.mp4";
// import image3 from "@/assets/PrivateBirthdayDinner.png";
// import video3 from "../../../public/PrivateBdVid.mp4.mp4";
// import image4 from "@/assets/Moneybq5.png";
// import video4 from "../../../public/moneybqVid.mp4";
// import image5 from "@/assets/KiddiesBirthdayDeco2.png";
// import video5 from "../../../public/kiddiesParty.mp4";
// import image6 from "@/assets/giftbox2.png";
// import video6 from "../../../public/giftboxvid.mp4";
// import { motion } from "framer-motion";
// import HText from "@/shared/HText";
// import Service from "./Service";

// const services: Array<ServiceType> = [
//   {
//     title: "Weight Training Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image1,
//     video: video1,
//   },

//   {
//     title: "Yoga Classes",
//     description: "",
//     image: image2,
//     video: video2,
//   },
//   {
//     title: "Ab Core Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image3,
//     video: video3,
//   },
//   {
//     title: "Adventure Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image4,
//     video: video4,
//   },
//   {
//     title: "Fitness Classes",
//     description: "",
//     image: image5,
//     video: video5,
//   },
//   {
//     title: "Training Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image6,
//     video: video6,
//   },
// ];

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const OurServices = ({ setSelectedPage }: Props) => {
//   return (
//     <section id="ourclasses" className="w-full bg-primary-100 py-40">
//       <motion.div
//         onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
//       >
//         <motion.div
//           className="mx-auto w-5/6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="md:w-3/5">
//             <HText>OUR SERVICES</HText>
//             <p className="py-5">
//               Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
//               tellus quam porttitor. Mauris velit euismod elementum arcu neque
//               facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
//               enim mattis odio in risus nunc.
//             </p>
//           </div>
//         </motion.div>
//         <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
//           <ul className="w-[2800px] whitespace-nowrap">
//             {services.map((item: ServiceType, index) => (
//               <Service
//                 key={`${item.title}-${index}`}
//                 name={item.title}
//                 description={item.description}
//                 image={item.image}
//               />
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default OurServices;

// import { SelectedPage, ServiceType } from "@/shared/types";

// import React from "react";
// import { motion } from "framer-motion";
// import HText from "@/shared/HText";

// // ✅ Videos from public folder (no imports needed)
// const video1 = "/weddingDeco3.mp4";
// const video2 = "/BridalShower1.mp4";
// const video3 = "/PrivateBdVid.mp4";
// const video4 = "/moneybqVid.mp4";
// const video5 = "/kiddiesParty.mp4";
// const video6 = "/giftboxvid.mp4";

// // ✅ Images from assets
// import image1 from "@/assets/WeddingImage.png";
// import image2 from "@/assets/BridalShower.png";
// import image3 from "@/assets/PrivateBirthdayDinner.png";
// import image4 from "@/assets/Moneybq5.png";
// import image5 from "@/assets/KiddiesBirthdayDeco2.png";
// import image6 from "@/assets/giftbox2.png";
// import { Link } from "react-router-dom";

// const services = [
//   {
//     title: "Wedding Decoration",
//     description:
//       "Elegant wedding decorations tailored to make your big day memorable.",
//     image: image1,
//     video: video1,
//   },
//   {
//     title: "Bridal Shower",
//     description: "Stylish setups to celebrate love and friendship.",
//     image: image2,
//     video: video2,
//   },
//   {
//     title: "Private Birthday Dinner",
//     description:
//       "Beautifully designed intimate setups for unforgettable birthdays.",
//     image: image3,
//     video: video3,
//   },
//   {
//     title: "Money Bouquet",
//     description: "Creative money bouquet arrangements perfect for gifting.",
//     image: image4,
//     video: video4,
//   },
//   {
//     title: "Kiddies Party",
//     description: "Fun and vibrant setups for children’s birthdays.",
//     image: image5,
//     video: video5,
//   },
//   {
//     title: "Gift Boxes",
//     description: "Custom gift boxes for all occasions.",
//     image: image6,
//     video: video6,
//   },
// ];

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const OurServices = ({ setSelectedPage }: Props) => {
//   return (
//     <section id="ourservices" className="w-full bg-primary-100 py-20">
//       <motion.div
//         onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
//       >
//         {/* Header */}
//         <motion.div
//           className="mx-auto w-5/6 text-center mb-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             visible: { opacity: 1, y: 0 },
//           }}
//         >
//           <HText>OUR SERVICES</HText>
//           <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-6 text-lg leading-relaxed text-gray-700">
//             <p>
//               At{" "}
//               <span className="font-semibold text-primary-500">
//                 Nilla Events
//               </span>
//               , we believe every occasion deserves to be nothing short of
//               unforgettable. Whether it’s the elegance of a wedding, the
//               excitement of a child’s birthday party, the sophistication of a
//               corporate event, or the intimacy of a private dinner, our team is
//               dedicated to transforming your vision into a beautiful reality.
//             </p>

//             <p>
//               We don’t just decorate spaces – we curate experiences. Every
//               balloon arrangement, centerpiece, floral design, or backdrop is
//               carefully crafted to reflect your unique story. With creativity,
//               precision, and passion, we ensure your event feels magical from
//               the very first detail to the last.
//             </p>

//             <h2 className="text-2xl font-bold text-primary-500 mt-8">
//               WHAT WE OFFER
//             </h2>
//             <p>
//               From grand celebrations to intimate gatherings, our services cover
//               the full spectrum of event planning and decoration. Our{" "}
//               <span className="font-semibold">wedding designs</span> radiate
//               romance and sophistication, while our
//               <span className="font-semibold"> corporate setups</span> strike
//               the perfect balance between professionalism and style. For{" "}
//               <span className="font-semibold">
//                 birthdays, bridal showers, and baby showers
//               </span>
//               , we add joy, color, and a touch of magic that leaves lasting
//               smiles.
//             </p>
//             <p>
//               We also specialize in{" "}
//               <span className="font-semibold">
//                 custom gift boxes and balloon arrangements
//               </span>
//               , creating thoughtful extras that make your events stand out and
//               feel even more special.
//             </p>
//           </div>
//         </motion.div>

//         {/* Grid Layout for Services */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6 mx-auto">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               {/* Image */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-56 object-cover"
//               />

//               {/* Video */}
//               {/* <video
//                 src={service.video}
//                 controls
//                 className="w-full h-56 object-cover"
//               /> */}

//               {/* Text Content */}
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{service.title}</h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   {service.description}
//                 </p>
//                 <Link to={`/services/${index}`}>
//                   <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">
//                     View More
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default OurServices;

import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { services } from "@/data/services";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurServices = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourservices" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
      >
        {/* Header */}
        <motion.div
          className="mx-auto w-5/6 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>OUR SERVICES</HText>
          <p className="max-w-4xl mx-auto mt-6 text-lg leading-relaxed text-black">
            At{" "}
            <span className="font-semibold text-primary-500">Nilla Events</span>
            , we believe every occasion deserves to be unforgettable.
            <p>
              From grand celebrations to intimate gatherings, our services cover
              the full spectrum of event planning and decoration. Our{" "}
              <span className="font-semibold">wedding designs</span> radiate
              romance and sophistication, while our
              <span className="font-semibold"> corporate setups</span> strike
              the perfect balance between professionalism and style. For{" "}
              <span className="font-semibold">
                birthdays, bridal showers, and baby showers,{" "}
              </span>
              we add joy, color and a touch of magic that leaves lasting smiles.
            </p>
            <p>
              {" "}
              <p>
                We also specialize in{" "}
                <span className="font-semibold">
                  custom gift boxes and balloon arrangements,
                </span>
                creating thoughtful extras that make your events stand out and
                feel even more special.{" "}
              </p>
            </p>
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6 mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              {/* <img
                src={service.video}
                alt={service.title}
                className="w-full h-56 object-cover"
              /> */}
              <video
                src={service.video}
                muted
                playsInline
                controls
                className="w-full h-72 object-cover"
              />

              {/* Text */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-lg mt-2">
                  {service.description}
                </p>

                {/* View More button */}

                <AnchorLink
                  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                  href={`#${SelectedPage.ContactUs}`}
                >
                  <button className="mt-4 px-4 py-2 bg-primary-500 text-rose-400 underline rounded-lg hover:text-amber-400 transition">
                    View More
                  </button>
                </AnchorLink>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;
