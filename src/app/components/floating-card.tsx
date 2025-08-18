import { cn } from "@/lib/utils";
import Image from "next/image";

import CardImage from "@/assets/images/card-image.jpg"
import { rgba } from "framer-motion";

export default function FloatingCard({ className }: { className?: string }) {
  return (
    <div className="relative p-[1px] bg-gradient-to-b from-[#FFFFFF12] to-[#FFFFFF00] w-fit rounded-[10px]">
      {/* black background to remove gradient effect */}
      <div className="absolute w-full h-full bg-[##030014] rounded-[10px]">
      </div>
      {/* <div className="absolute w-40 h-40 rounded-full -left-5 -top-5 blur"
        style={{
          background: "radial-gradient(circle at center, #FFFFFF20, #00000000)",
        }}
      /> */}
      <div className="absolute w-[300px] h-[300px] rounded-full -left-5 -top-5 blur-lg"

      />

      {/* add gradient for shine effect */}


      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 blur-xl opacity-45"
          style={{
            background: "conic-gradient(from 90deg at 40.63% 50.41%, rgba(159, 115, 241, 0) -48.92deg, rgba(242, 98, 181, 0) 125.18deg, #5FC5FF 193.41deg, #FFAC89 216.02deg, #8155FF 236.07deg, #789DFF 259.95deg, rgba(159, 115, 241, 0) 311.08deg, rgba(242, 98, 181, 0) 485.18deg)",
          }}
        />
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

            <button className="py-1.5 px-4 border border-[#FFFFFF12] rounded-lg text-sm font-medium">
              See Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function GradientDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("z-[-1] w-[100%] h-[1px] rounded-full", className)}
      style={{
        background:
          "radial-gradient(circle at center, #FFFFFF1F, #00000000)",
      }}
    />
  )
}





