import { cn } from "@/lib/utils";
import Image from "next/image";

import CardImage from "@/assets/images/card-image.jpg"
import { rgba } from "framer-motion";
import GradientDivider from "./gradient-divider";

export default function FloatingCard({ className }: { className?: string }) {
  return (
    <div className="relative p-[1px] bg-gradient-to-b from-[#FFFFFF12] to-[#FFFFFF00] w-fit rounded-[10px]">

      <div className="relative bg-[#1a1a2e]">
        {/* Shine Effect Layer */}
        <div className="absolute w-full h-full top-0 left-0 blur-xl opacity-45"
          style={{
            background: "conic-gradient(from 90deg at 40.63% 50.41%, rgba(159, 115, 241, 0) -48.92deg, rgba(242, 98, 181, 0) 125.18deg, #5FC5FF 193.41deg, #FFAC89 216.02deg, #8155FF 236.07deg, #789DFF 259.95deg, rgba(159, 115, 241, 0) 311.08deg, rgba(242, 98, 181, 0) 485.18deg)",
          }}
        />

        {/* Card Content */}
        <div className={cn("relative rounded-[10px] p-[10px] bg-[#00000050] w-[260px] flex flex-col", className)}>
          <Image src={CardImage} alt="Phone"
            className="rounded-[6px] border-[1px] h-[200px] w-[240px] object-cover"
            style={{
              boxShadow: "0px 30px 60px 0px #0000001A",
            }}
          />
          <div className="px-2 mt-4">
            <span className="text-[13px] text-[#FFFFFFB2]">Mobile app design & development</span>
            {/* Divider gradient */}
            <GradientDivider className="my-2" />
            <span className="text-[14px] text-[#FFFFFF] font-medium">Tealive</span>
            <p className="text-[13px] text-[#FFFFFFB2] mt-2 font-normal">Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.</p>
            <GradientDivider className="my-2" />

            <ButtonGradientBorder>

            </ButtonGradientBorder>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FloatingCardTestimonial() {
  return (
    // <div className="relative p-[1px] bg-gradient-to-b from-[#FFFFFF12] to-[#FFFFFF00] w-fit rounded-[10px]">
    // </div>
    <div className="absolute top-[1250px] right-[210px] z-20 ">
      <div className="relative bg-[#00000080] backdrop-blur-md rounded-[10px] w-[300px]">
        {/* Shine effect layer */}
        <div className="absolute w-full h-full top-0 left-0 blur-2xl opacity-45 brightness-75"
          style={{
            background: "conic-gradient(from -40.91deg at 40.63% 50.41%, rgba(159, 115, 241, 0) -48.92deg, rgba(242, 98, 181, 0) 125.18deg, #5FC5FF 193.41deg, #FFAC89 216.02deg, #8155FF 236.07deg, #789DFF 259.95deg, rgba(159, 115, 241, 0) 311.08deg, rgba(242, 98, 181, 0) 485.18deg)",
          }}
        />
        <div className="relative p-[30px] border-white/20 border-[1px] rounded-[10px]">
          <h3 className="text-body-medium font-medium">PGV</h3>
          <span className="text-footnote-medium font-medium text-[#FFFFFFB2]">Pearly Gates Venture</span>
          <GradientDivider className="my-2" />
          <p className="text-footnote-medium text-[#FFFFFFB2]">
            Crafting top-notch digital solutions that prioritise an exceptional user experience and stunning UI, all powered by the latest trends and technologies.
          </p>
          <GradientDivider className="my-2" />
          <span className="text-footnote-medium font-medium text-[#FFFFFFB2]">Johan Lim, founder of PGV</span>
        </div>
      </div>
    </div>
  )
}

function ButtonGradientBorder() {
  return (
    <button>
      <div className="p-[1px] bg-gradient-to-bl from-[#FFFFFF50] to-[#FFFFFF12] w-fit rounded-[10px]">
        {/* Color reset border layer */}
        <div className="relative bg-[#1a1a2e] rounded-[10px]">
          {/* Gradient for shine effect layer */}
          <div
            style={{
              background: "conic-gradient(from 195.7deg at 50% 50%, #7147FF 0deg, rgba(66, 232, 255, 0) 95.01deg, rgba(255, 126, 171, 0.5) 185.59deg, #3083FF 274.88deg, #7147FF 360deg)",
            }}
            className="absolute top-0 w-full h-full blur-lg opacity-60"
          />

          {/* Content with backdrop blur */}
          <div className="relative bg-black/50 backdrop-blur-md rounded-[10px] py-1.5 px-4">
            See project
          </div>
        </div>
      </div>
    </button>
  )
}
