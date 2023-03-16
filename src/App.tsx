import { useState } from "react"
import data from "./components/Data"
import Image from "./components/Image"
import Modal from "./components/Modal"

import "./App.css"

function App() {
  const [id, setId] = useState<number | null>(null)
  const [openImage, setOpenImage] = useState(false)

  const openImageHandler = (id: number) => {
    setId(id)
    setOpenImage(true)
  }

  const closeModalHandler = () => {
    setOpenImage(false)
  }
  return (
    <div>
      <h1>Image Gallery</h1>
      <section className="imageGallery">
        {data.map((img) => (
          <Image
            key={img.id}
            id={img.id}
            person={img.name}
            onLarge={openImageHandler}
            img={img.image}
          />
        ))}
      </section>

      {openImage && id && (
        <Modal
          image={data[id - 1].image}
          name={data[id - 1].name}
          onClose={closeModalHandler}
        />
      )}
    </div>
  )
}

export default App
