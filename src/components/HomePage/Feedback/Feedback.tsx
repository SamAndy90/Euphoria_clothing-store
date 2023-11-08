"use client";

import { Container, Title } from "@/common/ui";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


import Avatar1 from "./static/avatar1.jpg";
import Avatar2 from "./static/avatar2.jpg";
import Avatar3 from "./static/avatar3.jpg";
import { Autoplay, Pagination } from "swiper/modules";

export type FeedbackType = {
  data?: FeedbackDataType[] | [];
};

export function Feedback(props: FeedbackType) {
  const { data } = props;
  return (
    <section className="mb-24">
      <Container>
        <Title className="pl-6 mb-16 text-gray-700 relative before:absolute before:bg-violet-500 before:rounded-full before:w-1.5 before:left-0 before:top-0 before:h-[30px] before:hover:animate-fill">
          Feedback
        </Title>
        <div className="">
        <Swiper
            className=""
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            spaceBetween={10}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //   },
            //   600: {
            //     slidesPerView: 2,
            //   },
            //   992: {
            //     slidesPerView: 4,
            //   },
            // }}
            // navigation={{
            //   nextEl: "#next-arrow",
            //   prevEl: "#prev-arrow",
            // }}
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div className="">
                  <Image
                    src={feedback.avatar}
                    alt={feedback.imageAlt}
                    className="rounded-lg"
                  />
                  <h4 className="">
                    {feedback.fullName}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export type FeedbackDataType = {
  id: number;
  avatar: StaticImageData;
  imageAlt: string;
  fullName: string;
  description: string;
  rating: number;
};

export const feedbacks: FeedbackDataType[] = [
  {
    id: 1,
    avatar: Avatar1,
    imageAlt: "avatar",
    fullName: "Floyd Miles",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    rating: 3.5,
  },
  {
    id: 2,
    avatar: Avatar2,
    imageAlt: "avatar",
    fullName: "Ronald Richards",
    description:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    rating: 4,
  },
  {
    id: 3,
    avatar: Avatar3,
    imageAlt: "avatar",
    fullName: "Savannah Nguyen",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    rating: 4.5,
  },
  {
    id: 4,
    avatar: Avatar1,
    imageAlt: "avatar",
    fullName: "Floyd",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    rating: 5,
  },
  {
    id: 5,
    avatar: Avatar2,
    imageAlt: "avatar",
    fullName: "Miles",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    rating: 3,
  },
];
