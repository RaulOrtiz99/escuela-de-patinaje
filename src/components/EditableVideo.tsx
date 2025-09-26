import { useEffect, useState } from 'react'
import { getVideoFromNotion } from '../services/notionService'

const EditableVideo = () => {
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchVideo = async () => {
      const video = await getVideoFromNotion()
      if (video && video.video_url) {
        setVideoUrl(video.video_url)
      }
      setLoading(false)
    }

    fetchVideo()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Cargando video...</div>
  }

  if (!videoUrl) {
    return <div className="text-center py-8">No hay video disponible</div>
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Video Destacado
      </h3>
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={videoUrl}
            title="Club Elite Video - Patinaje Artístico"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default EditableVideo