import { cn } from "@/lib/utils";

export default function GradientDivider({ className }: { className?: string }) {
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
