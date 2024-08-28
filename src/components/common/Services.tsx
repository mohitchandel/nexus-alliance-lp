import {
  Button,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  questions: QuestionsProps[];
};

export type Faq4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Services = (props: Faq4Props) => {
  const { heading, description, questions } = {
    ...Faq4Defaults,
    ...props,
  } as Props;

  return (
    <section className="px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{heading}</h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl">{description}</p>
        </div>
        <Accordion type="multiple" className="space-y-4">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-300 rounded-lg shadow-sm"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="text-gray-600 transition-transform duration-300 transform md:text-xl" />
                }
                className="flex items-center justify-between p-4 md:p-5 text-lg font-semibold text-gray-800 [&[data-state=open]>svg]:rotate-45"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="p-4 md:p-5 text-base text-gray-700">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const Faq4Defaults: Faq4Props = {
  heading: "Alliance Services Overview",
  description:
    "Comprehensive SDLC & DevSecOps Consulting Deliver secure, efficient, and compliant software solutions with end-to-end SDLC guidance and integrated DevSecOps practices, ensuring every project phase from concept to deployment meets the highest standards.",
  questions: [
    {
      title: "Advanced Blockchain Solutions & Deployment",
      answer:
        "Architect and implement robust blockchain systems tailored to business needs, including Hyperledger Fabric and other decentralized technologies for secure, scalable, and transparent operations.",
    },
    {
      title: "Smart Contract Development, Auditing & Compliance",
      answer:
        "Design, audit, and deploy smart contracts that automate and secure business processes. Our team ensures compliance and security, reducing risks in financial, legal, and operational functions.",
    },
    {
      title: "Cutting-Edge Platform Engineering & Cloud Integration",
      answer:
        "Leverage our expertise in building scalable, cloud-native platforms with modern technologies. We offer services from microservices architecture to Infrastructure as Code (IaC), ensuring resilient and adaptable infrastructure.",
    },
    {
      title: "AI & Machine Learning Integration",
      answer:
        "Incorporate AI and machine learning into your business processes. We provide custom AI solutions, from data analysis to predictive modeling, empowering data-driven decision-making and innovation.",
    },
    {
      title: "Cybersecurity & Compliance Services",
      answer:
        "Protect your digital assets with our comprehensive cybersecurity services, including threat detection, endpoint protection, and regulatory compliance. We ensure your operations remain secure and compliant with industry standards.",
    },
    {
      title: "Enterprise IT & Cloud Migration",
      answer:
        "Seamlessly transition your business to the cloud with our enterprise IT solutions. We manage everything from cloud strategy and migration to optimization and ongoing management, ensuring minimal disruption and maximum efficiency.",
    },
    {
      title: "Decentralized Application (DApp) Development",
      answer:
        "Create innovative decentralized applications (DApps) that operate on blockchain technology. We provide end-to-end development services, from conceptualization to deployment, ensuring secure and scalable solutions.",
    },
    {
      title: "Data Analytics & Business Intelligence",
      answer:
        "Unlock insights with our data analytics and business intelligence services. We help organizations harness the power of data, delivering actionable insights and strategic recommendations to drive business growth.",
    },
    {
      title: "Collaboration & Community-Driven Innovation",
      answer:
        "Join a vibrant community of innovators and businesses working together to drive industry advancements. Our alliance fosters collaboration, knowledge-sharing, and joint ventures, ensuring collective growth and success.",
    },
    {
      title: "Managed IT Services & Support",
      answer:
        "Ensure operational continuity with our managed IT services. We offer 24/7 support, system monitoring, and proactive maintenance to keep your IT infrastructure running smoothly and securely.",
    },
    {
      title: "IoT & Edge Computing Solutions",
      answer:
        "Integrate IoT and edge computing technologies into your business operations. Our services range from IoT device management to edge computing solutions, providing real-time data processing and analysis for smarter decision-making.",
    },
    {
      title: "Regulatory Compliance & Risk Management",
      answer:
        "Navigate complex regulatory landscapes with our compliance and risk management services. We ensure your business adheres to all relevant regulations, minimizing risks and protecting your reputation.",
    },
  ],
};
