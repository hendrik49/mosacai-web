import Link from "next/link";
import { PhoneCarousel } from "@/app/components/phone-carousel";
import Button from "@/app/components/ui/button";

export default function HomePage() {
  return (
    <div>
      {/* Blur ellipse */}
      <div
        className="fixed top-[-650px] left-[118.38px] z-[-1] w-[810px] h-[906px] rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle at center, #7A5EA8, #000000)",
        }}
      />
      <Navbar />

      <div className="max-w-[540px] mx-auto flex flex-col items-center">
        <h1 className="text-[48px] text-center leading-tight mt-8">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)"
            }}
          >
            UI/UX driven mobile development agency
          </span>{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(86.48deg, #A594FD 42.22%, #EB8BF7 70.67%)"
            }}
          >
            We are PGV.
          </span>
        </h1>
        <p className="text-center text-[#EFEDFDB2] mt-4">
          Crafting top-notch mobile and web solutions that prioritise an exceptional user experience and stunning UI, all powered by the latest trends & technologies.
        </p>
        <Button variant="secondary" className="mt-5 w-fit">Learn more</Button>
      </div>

      {/* <FloatingCard /> */}

      <PhoneCarousel className="my-10 mx-auto" />
    </div>
  )
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "AI", href: "/ai" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <nav className="relative flex items-center py-[26px] px-5 backdrop-blur-xl">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Mosaic AI Logo"
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Center: Nav Items */}
      <ul className="flex gap-x-4 border border-white/20 rounded-full py-[11px] px-[13px] bg-white/20 backdrop-blur-xl">
        {navItems.map((item) => (
          <li key={item.name} className="px-3">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Right: Button */}
      <div className="flex-1 flex justify-end">
        <Button>Work with us</Button>
      </div>

      {/* div as a border with blur effect */}
      <div className="absolute left-0 bottom-0 z-[-1] w-[100%] h-[1px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, #FFFFFF1F, #00000000)",
        }}
      />
    </nav>
  );
}
