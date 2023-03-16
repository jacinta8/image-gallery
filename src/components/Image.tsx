import "./Image.css"

type ImageProps = {
  person: string
  onLarge: (id: number) => void
  img: string
  id: number
}

const Image = ({ person, onLarge, img, id }: ImageProps) => {
  return (
    <div>
      <img src={img} alt={person} onClick={() => onLarge(id)} />
      <h3>{person}</h3>
    </div>
  )
}

export default Image
