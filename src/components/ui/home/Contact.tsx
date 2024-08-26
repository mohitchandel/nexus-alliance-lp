import type { ButtonProps } from "@relume_io/relume-ui";
import { Button } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  buttons: ButtonProps[];
  description: string;
  image: ImageProps;
};

export type Layout38Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact = (props: Layout38Props) => {
  const { heading, description, image, buttons } = {
    ...Layout38Defaults,
    ...props,
  } as Props;

  return (
    <section className="relative px-[5%]">
      <div className="container">
        <div className="flex items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-4xl">
              {heading}
            </h3>
            <p className="text-base text-text-alternative md:text-md">{description}</p>
            <div className="mt-8 flex gap-x-4">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Layout38Defaults: Layout38Props = {
  heading: "Discover Our Services Today",
  description: "Find out how our collaborative approach can benefit your business.",
  buttons: [
    { title: "Get Started", variant: "primary" }, // Use valid variant
    { title: "Learn More", variant: "secondary-alt" } // Use valid variant
  ],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
