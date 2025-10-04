import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="bg-[#273e3d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-8 md:py-14">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-12">
            <h1
              className="pb-5 font-nacelle text-4xl font-semibold text-white-700 " // Changed to stone-700 which is close to #333F3C
              data-aos="fade-up"
            >
              European Data and AI Jobs
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-white-600" // Updated to match the theme
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Connecting data talent with Europe's next big things.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Explore Jobs
                      <span className="ml-1 tracking-normal text-[#273e3d] hover:bg-green-50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
