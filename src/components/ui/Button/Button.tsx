import React from "react";
import clsx from "clsx";
import "./Button.scss";

type ButtonVariant =
  | "blue-solid"
  | "blue-outline"
  | "gray-outline"
  | "red-outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "blue-solid",
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx("button", `button--${variant}`, className)}
    >
      {children}
    </button>
  );
};

export default Button;
