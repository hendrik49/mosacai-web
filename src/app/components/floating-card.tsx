import { cn } from "@/lib/utils";
import Image from "next/image";

import CardImage from "@/assets/images/card-image.jpg"

export default function FloatingCard({ className }: { className?: string }) {
  return (
    <div className={cn("border border-white rounded-[10px] p-[10px] bg-[#00000080] w-[260px]", className)}
      style={{
        borderImage: "linear-gradient(to bottom, #ffffff, #ffffff00) 1",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <Image src={CardImage} alt="Phone"
        className="rounded-[6px] border-white border-[1px]"
      />

      <span className="text-[13px] text-[#FFFFFF70]">Mobile app design & development</span>

    </div>
  )
}





