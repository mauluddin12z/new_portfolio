"use client";

import { Chatbot } from "@/components/Chatbot";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Certs } from "@/components/Certs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Work />
      <Experience />
      <Stack />
      <Certs />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
