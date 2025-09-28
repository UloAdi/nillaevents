import { JSX } from "react/jsx-runtime";

export enum SelectedPage {
  Home = "home",
  OurServices = "ourservices",
  Reviews = "reviews",
  ContactUs = "contactus",
}

export interface ReviewType {
  id: string;
  image: string;
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
}

// export interface Service {
//   id: string;
//   title: string;
//   description: string;
//   thumbnail: string;
//   images: string[];
//   videos: string[];
// }
