type Props = {
    tagline: string;
    heading: string;
    description: string;
  };
  
  export type Layout77Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Showcases = (props: Layout77Props) => {
    const { tagline, heading, description } = {
      ...Layout77Defaults,
      ...props,
    } as Props;
    
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <div className="mb-3 font-semibold md:mb-4">{tagline}</div>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h2>
          </div>
          <div>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export const Layout77Defaults: Layout77Props = {
    tagline: "This is the tagline",
    heading: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  };
  