import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>
{
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props}>{children}</button>
);

export { Button };
export type { ButtonProps };
