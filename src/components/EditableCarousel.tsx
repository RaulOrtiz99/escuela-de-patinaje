import { useEffect, useState } from 'react'
import { getCarouselImagesFromNotion, NotionCarouselImage } from '../services/notionService'

const EditableCarousel = () => {
  const [images, setImages] = useState<NotionCarouselImage[]>([])
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchImages = async () => {
      const data = await getCarouselImagesFromNotion()
      setImages(data)
      setLoading(false)
    }

    fetchImages()
  }, [])

  // Carrusel automático
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [images.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  if (loading || images.length === 0) {
    return <div className="text-center py-8">Cargando imágenes...</div>
  }

  return (
    <div className="relative mb-12">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <div className="relative h-96 md:h-[500px]">
          {images[currentImage].imagen_url ? (
            <img
              src={images[currentImage].imagen_url}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Sin imagen</span>
            </div>
          )}
          {/* Overlay con información */}
          <div className="absolute inset-0 bg-black/20 flex items-end">
            <div className="w-full p-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {images[currentImage].caption}
                </h3>
                <p className="text-gray-600">
                  {images[currentImage].alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Controles del carrusel */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage 
                ? 'bg-green-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default EditableCarousel