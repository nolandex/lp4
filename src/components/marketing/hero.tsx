import { ArrowRightIcon, BriefcaseIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Container from "../global/container";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-40 relative">
      <Container delay={0.0}>
        <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
            <div className="w-1.5 h-1.5 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <span className="inline-flex items-center justify-center gap-2 text-sm text-primary">
            Build for the future
            <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
              What's new
              <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
            </span>
          </span>
        </div>
      </Container>
      <BlurText
        word={"Your ultimate business\n services tool"}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] mt-6 font-heading"
      />
      <Container delay={0.1}>
        <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
          Empower your business with tailored solutions for growth and efficiency.{" "}
          <span className="hidden sm:inline">Luro is the all-in-one platform for your business needs.</span>
        </p>
      </Container>
      <Container delay={0.2}>
        <div className="flex items-center justify-center md:gap-x-6 mt-8">
          <Button asChild size="lg">
            <Link href="/app">Start for free</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="hidden md:flex">
            <Link href="#">How it works</Link>
          </Button>
        </div>
      </Container>
      <Container delay={0.3}>
        <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-4 md:p-6 mt-12">
          <div className="flex items-center justify-center">
            <BriefcaseIcon className="w-16 h-16 text-primary/80 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
