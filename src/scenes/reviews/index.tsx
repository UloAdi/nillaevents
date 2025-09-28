import HText from "@/shared/HText";
import { ReviewType, SelectedPage } from "@/shared/types";
import Review1 from "@/assets/review1.png";
import Review2 from "@/assets/review5.png";
import Review3 from "@/assets/review4.png";
import Review4 from "@/assets/review3.png";
import { motion } from "framer-motion";
import Reviews from "@/scenes/reviews/Review"; // Your Review item component
import ActionButton from "@/shared/ActionButton";

const review: Array<ReviewType> = [
  { id: "1", image: Review1 },
  { id: "2", image: Review2 },
  { id: "3", image: Review3 },
  { id: "4", image: Review4 },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Review = ({ setSelectedPage }: Props) => {
  return (
    // <section id="reviews" className="mx-auto min-h-full w-5/6 py-20 bg-rose-50">

    <section id="reviews" className="w-full bg-rose-50 py-20">
      <div className="mx-auto w-5/6 min-h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText> WHY CHOOSE US?</HText>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Personalized Planning</span> –
                we listen, understand, and design events tailored to your taste.
              </li>
              <li>
                <span className="font-semibold">Creative Designs</span> – from
                modern trends to timeless elegance, we bring fresh ideas to the
                table.
              </li>
              <li>
                <span className="font-semibold">Stress-Free Experience</span> –
                you enjoy the moment while we handle the details.
              </li>
              <li>
                <span className="font-semibold">Memorable Moments</span> – our
                goal is not just to plan, but to create experiences you’ll
                cherish forever.
              </li>
            </ul>

            <p className="pt-4 font-semibold text-gray-900">
              At Nilla Events, we plan and create — while you smile and everyone
              remembers. 💖
            </p>
          </motion.div>

          {/* REVIEWS */}
          <motion.div
            className="mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {/* <ul className="flex overflow-x-auto gap-4 py-4 scrollbar-thin scrollbar-thumb-rose-500">
              {review.map((review: ReviewType) => (
                <Reviews
                  key={review.id}
                  id={review.id}
                  image={review.image}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </ul> */}
            <ul className="grid grid-cols-2 gap-4 md:flex md:overflow-x-auto md:gap-4 py-4 scrollbar-thin scrollbar-thumb-rose-500">
              {/* <ul className="flex flex-col md:flex-row flex-wrap md:flex-nowrap overflow-x-auto gap-4 py-4 scrollbar-thin scrollbar-thumb-rose-500"> */}
              {review.map((review: ReviewType) => (
                <Reviews
                  key={review.id}
                  id={review.id}
                  image={review.image}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
