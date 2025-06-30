"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatedGradientCard
            className="overflow-hidden"
            isHovered={hoveredIndex === idx}
          >
            <Card>
              <div className="flex flex-col items-center text-center p-6 space-y-4">
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <CardTitle className="text-white">{item.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {item.description}
                </CardDescription>
              </div>
            </Card>
          </AnimatedGradientCard>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-dark-100/50 backdrop-blur-sm border border-white/10 group-hover:border-primary-400/50 relative z-20 transition-colors duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

const AnimatedGradientCard = ({
  children,
  className,
  isHovered,
}: {
  children: React.ReactNode;
  className?: string;
  isHovered: boolean;
}) => {
  return (
    <div className={cn("relative h-full", className)}>
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(45deg, #6c5ce7, #a29bfe, #6c5ce7)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: isHovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
        }}
        transition={{
          duration: 3,
          repeat: isHovered ? Infinity : 0,
          ease: "linear",
        }}
      />
      <div className="relative z-10 h-full rounded-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}; 