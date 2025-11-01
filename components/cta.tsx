import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#273e3d]">
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="pb-8 font-nacelle text-5xl font-semibold text-stone-100 md:text-5xl"
              data-aos="fade-up"
            >
              Join Europe's data community.
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn relative w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:ml-4 sm:w-auto cursor-pointer text-xl rounded-full"
                  href="/submit-job"
                >
                  <span className="relative inline-flex items-center">
                    Contribute now
                    <span className="ml-1 tracking-normal text-[#273e3d] transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
