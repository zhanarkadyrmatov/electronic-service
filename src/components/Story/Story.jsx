import React from "react";
import s from "./page.module.scss";
import ReactInstaStories from "react-insta-stories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdClose } from "react-icons/md";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const stories = [
  {
    url: "https://world-schools.com/ru/wp-content/uploads/sites/15/2023/05/IMG-Academy-cover-WS.webp",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 5h ago",
      profileImage: "https://picsum.photos/1000/1000",
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
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    type: "video",
    header: {
      heading: "Жанарбекк",
      subheading: "Кадырматов",
      profileImage:
        "https://avatars0.githubusercontent.com/u/24852829?s=400&v=4",
    },
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    type: "video",
  },
];

function SeeMore() {
  return <div>see more</div>;
}
export default function Story({ story, setStory }) {
  const storyContent = {
    marginTop: "20px",
  };
  return (
    <div className={s.story}>
      <div>
        {/* <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
            isPaused={(e) => {
              console.log(e);
            }}
          />
        </div>
      </div>
      <button onClick={() => setStory(!story)} className={s.close}>
        <MdClose className={s.logo} />
      </button>
    </div>
  );
}
