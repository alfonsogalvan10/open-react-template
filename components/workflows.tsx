import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section className="bg-stone-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-16 md:pb-20 md:pt-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-24">
            <h2 className="pb-4 font-nacelle text-3xl font-semibold text-stone-700 md:text-4xl">
              Map your product journey
            </h2>
            <p className="text-lg text-stone-600">
              Simple and elegant interface to start collaborating with your team
              in minutes. It seamlessly integrates with your code and your
              favorite programming languages.
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
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-stone-100 
                after:absolute after:inset-0 after:bg-linear-to-br 
                after:from-stone-200/50 after:via-stone-100/25 after:to-stone-200/50"
              >
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center 
                    rounded-full border border-stone-300/50 bg-stone-200/65 
                    text-[#273e3d] opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
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
                      <span className="bg-linear-to-r from-[#273e3d] to-[#355c58] bg-clip-text text-transparent">
                        Built-in Tools
                      </span>
                    </span>
                  </div>
                  <p className="text-stone-700">
                    Streamline the product development flow with a content
                    platform that's aligned across specs and insights.
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
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-stone-100 
                after:absolute after:inset-0 after:bg-linear-to-br 
                after:from-stone-200/50 after:via-stone-100/25 after:to-stone-200/50"
              >
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center 
                    rounded-full border border-stone-300/50 bg-stone-200/65 
                    text-green-800 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg02}
                  width={350}
                  height={288}
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
                      <span className="bg-linear-to-r from-[#273e3d] to-[#355c58] bg-clip-text text-transparent">
                        Scale Instantly
                      </span>
                    </span>
                  </div>
                  <p className="text-stone-700">
                    Streamline the product development flow with a content
                    platform that's aligned across specs and insights.
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
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-stone-100 
                after:absolute after:inset-0 after:bg-linear-to-br 
                after:from-stone-200/50 after:via-stone-100/25 after:to-stone-200/50"
              >
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center 
                    rounded-full border border-stone-300/50 bg-stone-200/65 
                    text-green-800 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
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
                      <span className="bg-linear-to-r from-[#273e3d] to-[#355c58] bg-clip-text text-transparent">
                        Tailored Flows
                      </span>
                    </span>
                  </div>
                  <p className="text-stone-700">
                    Streamline the product development flow with a content
                    platform that's aligned across specs and insights.
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
