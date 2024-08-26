"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useRef } from "react";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Layout414Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header = (props: Layout414Props) => {
  const { tagline, heading, description, buttons } = {
    ...Layout414Defaults,
    ...props,
  } as Props;

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h2>
          </div>
          <div>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button} className={button.className}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout414Defaults: Layout414Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", className: "bg-black text-white" },
    { title: "Button", className: "border border-black text-black bg-transparent" },
  ],
};
