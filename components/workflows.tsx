import Image from "next/image";
import WorflowImg01 from "@/public/images/discover.jpg";
import WorflowImg02 from "@/public/images/contribute.jpg";
import WorflowImg03 from "@/public/images/grow.jpg";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section className="bg-stone-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-16 md:pb-20 md:pt-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-24">
            <h2 className="pb-4 font-nacelle text-4xl font-semibold text-[#273e3d] md:text-4xl">
              Built by the community, powered by you.
            </h2>
            <p className="mb-8 text-xl text-[#273e3d]">
              Join Europe's community-driven platform in three simple steps. Connect with opportunities shared by professionals, contribute your expertise, and grow alongside builders shaping the future of data and AI.
            </p>
          </div>

          <div className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-stone-300 p-px 
                before:pointer-events-none before:absolute before:-left-40 before:-top-40 
                before:z-10 before:h-80 before:w-80 
                before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
                before:rounded-full before:bg-[#273e3d]/20 
                before:blur-md before:transition-opacity before:duration-500 
                after:pointer-events-none after:absolute after:-left-48 after:-top-48 
                after:z-30 after:h-64 after:w-64 
                after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] 
                after:rounded-full after:bg-[#355c58]/20 
                after:blur-md after:transition-opacity after:duration-500 
                hover:after:opacity-30 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white"
              >
                {/* Number 1 */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center 
                    rounded-full border border-stone-300/50 bg-stone-200/65 
                    text-[#273e3d] opacity-100"
                  aria-hidden="true"
                >
                  <span className="text-lg font-bold">1</span>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex h-85 object-fill"
                  src={WorflowImg01}
                  width={350}
                  height={350}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-stone-200/40 px-2.5 py-0.5 
                      text-xs font-normal before:pointer-events-none before:absolute 
                      before:inset-0 before:rounded-[inherit] before:border 
                      before:border-transparent before:[background:linear-gradient(to_bottom,
                      --theme(--color-stone-300/.15),--theme(--color-stone-300/.5))_border-box] 
                      before:[mask-composite:exclude_!important] 
                      before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
                      hover:bg-stone-200/60"
                    >
                      <span className="font-nacelle text-lg font-semibold text-[#273e3d]">
                        Discover
                      </span>
                    </span>
                  </div>
                  <p className="font-nacelle text-sm text-[#273e3d]">
                    Browse curated prominent opportunities shared by the European data community.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-stone-300 p-px 
                before:pointer-events-none before:absolute before:-left-40 before:-top-40 
                before:z-10 before:h-80 before:w-80 
                before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
                before:rounded-full before:bg-[#273e3d]/20 
                before:blur-md before:transition-opacity before:duration-500 
                after:pointer-events-none after:absolute after:-left-48 after:-top-48 
                after:z-30 after:h-64 after:w-64 
                after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] 
                after:rounded-full after:bg-[#355c58]/20 
                after:blur-md after:transition-opacity after:duration-500 
                hover:after:opacity-30 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white">
                {/* Number 2 */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center 
                    rounded-full border border-stone-300/50 bg-stone-200/65 
                    text-[#273e3d] opacity-100"
                  aria-hidden="true"
                >
                  <span className="text-lg font-bold">2</span>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex h-85 object-fill"
                  src={WorflowImg02}
                  width={350}
                  height={350}
                  alt="Workflow 02"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-stone-200/40 px-2.5 py-0.5 
                      text-xs font-normal before:pointer-events-none before:absolute 
                      before:inset-0 before:rounded-[inherit] before:border 
                      before:border-transparent before:[background:linear-gradient(to_bottom,
                      --theme(--color-stone-300/.15),--theme(--color-stone-300/.5))_border-box] 
                      before:[mask-composite:exclude_!important] 
                      before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
                      hover:bg-stone-200/60"
                    >
                      <span className="font-nacelle text-lg font-semibold text-[#273e3d]">
                        Contribute
                      </span>
                    </span>
                  </div>
                  <p className="font-nacelle text-sm text-[#273e3d]">
                    Share opportunities and insights from your network and contribute to the community.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-stone-300 p-px 
                before:pointer-events-none before:absolute before:-left-40 before:-top-40 
                before:z-10 before:h-80 before:w-80 
                before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
                before:rounded-full before:bg-[#273e3d]/20 
                before:blur-md before:transition-opacity before:duration-500 
                after:pointer-events-none after:absolute after:-left-48 after:-top-48 
                after:z-30 after:h-64 after:w-64 
                after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] 
                after:rounded-full after:bg-[#355c58]/20 
                after:blur-md after:transition-opacity after:duration-500 
                hover:after:opacity-30 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white">
                {/* Number 3 */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center 
                    rounded-full border border-stone-300/50 bg-stone-200/65 
                    text-[#273e3d] opacity-100"
                  aria-hidden="true"
                >
                  <span className="text-lg font-bold">3</span>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex h-85 object-fill"
                  src={WorflowImg03}
                  width={350}
                  height={350}
                  alt="Workflow 03"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-stone-200/40 px-2.5 py-0.5 
                      text-xs font-normal before:pointer-events-none before:absolute 
                      before:inset-0 before:rounded-[inherit] before:border 
                      before:border-transparent before:[background:linear-gradient(to_bottom,
                      --theme(--color-stone-300/.15),--theme(--color-stone-300/.5))_border-box] 
                      before:[mask-composite:exclude_!important] 
                      before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
                      hover:bg-stone-200/60"
                    >
                      <span className="font-nacelle text-lg font-semibold text-[#273e3d]">
                        Advance
                      </span>
                    </span>
                  </div>
                  <p className="font-nacelle text-sm text-[#273e3d]">
                    Stay ahead of Europe's data market with real-time intelligence powered by community contributions.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
