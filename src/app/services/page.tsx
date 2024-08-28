import { Showcase } from "@/components/ui/home/Showcase";
import {Header}from"@/components/ui/about/Header";
import{Hero}from"@/components/ui/Services/Hero";
import{Services}from"@/components/common/Services";
import{Middle1}from"@/components/ui/Services/Middle1";
import{Middle2}from"@/components/ui/Services/Middle2";
import{Middle3}from"@/components/ui/Services/Middle3";
import{Servic1}from"@/components/ui/Services/Servic1";
import{Transform}from"@/components/ui/Services/Transform";
import{Question}from"@/components/ui/Services/Questions";


export default function  Servicespage() {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <Middle1 />
      <Middle2 />
      <Middle3 />
      <Showcase/>
      <Servic1 />
      <Transform />
      <Question /> 
    </>
  );
}
