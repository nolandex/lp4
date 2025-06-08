"use client";

import { PLANS } from "@/constants"; // Pastikan path ini benar
import { cn } from "@/functions"; // Pastikan path ini benar
// AnimatePresence dan motion mungkin masih digunakan di Plan
// import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react"; // ChevronLeft & ChevronRight tidak lagi dibutuhkan
import Link from "next/link";
import Container from "../global/container"; // Pastikan path ini benar
import { Button } from "../ui/button"; // Pastikan path ini benar
import NumberTicker from "../ui/number-ticker"; // Pastikan path ini benar
import { SectionBadge } from "../ui/section-bade"; // Pastikan path ini benar
import Image from "next/image";
import { useState } from "react";

const Pricing = () => {
    const filteredPlans = PLANS.filter(plan => plan.id !== "enterprise");

    const images = [
        { src: "/images/toko-online.png", alt: "Toko Online", name: "Toko Online", categoryId: "toko-online" },
        { src: "/images/landing-page-jasa.png", alt: "Landing Page Jasa", name: "LP Jasa", categoryId: "landing-jasa" }, // Nama disingkat
        { src: "/images/portofolio-pribadi.png", alt: "Portofolio Pribadi", name: "Portofolio", categoryId: "portofolio" }, // Nama disingkat
        { src: "/images/company-profile.png", alt: "Company Profile", name: "Company Profile", categoryId: "company-profile" },
        { src: "/images/blog.png", alt: "Blog", name: "Blog Web", categoryId: "blog" }, // Sedikit diubah agar unik jika ada plan "Blog"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Fungsi nextSlide dan prevSlide tidak lagi dibutuhkan jika navigasi hanya via tombol nama
    // const nextSlide = () => { ... };
    // const prevSlide = () => { ... };

    const handleNavigationClick = (index: number) => {
        setCurrentIndex(index);
    };

    const activePlans = filteredPlans;

    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container className="overflow-x-hidden">
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <SectionBadge title="Pilih Paket Anda" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Harga Simpel dan Transparan
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Pilih paket yang sesuai dengan kebutuhan website Anda. Tanpa biaya tersembunyi.
                    </p>
                </div>
            </Container>

            <div className="mt-8 w-full relative flex flex-col items-center justify-center">
                <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
                <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>

                <Container>
                    <div className="w-full flex flex-col items-center justify-center mb-8 sm:mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                            {activePlans.map((plan, index) => (
                                <Plan
                                    key={`${plan.id}-${images[currentIndex].categoryId}`}
                                    index={index}
                                    {...plan}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
                        <div className="relative w-full overflow-hidden rounded-xl group">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="w-full flex-shrink-0">
                                        <div className="relative rounded-xl lg:rounded-[28px] border border-neutral-200/50 p-1.5 md:p-2 backdrop-blur-sm border-neutral-700 bg-neutral-800/50">
                                            <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[8rem] md:blur-[10rem]"></div>
                                            <div className="rounded-lg lg:rounded-[20px] border p-1.5 md:p-2 border-neutral-700 bg-black overflow-hidden">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={1280}
                                                    height={720}
                                                    className="rounded-md lg:rounded-[16px] w-full h-auto aspect-video object-cover"
                                                    priority={imgIndex === 0}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center pt-3 pb-2 md:pt-4 md:pb-3 px-3 sm:px-4">
                                                <h3 className="text-sm sm:text-base md:text-lg font-medium text-foreground text-left mr-2 truncate">
                                                    {image.name}
                                                </h3>
                                                <Button
                                                    asChild
                                                    variant="default"
                                                    size="sm"
                                                    className="whitespace-nowrap px-3 py-1.5 sm:px-4"
                                                >
                                                    <Link href={`/order?service=${image.categoryId}`}>
                                                        Pesan Sekarang
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tombol Navigasi Nama Jenis Website (Pengganti tombol Sebelum/Berikutnya) */}
                        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6 px-1">
                            {images.map((image, index) => (
                                <Button
                                    key={image.categoryId}
                                    variant={currentIndex === index ? "default" : "outline"}
                                    size="sm" // Ukuran tombol dikecilkan
                                    onClick={() => handleNavigationClick(index)}
                                    className={cn(
                                        "transition-all duration-200 ease-in-out",
                                        "text-xs sm:text-sm leading-tight", // Ukuran teks dan line-height disesuaikan
                                        "h-auto px-2.5 py-1.5 sm:px-3 sm:py-2", // Padding disesuaikan agar tombol tidak terlalu tinggi
                                        currentIndex === index ? "shadow-md ring-2 ring-primary ring-offset-background ring-offset-2" : "hover:bg-accent hover:text-accent-foreground" // Efek untuk tombol aktif
                                    )}
                                    style={{ minWidth: 'fit-content' }} // Memastikan lebar tombol pas dengan kontennya
                                >
                                    {image.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

// Komponen Plan tetap sama seperti sebelumnya
const Plan = ({
    id,
    title,
    desc,
    monthlyPrice,
    badge,
    buttonText,
    features,
    index,
}: {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    index: number;
}) => {
    const displayedPrice = monthlyPrice;

    return (
        <div className="w-full relative flex flex-col saturate-150 rounded-2xl h-full">
            <div
                className={cn(
                    "flex flex-col size-full border rounded-2xl relative p-4 md:p-6 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
                    id === "pro" ? "border-primary/80 shadow-lg shadow-primary/20" : "border-border/60",
                    "transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50"
                )}
            >
                {badge && (
                    <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-2 py-0.5 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3.5 left-1/2 -translate-x-1/2 select-none">
                        <span className="flex-1 text-xs sm:text-sm px-2 font-medium text-white">
                            {badge}
                        </span>
                    </div>
                )}
                <div className="flex flex-col p-3 w-full">
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                        {title}
                    </h2>
                    <p className="text-xs sm:text-sm mt-2 text-muted-foreground break-words min-h-[3em]">
                        {desc}
                    </p>
                </div>
                <hr className="shrink-0 border-none w-full h-px bg-border my-3" role="separator" />
                <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-3 sm:gap-4">
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex items-end gap-1">
                            <span className="text-3xl md:text-4xl font-bold text-foreground">
                                Rp{displayedPrice === 0 ? "0" : <NumberTicker value={displayedPrice * 1000} />}
                            </span>
                            <span className="text-base sm:text-lg text-muted-foreground font-medium font-heading">
                                {/* /bulan */}
                            </span>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-2 sm:gap-2.5">
                        {features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                                <CheckIcon aria-hidden="true" className="w-4 h-4 sm:w-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-sm md:text-base text-muted-foreground">
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-3 mt-auto h-auto flex w-full items-center">
                    <Button
                        asChild
                        variant={id === "pro" ? "default" : "outline"}
                        className="w-full text-sm sm:text-base"
                        size="lg"
                    >
                        <Link href={`/order?plan=${id}`}>
                            {buttonText}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
