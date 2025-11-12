import Image from "next/image";
import WorflowImg01 from "@/public/images/discover.jpg";
import WorflowImg02 from "@/public/images/contribute.jpg";
import WorflowImg03 from "@/public/images/grow.jpg";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section className="bg-stone-200 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-6xl pb-16 text-center">
            <h2 className="pb-12 font-nacelle text-5xl font-bold text-[#273e3d] md:text-6xl">
              Built by the community, powered by you.
            </h2>
            <p className="text-lg text-[#273e3d] md:text-xl font-medium">
              Join Europe's community-driven platform in three simple steps. Connect with opportunities shared by professionals, contribute your expertise, and grow alongside builders shaping the future of data and AI.
            </p>
          </div>

          {/* Workflow cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="relative rounded-2xl bg-white shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#273e3d] text-white font-bold text-lg">
                1
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#273e3d]">Discover</h3>
              <p className="font-nacelle text-base text-[#273e3d] font-medium">
                Browse curated prominent opportunities shared by the European data community.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl bg-white shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#273e3d] text-white font-bold text-lg">
                2
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#273e3d]">Contribute</h3>
              <p className="font-nacelle text-base text-[#273e3d] font-medium">
                Share opportunities and insights from your network and contribute to the community.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl bg-white shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#273e3d] text-white font-bold text-lg">
                3
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#273e3d]">Advance</h3>
              <p className="font-nacelle text-base text-[#273e3d] font-medium">
                Stay ahead of Europe's data market with real-time intelligence powered by community contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
