import React from "react"
import styles from "./style.module.css"

export type ButtonProps = {
  primary?: boolean
  backgroundColor?: string
  size?: "small" | "medium" | "large"
  label: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? styles.StorybookButtonPrimary
    : styles.StorybookButtonSecondary
  return (
    <button
      type="button"
      className={`${styles.StorybookButton} ${styles.StorybookButton}${size} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
