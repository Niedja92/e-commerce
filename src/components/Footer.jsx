import Boleto from "../assets/images-pay/boleto.png"
import Hipercard from "../assets/images-pay/hipercard.png"
import Mastercard from "../assets/images-pay/master_card.png"
import Visa from "../assets/images-pay/visa.png"

const Footer = () => {
  return (
    <div>
        Formas de pagamento:
        <img src={Boleto} />
        <img src={Hipercard} />
        <img src={Mastercard} />
        <img src={Visa} />
    </div>
  )
}

export default Footer