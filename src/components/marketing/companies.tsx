import Marquee from "../ui/marquee";

const Companies = () => {
    return (
        <div className="flex w-full py-20">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">
                    Companies that trust us
                </h2>
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        <div className="flex gap-8 md:gap-12">
                            {/* Placeholder sementara, ganti dengan ikon atau gambar jika diperlukan */}
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                            <div className="w-24 h-8 bg-gray-300 rounded" />
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    )
};

export default Companies
