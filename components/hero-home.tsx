import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import HeroButtons from "@/components/hero-buttons"; // Import the new component

export default function HeroHome() {
  return (
    <section className="bg-[#273e3d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-8 md:py-14">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-12">
            <h1
              className="pb-5 font-nacelle text-4xl font-semibold text-white-700"
              data-aos="fade-up"
            >
              European Data and AI Jobs
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-white-600"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Connecting data talent with Europe's next big things.
              </p>
              {/* Use the new HeroButtons component */}
              <HeroButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
