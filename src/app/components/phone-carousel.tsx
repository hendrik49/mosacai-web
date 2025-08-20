"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

import MockupApp1 from "@/assets/images/mockup_app_1.png"
import MockupApp2 from "@/assets/images/mockup_app_2.png"
import MockupApp3 from "@/assets/images/mockup_app_3.png"
import MockupApp4 from "@/assets/images/mockup_app_4.png"
import MockupApp5 from "@/assets/images/mockup_app_5.png"
import MockupApp6 from "@/assets/images/mockup_app_6.png"
import MockupApp7 from "@/assets/images/mockup_app_7.png"
import MockupApp8 from "@/assets/images/mockup_app_8.png"
import MockupApp9 from "@/assets/images/mockup_app_9.png"
import Image from "next/image"

import { motion } from "motion/react"

interface SlideContent {
  id: string
  title: string
  appContent: React.ReactNode
}

const slides: SlideContent[] = [
  {
    id: "home",
    title: "Home Screen",
    appContent: (
      <div>
        <Image src={MockupApp1} alt="Mockup App 1" />
      </div>
    ),
  },
  {
    id: "messages",
    title: "Messages",
    appContent: (
      <div>
        <Image src={MockupApp2} alt="Mockup App 2" />
      </div>
    ),
  },
  {
    id: "photos",
    title: "Photos",
    appContent: (
      <div>
        <Image src={MockupApp3} alt="Mockup App 3" />
      </div>
    ),
  },
  {
    id: "settings",
    title: "Settings",
    appContent: (
      <div>
        <Image src={MockupApp4} alt="Mockup App 4" />
      </div>
    ),
  },
  {
    id: "camera",
    title: "Camera",
    appContent: (
      <div>
        <Image src={MockupApp5} alt="Mockup App 5" />
      </div>
    ),
  },
  {
    id: "music",
    title: "Music",
    appContent: (
      <div>
        <Image src={MockupApp6} alt="Mockup App 6" />
      </div>
    ),
  },
  {
    id: "video",
    title: "Video",
    appContent: (
      <div>
        <Image src={MockupApp7} alt="Mockup App 7" />
      </div>
    ),
  },
  {
    id: "weather",
    title: "Weather",
    appContent: (
      <div>
        <Image src={MockupApp8} alt="Mockup App 8" />
      </div>
    ),
  },
  {
    id: "news",
    title: "News",
    appContent: (
      <div>
        <Image src={MockupApp9} alt="Mockup App 9" />
      </div>
    ),
  }
]

export function PhoneCarousel({ className }: { className?: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentContent = slides[currentSlide]

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={cn("flex flex-col items-center gap-6", className)}>
      {/* Phone SVG with Dynamic Content */}
      <div className="relative">
        <svg
          viewBox="0 0 316 643"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[316px] h-auto"
        >
          Dynamic Screen Content

          {/* Content Overlay */}
          <foreignObject
            x="16.4111"
            y="14"
            className="transition-opacity duration-500 w-full h-full rounded-4xl"
          >
            <div className="w-full h-full flex flex-col">
              {/* <div className="flex justify-between items-center p-2 text-white text-xs">
                <span className="px-4">9:41</span>

              </div> */}

              {/* App Content */}
              <div className="flex-1 overflow-hidden">{currentContent.appContent}</div>
            </div>
          </foreignObject>

          {/* Phone Frame */}
          <path
            d="M313.287 164.739H314.406C315.024 164.739 315.525 165.242 315.525 165.862V239.247C315.525 239.867 315.024 240.37 314.406 240.37H313.287V164.739Z"
            fill="#303030"
          />
          <path
            d="M2.23828 256.096L1.1194 256.096C0.501455 256.096 0.000515049 255.593 0.000515103 254.972L0.000518951 210.792C0.000519005 210.172 0.501459 209.669 1.1194 209.669L2.23829 209.669L2.23828 256.096Z"
            fill="#303030"
          />
          <path
            d="M2.23828 194.692L1.1194 194.692C0.501455 194.692 0.000515049 194.189 0.000515103 193.569L0.000518951 149.389C0.000519005 148.768 0.501459 148.265 1.1194 148.265L2.23829 148.265L2.23828 194.692Z"
            fill="#333333"
          />
          <path
            d="M2.23828 125.801L1.1194 125.801C0.501458 125.801 0.000518077 125.298 0.000518132 124.678L0.000520023 102.962C0.000520077 102.341 0.50146 101.839 1.1194 101.839L2.23828 101.839L2.23828 125.801Z"
            fill="#333333"
          />

          {/* Phone Body */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.6113 33.6325C2.23828 40.9642 2.23828 50.0237 2.23828 68.1427V574.346C2.23828 592.464 2.23828 601.524 4.6113 608.856C9.40732 623.674 20.9799 635.291 35.7405 640.106C43.0439 642.488 52.0683 642.488 70.1171 642.488H245.408C263.457 642.488 272.482 642.488 279.785 640.106C294.546 635.291 306.118 623.674 310.914 608.856C313.287 601.524 313.287 592.464 313.287 574.346V68.1427C313.287 50.0237 313.287 40.9642 310.914 33.6325C306.118 18.8144 294.546 7.19691 279.785 2.38224C272.482 0 263.457 0 245.408 0H70.1171C52.0683 0 43.0439 0 35.7405 2.38224C20.9799 7.19691 9.40732 18.8144 4.6113 33.6325ZM81.3065 18.3461V21.7158L81.3597 21.7141L81.3062 22.0902C81.3062 30.9818 88.4864 38.1899 97.3435 38.1899H218.183C227.04 38.1899 234.22 30.9818 234.22 22.0902L234.166 21.7141L234.22 21.7158V18.3461C234.22 16.0715 236.056 14.2276 238.322 14.2276L247.93 14.2276C262.95 14.2276 270.46 14.2276 276.449 16.4996C285.863 20.0707 293.295 27.531 296.852 36.9818C299.115 42.9945 299.115 50.5336 299.115 65.6117V576.877C299.115 591.955 299.115 599.494 296.852 605.507C293.295 614.957 285.863 622.418 276.449 625.989C270.46 628.261 262.95 628.261 247.93 628.261H67.5962C52.5765 628.261 45.0666 628.261 39.0772 625.989C29.6631 622.418 22.2316 614.957 18.6744 605.507C16.4111 599.494 16.4111 591.955 16.4111 576.877V65.6117C16.4111 50.5335 16.4111 42.9945 18.6744 36.9818C22.2316 27.531 29.6631 20.0707 39.0772 16.4996C45.0666 14.2276 52.5765 14.2276 67.5962 14.2276L77.2039 14.2276C79.4697 14.2276 81.3065 16.0715 81.3065 18.3461Z"
            fill="#333333"
          />

          {/* Additional Frame Elements */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M245.705 1.49784H69.8169C51.9877 1.49784 43.2501 1.50708 36.1997 3.80679C21.8933 8.47331 10.6768 19.7334 6.02834 34.0955C3.73755 41.1732 3.72834 49.9449 3.72834 67.8433V574.645C3.72834 592.544 3.73755 601.315 6.02834 608.393C10.6768 622.755 21.8933 634.015 36.1997 638.682C43.2501 640.982 51.9878 640.991 69.8169 640.991H245.705C263.534 640.991 272.272 640.982 279.322 638.682C293.629 634.015 304.845 622.755 309.494 608.393C311.784 601.315 311.794 592.544 311.794 574.645V67.8434C311.794 49.9449 311.784 41.1732 309.494 34.0955C304.845 19.7334 293.629 8.47331 279.322 3.80679C272.272 1.50708 263.534 1.49784 245.705 1.49784ZM5.31893 33.8641C2.98242 41.0831 2.98242 50.0031 2.98242 67.8433V574.645C2.98242 592.486 2.98242 601.406 5.31893 608.625C10.0412 623.215 21.4357 634.653 35.9692 639.394C43.1602 641.74 52.0458 641.74 69.8169 641.74H245.705C263.476 641.74 272.362 641.74 279.553 639.394C294.086 634.653 305.481 623.215 310.203 608.625C312.54 601.406 312.54 592.486 312.54 574.645V67.8434C312.54 50.0032 312.54 41.0831 310.203 33.8641C305.481 19.274 294.086 7.83521 279.553 3.09462C272.362 0.749023 263.476 0.749023 245.705 0.749023H69.8169C52.0458 0.749023 43.1602 0.749023 35.9692 3.09462C21.4357 7.83521 10.0412 19.274 5.31893 33.8641Z"
            fill="#303030"
          />

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.15923 34.7895C5.96875 41.5573 5.96875 49.9199 5.96875 66.6451V575.843C5.96875 592.568 5.96875 600.931 8.15923 607.699C12.5863 621.377 23.2687 632.101 36.8939 636.545C43.6355 638.744 51.9657 638.744 68.6261 638.744H246.901C263.562 638.744 271.892 638.744 278.633 636.545C292.259 632.101 302.941 621.377 307.368 607.699C309.558 600.931 309.558 592.568 309.558 575.843V66.6451C309.558 49.9199 309.558 41.5573 307.368 34.7895C302.941 21.1113 292.259 10.3874 278.633 5.94313C271.892 3.74414 263.562 3.74414 246.901 3.74414H68.6261C51.9657 3.74414 43.6355 3.74414 36.8939 5.94313C23.2687 10.3874 12.5863 21.1113 8.15923 34.7895ZM81.3065 18.3461V21.7158L81.3597 21.7142L81.3062 22.0902C81.3062 30.9818 88.4864 38.1899 97.3435 38.1899H218.183C227.04 38.1899 234.22 30.9818 234.22 22.0902L234.166 21.7142L234.22 21.7158V18.3461C234.22 16.0716 236.057 14.2276 238.322 14.2276L247.93 14.2276C262.95 14.2276 270.46 14.2276 276.449 16.4996C285.863 20.0708 293.295 27.5311 296.852 36.9818C299.115 42.9945 299.115 50.5336 299.115 65.6117V576.877C299.115 591.955 299.115 599.494 296.852 605.507C293.295 614.957 285.863 622.418 276.449 625.989C270.46 628.261 262.95 628.261 247.93 628.261H67.5962C52.5765 628.261 45.0666 628.261 39.0772 625.989C29.6631 622.418 22.2317 614.957 18.6744 605.507C16.4111 599.494 16.4111 591.955 16.4111 576.877V65.6117C16.4111 50.5336 16.4111 42.9945 18.6744 36.9818C22.2317 27.5311 29.6631 20.0708 39.0772 16.4996C45.0666 14.2276 52.5765 14.2276 67.5962 14.2276L77.2039 14.2276C79.4697 14.2276 81.3065 16.0716 81.3065 18.3461Z"
            fill="#121515"
          />

          {/* Corner Details */}
          <rect x="246.9" width="4.47552" height="3.7441" fill="#414141" />
          <rect x="309.557" y="64.3984" width="3.72964" height="4.49293" fill="#414141" />
          <rect x="2.23828" y="64.3984" width="3.7296" height="4.49293" fill="#414141" />
          <rect x="2.23828" y="573.597" width="3.7296" height="4.49292" fill="#414141" />
          <rect x="309.557" y="573.597" width="3.72964" height="4.49292" fill="#414141" />
          <rect x="64.1484" y="638.744" width="4.47553" height="3.74409" fill="#414141" />

          {/* Camera and Speaker */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M189.463 29.9528C192.759 29.9528 195.431 27.2707 195.431 23.9622C195.431 20.6537 192.759 17.9717 189.463 17.9717C186.168 17.9717 183.496 20.6537 183.496 23.9622C183.496 27.2707 186.168 29.9528 189.463 29.9528Z"
            fill="#262C2D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M189.464 27.706C191.524 27.706 193.194 26.0297 193.194 23.9619C193.194 21.8941 191.524 20.2178 189.464 20.2178C187.404 20.2178 185.734 21.8941 185.734 23.9619C185.734 26.0297 187.404 27.706 189.464 27.706Z"
            fill="#121515"
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M189.463 23.2142C189.875 23.2142 190.209 22.8787 190.209 22.465C190.209 22.0512 189.875 21.7158 189.463 21.7158C189.051 21.7158 188.717 22.0512 188.717 22.465C188.717 22.8787 189.051 23.2142 189.463 23.2142Z"
            fill="#636F73"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M139.488 23.9623C139.488 22.7216 140.494 21.7158 141.735 21.7158H173.792C175.033 21.7158 176.038 22.7216 176.038 23.9623V23.9623C176.038 25.203 175.033 26.2087 173.792 26.2087H141.735C140.494 26.2087 139.488 25.203 139.488 23.9623V23.9623Z"
            fill="#262C2D"
          />
        </svg>
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center gap-4">
        <button onClick={prevSlide} className="rounded-full bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentSlide ? "bg-slate-800" : "bg-slate-300 hover:bg-slate-400",
              )}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="rounded-full bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  )
}
