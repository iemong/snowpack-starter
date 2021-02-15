import React from "react"
import styles from "./style.module.css"

export type ButtonProps = {
  type: "primary" | "secondary"
  backgroundColor?: string
  size?: "small" | "medium" | "large"
  label: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={styles.StorybookButton}
    style={{ backgroundColor }}
    data-type={type}
    data-size={size}
    {...props}
  >
    {label}
  </button>
)
