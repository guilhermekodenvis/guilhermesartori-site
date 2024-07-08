import "./styles.css"

type InfoBoxProps = {
    quantity: number
    text: String
}

export const InfoBox:React.FC<InfoBoxProps> = ({ quantity, text }) => {
  return (
    <div className="info-box">
        <h3>{quantity}+</h3>
        <p>{text}</p>
    </div>
  )
}