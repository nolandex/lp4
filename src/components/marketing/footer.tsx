"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { Particles } from "../ui/particles";

const Footer = () => {
    return (
        <footer className="w-full py-10 relative">
            <Container>
                <Wrapper className="relative flex flex-col items-center pb-40 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#d4d4d8"
                        refresh
                    />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
                        <Accordion type="single" collapsible className="w-full max-w-2xl">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is your product about?</AccordionTrigger>
                                <AccordionContent>
                                    Our product is a powerful tool for managing your social media presence with AI-powered features.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>How do I get started?</AccordionTrigger>
                                <AccordionContent>
                                    You can get started by signing up for a free account on our website and exploring the dashboard.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, we offer a 14-day free trial with full access to all features.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>How can I contact support?</AccordionTrigger>
                                <AccordionContent>
                                    You can reach our support team via the Help Center or email at support@example.com.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-center relative">
                    <p className="text-sm text-secondary-foreground">
                        © {new Date().getFullYear()} Luro. All rights reserved.
                    </p>
                </Wrapper>
            </Container>
        </footer>
    );
};

export default Footer;
