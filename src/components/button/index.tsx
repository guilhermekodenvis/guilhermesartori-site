import "./styles.css"

type ButtonProps = {
    text: string
    variant?: "filled" | "outlined"
    handleClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ text, variant = "filled", handleClick }) => {
  return (
    <button className={variant} onClick={handleClick}>{text}</button>
  )
}