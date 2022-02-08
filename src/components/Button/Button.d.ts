import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
};

function Button(props: ButtonProps): JSX.Element;

export { Button };
