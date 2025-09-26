import { useEffect, useState } from 'react'
import { getInstructorsFromNotion, NotionInstructor } from '../services/notionService'

const EditableInstructors = () => {
  const [instructors, setInstructors] = useState<NotionInstructor[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchInstructors = async () => {
      const data = await getInstructorsFromNotion()
      setInstructors(data)
      setLoading(false)
    }

    fetchInstructors()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Cargando instructores...</div>
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {instructors.map((instructor) => (
        <div key={instructor.id} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
            {instructor.imagen_url ? (
              <img
                src={instructor.imagen_url}
                alt={instructor.nombre}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Sin imagen</span>
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {instructor.nombre}
          </h3>
          <p className="text-green-600 font-medium mb-4">
            {instructor.posicion}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {instructor.descripcion}
          </p>
        </div>
      ))}
    </div>
  )
}

export default EditableInstructors