import styles from "./Button.module.css";

const variantToClassName = {
  primary: styles.primary,
  secondary: styles.secondary,
};

/** @param {import('./Button').ButtonProps} props */
export function Button({ children, variant = "primary", disabled = false }) {
  const className = [styles.button, variantToClassName[variant]]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}
