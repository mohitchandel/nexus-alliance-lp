import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  teamMembers: TeamMember[];
};

export type Team2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Team = (props: Team2Props) => {
  const { tagline, heading, description, teamMembers } = {
    ...Team2Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-start md:ml-[-8px] md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 ">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md  ">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start  justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 ">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-stretch text-center">
      <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
        <img
          src={member.image.src}
          alt={member.image.alt}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <div className="mb-3 md:mb-4 self-start">
        <h5 className="inline-block text-md font-semibold md:text-lg ">{member.name}</h5>
        <h6 className=" md:text-md  self-start md:ml-[-30px] ">{member.jobTitle}</h6>
      </div>
      <p className=" md:text-xsm  self-start md:ml-[-9px]">{member.description}</p>
      <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-start">
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export const Team2Defaults: Team2Props = {
  tagline: "Innovation",
  heading: " Meet Our team",
  description: "Get to know the Key individuals and companies in our alliance.",
  teamMembers: [
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 1",
      },
      name: "John Doe",
      jobTitle: "CEO",
      description:
        "John Doe is a visionary leader with a passion for innovation and growth..",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 2",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 3",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 4",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 5",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 6",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 7",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 8",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
  ],
};
