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
  Mail,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import logo from "./assets/logo.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
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
              <img
                src={logo}
                alt="Club Elite Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
              <span className="text-xl font-bold text-gray-900">
                Club Elite
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
                disciplina y pasión por el patinaje artístico.
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
                    200+ Estudiantes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    50+ Competencias Ganadas
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/32317065/pexels-photo-32317065.jpeg"
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
            {/* Iniciación */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-pink-200 p-8 transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Heart className="text-pink-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Iniciación (4-7 años)
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Primeros pasos en el hielo con diversión y seguridad
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">
                    Equilibrio y coordinación básica
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">
                    Juegos educativos en hielo
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">Desarrollo de confianza</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900">
                  2-3 clases por semana
                </p>
              </div>
            </div>

            {/* Desarrollo */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 p-8 transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Desarrollo (8-12 años)
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Técnica fundamental y primeras rutinas artísticas
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">Saltos básicos y giros</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">Coreografía elemental</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">Primeras competencias</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900">
                  3-4 clases por semana
                </p>
              </div>
            </div>

            {/* Competitivo */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-yellow-200 p-8 transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Trophy className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Competitivo (13+ años)
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Formación profesional para competencias nacionales
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">Saltos dobles y triples</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">Rutinas competitivas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-500" size={16} />
                  <span className="text-gray-700">Preparación psicológica</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900">
                  5-6 clases por semana
                </p>
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
                    src="https://images.pexels.com/photos/7770717/pexels-photo-7770717.jpeg"
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
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Elena Martínez - Directora Técnica"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Elena Martínez
              </h3>
              <p className="text-green-600 font-medium mb-4">
                Directora Técnica
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ex-campeona nacional con 15 años de experiencia en formación de
                atletas de élite.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Carlos Ruiz - Especialista en Saltos"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Carlos Ruiz
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                Especialista en Saltos
              </p>
              <p className="text-gray-600 leading-relaxed">
                Medallista olímpico especializado en técnica de saltos y
                preparación competitiva.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Sofía López - Coreógrafa Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sofía López
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                Coreógrafa Principal
              </p>
              <p className="text-gray-600 leading-relaxed">
                Especialista en expresión artística y desarrollo de rutinas
                ganadoras.
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

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Phone className="text-green-500" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Mail className="text-green-500" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@clubelite.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MapPin className="text-green-500" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">
                      Centro Deportivo Elite, Av. Principal 123
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solicita Información
              </h3>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Selecciona un programa</option>
                  <option>Iniciación (4-7 años)</option>
                  <option>Desarrollo (8-12 años)</option>
                  <option>Competitivo (13+ años)</option>
                </select>
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
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
            <span className="text-2xl font-bold">Club Elite</span>
          </div>

          <div className="text-center text-gray-400">
            <p className="mb-2">
              © 2025 Club Elite. Todos los derechos reservados.
            </p>
            <p>Desarrollando talentos en el patinaje artístico desde 2010</p>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      {/* Chat Button con Logo de WhatsApp */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all transform hover:scale-110 z-40"
        onClick={() =>
          window.open(
            "https://wa.me/59165014579?text=Hola, me interesa información sobre Club Elite",
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
}

export default App;
