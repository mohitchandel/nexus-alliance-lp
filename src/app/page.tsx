import Image from "next/image";
import { Navbar } from "../components/common/Navbar";
import { Header } from "../components/ui/home/Headers";
import { CallToAction } from "@/components/ui/home/CallToAction";
import { Showcase } from "@/components/ui/home/Showcase";
import {Services} from"@/components/common/Services";
import {About} from"@/components/ui/home/About";
import {Team}from"@/components/ui/Team";
import {Testimonial}from"@/components/ui/home/Testimonial";
import{Contact}from"@/components/ui/home/Contact";
import {Logo}from "@/components/ui/home/logo";
export default function Home() {
  return (
    <>
      <Header />
      <Logo />
      <CallToAction />
      <Showcase />
      <Services />
      <About />
      <Team />
      <Testimonial />
      <Contact />
    </>
  );
}
