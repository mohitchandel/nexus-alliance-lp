import {Team}from"@/components/ui/Team";
import {Logo}from "@/components/ui/home/logo";
import {Header}from"@/components/ui/about/Header";
import{Hero}from"@/components/ui/about/Hero";
import{Information}from"@/components/ui/about/Information";
import{Testimonial}from"@/components/ui/about/Testimonial";

export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <Team />
      <Information />
      <Testimonial/>
      <Logo />
    </>
  );
}
