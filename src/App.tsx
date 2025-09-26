import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Users,
  Trophy,
  Clock,
  Star,
  Heart,
  Target,
  Award,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
} from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  // Imágenes para el carrusel - usando rutas absolutas para mejor compatibilidad
  const carouselImages: CarouselImage[] = [
    {
      src: "/assets/imagelis13.jpg",
      alt: "Estudiantes club elite",
      caption: "Pequeños gigantes",
    },
    {
      src: "/assets/carrousel17.jpg",
      alt: "Campeonatos",
      caption: "Estudiantes destacados",
    },
    {
      src: "/assets/carrousel18.jpg",
      alt: "Campeonatos",
      caption: "Galardonados de la escuela",
    },
    {
      src: "/assets/imagelis13.jpg",
      alt: "Practicas",
      caption: "Clases iniciales",
    },
    {
      src: "/assets/carrousel19.jpg",
      alt: "Campeonato internacional",
      caption: "Representando a Bolivia",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-12 bg-green-500 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/patinlogo.jpg"
                  alt="Logo Club Patín Elite"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Club Patín Elite
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("programas")}
                className="text-gray-700 hover:text-green-500 transition-colors font-medium"
              >
                Programas
              </button>
              <button
                onClick={() => scrollToSection("momentos")}
                className="text-gray-700 hover:text-green-500 transition-colors font-medium"
              >
                Momentos
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-gray-700 hover:text-green-500 transition-colors font-medium"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("instructores")}
                className="text-gray-700 hover:text-green-500 transition-colors font-medium"
              >
                Instructores
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-700 hover:text-green-500 transition-colors font-medium"
              >
                Contacto
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="py-4 space-y-2">
                <button
                  onClick={() => scrollToSection("programas")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-500 hover:bg-green-50"
                >
                  Programas
                </button>
                <button
                  onClick={() => scrollToSection("momentos")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-500 hover:bg-green-50"
                >
                  Momentos
                </button>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-500 hover:bg-green-50"
                >
                  Beneficios
                </button>
                <button
                  onClick={() => scrollToSection("instructores")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-500 hover:bg-green-50"
                >
                  Instructores
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-500 hover:bg-green-50"
                >
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-green-600 font-medium mb-4">
                Formación Profesional desde Temprana Edad
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Desarrolla tu Talento
                <span className="text-green-500 block">en el Patinaje</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En Club Elite formamos patinadores profesionales desde los
                primeros pasos. Nuestro programa integral desarrolla técnica,
                disciplina y pasión por el patinaje competitivo de alto nivel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                >
                  Inscríbete Ahora
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection("programas")}
                  className="border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-500 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Ver Programas
                </button>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Users className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    50+ Estudiantes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    20+ Competencias Ganadas
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/header.jpg"
                    alt="Patinadora profesional realizando una pirueta"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programas Section */}
      <section id="programas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Programas de Formación
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos programas estructurados para cada etapa del desarrollo
              del patinador, desde principiantes hasta nivel competitivo
              profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Grupo Nidito */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-pink-200 p-8 transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Heart className="text-pink-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Grupo Nidito (4-7 años)
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Nivel Inicial y Formación - Días de clase: Día por medio
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    Horarios disponibles:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <strong>Lunes, Miércoles, Viernes</strong>
                      <br />
                      Tarde: 16:30-18:00 | Noche: 18:30-20:00
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <strong>Martes, Jueves, Sábado</strong>
                      <br />
                      Tarde: 16:30-18:00 | Noche: 18:30-20:00
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">
                      Equilibrio y coordinación básica
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">Juegos educativos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">
                      Desarrollo de confianza
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-lg font-bold text-pink-700">200 Bs/mes</p>
              </div>
            </div>

            {/* Grupo Semillita */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 p-8 transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Grupo Semillita (8-10 años)
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Nivel Inicial y Formación - Días de clase: Día por medio
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    Horarios disponibles:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <strong>Lunes, Miércoles, Viernes</strong>
                      <br />
                      Tarde: 16:30-18:00 | Noche: 18:30-20:00
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <strong>Martes, Jueves, Sábado</strong>
                      <br />
                      Tarde: 16:30-18:00 | Noche: 18:30-20:00
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">
                      Saltos básicos y giros
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">Coreografía elemental</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">Técnica fundamental</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-lg font-bold text-blue-700">200 Bs/mes</p>
              </div>
            </div>

            {/* Grupo Dinos */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 p-8 transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Trophy className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Grupo Dinos (11-13 años)
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Nivel Inicial y Formación - Días de clase: Día por medio
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    Horarios disponibles:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <strong>Lunes, Miércoles, Viernes</strong>
                      <br />
                      Tarde: 16:30-18:00 | Noche: 18:30-20:00
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <strong>Martes, Jueves, Sábado</strong>
                      <br />
                      Tarde: 16:30-18:00 | Noche: 18:30-20:00
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">Rutinas artísticas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">Primeras competencias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span className="text-gray-700">Técnica avanzada</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-lg font-bold text-green-700">200 Bs/mes</p>
              </div>
            </div>
          </div>

          {/* Nivel Avanzado */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Trophy className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Nivel Avanzado (13+ años)
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    Formación profesional para competencias nacionales
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Check className="text-yellow-600" size={16} />
                      <span className="text-gray-700">Lunes a Viernes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-yellow-600" size={16} />
                      <span className="text-gray-700">
                        Horario: 19:00 a 21:00
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-yellow-600" size={16} />
                      <span className="text-gray-700">
                        Saltos dobles y triples
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-yellow-600" size={16} />
                      <span className="text-gray-700">
                        Rutinas competitivas
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-yellow-600" size={16} />
                      <span className="text-gray-700">
                        Preparación psicológica
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-100 rounded-lg p-6 w-full text-center">
                    <p className="text-2xl font-bold text-yellow-700 mb-2">
                      250 Bs/mes
                    </p>
                    <p className="text-yellow-600 text-sm">
                      5 clases por semana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inscripciones */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              📝 Inscripciones y Evaluaciones
            </h3>
            <p className="text-gray-600 mb-4">
              Días de prueba evaluativa e inscripción
            </p>
            <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 border">
              <span className="font-semibold text-gray-900">
                Lunes, Miércoles y Viernes
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">Primera semana de cada mes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Momentos Section with Video */}
      <section
        id="momentos"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Mejores Momentos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revive los momentos más especiales de nuestros estudiantes en
              competencias, presentaciones y logros alcanzados en Club Elite.
            </p>
          </div>

          {/* Carrusel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={carouselImages[currentImage].src}
                  alt={carouselImages[currentImage].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                {/* Overlay con información */}
                <div className="absolute inset-0 bg-black/20 flex items-end">
                  <div className="w-full p-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {carouselImages[currentImage].caption}
                      </h3>
                      <p className="text-gray-600">
                        {carouselImages[currentImage].alt}
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
              <ChevronLeft className="text-gray-700" size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <ChevronRight className="text-gray-700" size={24} />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage
                      ? "bg-green-500 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Video Player - Video actualizado */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Video Destacado
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/McO0BXKohUU"
                  title="Club Elite Video - Patinaje Artístico"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section
        id="beneficios"
        className="py-20 bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir Club Elite?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestra metodología única combina técnica profesional con
                desarrollo integral del atleta.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Instructores Certificados
                    </h3>
                    <p className="text-gray-600">
                      Ex-patinadores profesionales con experiencia internacional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Horarios Flexibles
                    </h3>
                    <p className="text-gray-600">
                      Clases matutinas, vespertinas y fines de semana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Resultados Comprobados
                    </h3>
                    <p className="text-gray-600">
                      85% de nuestros estudiantes ganan competencias regionales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/image5.jpg"
                    alt="Estudiantes entrenando en pista de patinaje"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructores Section */}
      <section id="instructores" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo de Instructores
            </h2>
            <p className="text-lg text-gray-600">
              Profesionales con experiencia internacional y pasión por enseñar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Instructor 1 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/assets/imagelist1.jpg"
                  alt="Macario Santelices Calle"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Macario Santelices Calle
              </h3>
              <p className="text-green-600 font-medium mb-4">
                Director Académico - Preparador Técnico
              </p>
              <p className="text-gray-600 leading-relaxed">
                Campeón Nacional de patinaje, Campeón Panamericano de patinaje
                de velocidad, miembro de la selección nacional de patinaje.
              </p>
            </div>

            {/* Instructor 2 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/assets/imagelist7.jpg"
                  alt="Miguel Angel Flores"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Miguel Angel Flores
              </h3>
              <p className="text-blue-600 font-medium mb-4">Entrenador</p>
              <p className="text-gray-600 leading-relaxed">
                Instructor especializado en técnicas de patinaje con amplia
                experiencia en el entrenamiento de estudiantes de todos los
                niveles.
              </p>
            </div>

            {/* Instructor 3 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/assets/imagelist5.jpg"
                  alt="Belen Zambrana Pedraza"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Belén Zambrana Pedraza
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                Profesor Auxiliar
              </p>
              <p className="text-gray-600 leading-relaxed">
                20 años, estudiante de Psicología en Utepsa. 4 años de
                experiencia educativa y 11 años de experiencia en patinaje.
              </p>
            </div>

            {/* Instructor 4 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/assets/imagelist6.jpg"
                  alt="Dorca Avigail Choque Cruz"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Dorca Avigail Choque Cruz
              </h3>
              <p className="text-green-600 font-medium mb-4">
                Profesora de nivel Avanzado
              </p>
              <p className="text-gray-600 leading-relaxed">
                8 años de experiencia en patinaje. Especialidad en control de
                rendimiento y preparación para competencias.
              </p>
            </div>

            {/* Instructor 5 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/assets/imagelist4.jpg"
                  alt="Oscar Alberto Grageda"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Oscar Alberto Grageda
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                Profesor de nivel Formación
              </p>
              <p className="text-gray-600 leading-relaxed">
                Atleta con participación internacional en atletismo. Campeón
                sudamericano. Especialidad: Preparador físico.
              </p>
            </div>

            {/* Instructor 6 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/assets/imagelist3.jpg"
                  alt="Fabián Andres Zegarra Almendras"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fabián Andrés Zegarra Almendras
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                Profesor de nivel Inicial
              </p>
              <p className="text-gray-600 leading-relaxed">
                Especialista en guiar estudiantes en sus primeros pasos en el
                patinaje, con enfoque en técnicas fundamentales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¡Comienza tu Aventura Hoy!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contáctanos para más información sobre nuestros programas y
              horarios disponibles.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full border-2 border-gray-100 hover:border-green-200 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-500" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Teléfono de Contacto 1
                    </p>
                    <a
                      href="tel:+59167739022"
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      +591 67739022
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-500" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Teléfono de Contacto 2
                    </p>
                    <a
                      href="tel:+59162156200"
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      +591 62156200
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-500" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Estadio Ramon Tahuichi</p>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/59167739022?text=Requiero%20más%20información%20sobre%20Club%20Elite",
                        "_blank"
                      )
                    }
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                    </svg>
                    Contactar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">CE</span>
            </div>
            <span className="text-2xl font-bold">Club Patín Elite</span>
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-4">
              Síguenos en nuestras redes sociales
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/Club.de.Patinaje.Santa.Cruz.Elite/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={24} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@makipatin.elite_club"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={24} />
                <span>TikTok</span>
              </a>
            </div>
          </div>

          <div className="text-center text-gray-400">
            <p className="mb-2">
              © 2025 Club Elite. Todos los derechos reservados.
            </p>
            <p>Desarrollando talentos en el patinaje artístico desde 2010</p>
          </div>
        </div>
      </footer>

      {/* Chat Button con Logo de WhatsApp */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all transform hover:scale-110 z-40"
        onClick={() =>
          window.open(
            "https://wa.me/59167739022?text=Requiero%20más%20información%20sobre%20Club%20Elite",
            "_blank"
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
        </svg>
      </button>
    </div>
  );
};

export default App;
