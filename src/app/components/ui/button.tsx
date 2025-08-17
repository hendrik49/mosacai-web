import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const buttonVariants = cva(
  "py-2 px-4 text-white font-medium whitespace-nowrap cursor-pointer border-none transition-all duration-200 hover:opacity-90",
  {
    variants: {
      variant: {
        primary: "rounded-[8px]",
        secondary: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button({ children, variant, onClick, className, ...props }: ButtonProps) {
  const getButtonStyle = (variant: 'primary' | 'secondary' = 'primary') => {
    const styles = {
      primary: {
        background: `
          linear-gradient(180deg, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.32) 100%),
          linear-gradient(0deg, rgba(113, 47, 255, 0.12), rgba(113, 47, 255, 0.12)),
          linear-gradient(180deg, rgba(207, 184, 255, 0.24) 0%, rgba(207, 184, 255, 0) 100%),
          linear-gradient(0deg, rgba(207, 184, 255, 0.32), rgba(207, 184, 255, 0.32))
        `,
        boxShadow: '0px 0px 12px 0px #BF97FF3D inset'
      },
      secondary: {
        background: `
          linear-gradient(90deg, rgba(229, 156, 255, 0.24) 0.01%, rgba(186, 156, 255, 0.24) 50.01%, rgba(156, 178, 255, 0.24) 100%),
          #FFFFFF40
        `
      }
    };
    return styles[variant];
  };

  return (
    <button
      className={cn(`${buttonVariants({ variant })} ${className || ''}`)}
      style={getButtonStyle(variant)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}