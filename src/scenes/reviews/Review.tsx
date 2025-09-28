import { SelectedPage } from "@/shared/types";

type ReviewProps = {
  id: string;
  image: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Review = ({ id, image, setSelectedPage }: ReviewProps) => {
  const overlayStyles = `absolute inset-0 bg-primary-500 bg-opacity-70
    flex flex-col items-center justify-center
    text-white opacity-0 hover:opacity-90 transition-opacity duration-500
    p-5 text-center`;

  return (
    <li
      className="relative mx-2 my-4 h-64 w-64 md:h-72 md:w-72 rounded-lg overflow-hidden cursor-pointer shadow-lg"
      onClick={() => setSelectedPage(SelectedPage.Reviews)}
    >
      <img
        alt={`Review ${id}`}
        src={image}
        className="h-full w-full object-contain"
      />
      <div className={overlayStyles}></div>
    </li>
  );
};

export default Review;
