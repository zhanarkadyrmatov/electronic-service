import React from "react";
import s from "./page.module.scss";
import ReactInstaStories from "react-insta-stories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const stories = [
  {
    url: "https://picsum.photos/1080/1920",
    seeMore: <SeeMore />,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 5h ago",
      profileImage: "https://picsum.photos/1000/1000",
    },
  },
  {
    url: "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 32m ago",
      profileImage: "https://picsum.photos/1080/1920",
    },
  },
  {
    url: "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
    header: {
      heading: "mohitk05/react-insta-stories",
      subheading: "Posted 32m ago",
      profileImage:
        "https://avatars0.githubusercontent.com/u/24852829?s=400&v=4",
    },
  },
  {
    url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    type: "video",
    duration: 1000,
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    type: "video",
    seeMore: <SeeMore />,
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    type: "video",
  },
  "https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
];

function SeeMore() {
  return <div>see more</div>;
}
export default function Story() {
  const storyContent = {
    marginTop: "20px",
  };
  return (
    <div className={s.story}>
      <div>
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ReactInstaStories
              stories={stories}
              defaultInterval={5000}
              width={432}
              height={720}
              loop={true}
              loader={true}
              keyboardNavigation={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReactInstaStories
              stories={stories}
              defaultInterval={5000}
              width={432}
              height={720}
              loop={true}
              loader={true}
              keyboardNavigation={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReactInstaStories
              stories={stories}
              defaultInterval={5000}
              width={432}
              height={720}
              loop={true}
              loader={true}
              keyboardNavigation={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
        </Swiper> */}
        <div className={s.wrapper}>
          <ReactInstaStories
            className={s.stories}
            stories={stories}
            defaultInterval={5000}
            width={432}
            height={720}
            loop={true}
            loader={true}
            keyboardNavigation={true}
            storyStyles={storyContent}
          />
        </div>
      </div>
    </div>
  );
}
