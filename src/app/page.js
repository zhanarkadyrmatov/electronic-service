import Image from "next/image";
import styles from "./page.module.css";
import { Stories } from "@/components/Stories/Stories";
import Categories from "@/components/Categories/Categories";
import Popular from "@/components/Popular/Popular";
import Brands from "@/components/Brands/Brands";
import NewSlider from "@/components/Slider/NewSlider/NewSlider";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navigation />
        <Stories />
        <NewSlider />
        <Brands />
        <Categories />
        <Popular />
      </div>
    </>
  );
}
