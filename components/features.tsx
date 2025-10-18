import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative bg-stone-200">

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-stone-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="pb-4 font-nacelle text-4xl font-semibold text-[#273e3d] md:text-4xl">
              Everyone contributes, everyone benefits.
            </h2>
          </div>
          {/* <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div> */}
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-2">
            <article className="text-center">
              <svg
                className="mb-3 fill-green-800 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-2xl font-semibold text-[#273e3d]">
                Contributor
              </h3>
              <p className="text-lg text-[#273e3d]">
                Post quality data jobs from innovative European startups. Share opportunities you believe in and help build a marketplace focused on signal, not noise.
              </p>
            </article>
            <article className="text-center">
              <svg
                className="mb-3 fill-green-800 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-2xl font-semibold text-[#273e3d]">
                Member
              </h3>
              <p className="text-lg text-[#273e3d]">
                Discover curated data roles at Europe's most exciting companies. Skip the endless scrolling and find opportunities that actually match your ambitions.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
