import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
  rounded?: string;
}

export function Button({
  children,
  className = "",
  size = "md",
  variant = "default",
  rounded = "rounded-full",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-8 text-sm px-4",
    md: "h-10 text-base px-5",
    lg: "h-12 text-lg px-6"
  };

  const variantClasses = {
    default: "bg-blue-500 hover:bg-blue-600 text-white",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
    ghost: "bg-transparent hover:bg-gray-100"
  };

  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${rounded} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
