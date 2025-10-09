import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import Action from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomePageImage1 from "@/assets/HomePageImage1.jpg";
import HomePageImage2 from "@/assets/HomePageImage2.png";
import HomePageImage3 from "@/assets/HomePageImage3.png";
import HomePageImage4 from "@/assets/HomePageImage4.jpg";
import HomePageImage5 from "@/assets/HomePageImage5.jpg";
import HomePageImage6 from "@/assets/HomePageImage6.jpg";
import HomePageImage7 from "@/assets/HomePageImage7.jpg";
import HomePageImage8 from "@/assets/HomePageImage8.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: true,
  swipe: true,
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16  pt-40 scroll-mt-40 md:h-full md:pb-0">
      {/*IMAGE AND MAIN HEADER  */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-rose-800 text-center mb-6">
              Welcome to Nilla Events
              <p>(Event Planner)</p>
            </h1>

            {/* Supporting paragraph */}
            <div className="max-w-3xl mx-auto px-4 py-2">
              {/* <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-5">
                ABOUT US
              </h2> */}
              <p className="text-rose-800 leading-relaxed mb-4 text-lg">
                <span className="font-bold text-pink-800">Nilla Events</span> is
                a premier event planning and decoration company based in Owerri,
                Imo State. We specialize in creating unforgettable experiences
                for weddings, corporate functions, surprise celebrations and
                kids’ parties.
              </p>
              <p className="text-rose-800 leading-relaxed mb-4 text-lg">
                Our services also include customized gift boxes, balloon
                arrangements, and more. At Nilla Events, we plan and create
                while you smile — leaving your guests with priceless memories
                that last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mb-8 flex items-center gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="bg-rose-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-amber-400 transition-colors ml-5"
              onClick={() => setSelectedPage(SelectedPage.OurServices)}
              href={`#${SelectedPage.OurServices}`}
            >
              Explore Our Services
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="mt-12 md:mt-0 md:basis-2/5 max-w-md mx-auto md:mx-0">
          <Slider {...sliderSettings}>
            {[
              HomePageImage1,
              HomePageImage2,
              HomePageImage3,
              HomePageImage4,
              HomePageImage5,
              HomePageImage6,
              HomePageImage7,
              HomePageImage8,
            ].map((img, index) => (
              <div key={index} className="px-2">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
