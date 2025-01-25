import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
  vertical?: boolean
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem]",
        {
          "flex-col": vertical,
        },
        className,
      )}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around gap-[--gap] min-w-full", {
            "animate-marquee": !vertical,
            "animate-marquee-vertical": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

