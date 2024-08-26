"use client";

import React from "react";

type Props = {
  tagline: string;
  heading: string;
  description: string;
};

export type Testimonial35Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Location = (props: Testimonial35Props) => {
  const { tagline, heading, description } = {
    ...Testimonial35Defaults,
    ...props,
  } as Props;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
      </div>
    </section>
  );
};

export const Testimonial35Defaults: Testimonial35Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description:
    "Lorem ipsum dolor sit amet, ut commodo diam libero vitae erat.",
};
