import "./Modal.css"
import { useEffect } from "react"

type ModalProps = {
  image: string
  name: string
  onClose: () => void
}

const Modal = ({ image, name, onClose }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="image-container">
      <img src={image} alt={name} className="image" onClick={() => onClose()} />

      <h2>{name}</h2>
    </div>
  )
}

export default Modal
