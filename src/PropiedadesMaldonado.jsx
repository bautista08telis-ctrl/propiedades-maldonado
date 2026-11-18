import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Award,
  Bath,
  BedDouble,
  Building2,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Home,
  Images,
  LayoutGrid,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  Phone,
  Printer,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Store,
  Sun,
  Trees,
  Users,
  X,
} from 'lucide-react';

const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Helvetica Neue", Arial, sans-serif';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85';

const OFFICE_INFO = {
  brand: 'Propiedades Maldonado',
  domain: 'propmaldonado.com',
  address: 'Sarandí y Santana – Torre del Banco, Maldonado',
  phone: '4222 0028',
  phoneHref: 'tel:+59842220028',
  fax: '4222 2521',
  email: 'propmald@internet.com.uy',
  emailHref: 'mailto:propmald@internet.com.uy',
  years: 30,
};

const PROPERTIES = [
  {
    id: 'apt-centrico-maldonado',
    title: 'Apartamento céntrico en Maldonado',
    operation: 'Alquiler',
    type: 'Apartamentos',
    zone: 'Maldonado',
    location: 'Centro, Maldonado',
    price: '$ 28.300',
    priceSuffix: '/ mes',
    area: '60 m²',
    bedrooms: 2,
    bathrooms: 1,
    highlights: ['Living comedor', 'Cocina definida', 'Terraza lavadero', 'Balcón'],
    summary: '2 dormitorios, 1 baño, living comedor, cocina, terraza lavadero y balcón.',
    description:
      'Unidad luminosa ubicada en pleno centro de Maldonado, con distribución funcional de 60 m². Cuenta con living comedor amplio con salida a balcón, cocina equipada, terraza lavadero independiente y dos dormitorios cómodos con excelente acceso a servicios y locomoción.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1751945965597-71171ec7a458?auto=format&fit=crop&w=1200&q=80',
        label: 'Living comedor',
        alt: 'Living comedor luminoso de apartamento céntrico en Maldonado',
      },
      {
        src: 'https://images.unsplash.com/photo-1769745241584-be9b8227e126?auto=format&fit=crop&w=1200&q=80',
        label: 'Cocina definida',
        alt: 'Cocina luminosa con mobiliario blanco y mesadas de madera',
      },
      {
        src: 'https://images.unsplash.com/photo-1693631561237-d5c8e8256140?auto=format&fit=crop&w=1200&q=80',
        label: 'Dormitorio principal',
        alt: 'Dormitorio amplio y luminoso con ventanal y cama principal',
      },
      {
        src: 'https://images.unsplash.com/photo-1721825154477-8c3a0688e159?auto=format&fit=crop&w=1200&q=80',
        label: 'Baño completo',
        alt: 'Baño moderno luminoso con lavatorio y terminaciones claras',
      },
    ],
  },
  {
    id: 'casa-barrio-asturias-san-carlos',
    title: 'Casa en Barrio Asturias, San Carlos',
    operation: 'Venta',
    type: 'Casas',
    zone: 'San Carlos',
    location: 'Barrio Asturias, San Carlos',
    price: 'U$S 140.000',
    priceSuffix: '',
    area: '95 m²',
    bedrooms: 3,
    bathrooms: 2,
    highlights: ['3 dormitorios', '2 baños', 'Entorno residencial'],
    summary: '3 dormitorios, 2 baños y 95 m² en zona residencial consolidada.',
    description:
      'Residencia sólida de 95 m² edificados en Barrio Asturias, San Carlos. Pensada para la vida familiar, ofrece tres dormitorios bien proporcionados, dos baños completos y ambientes equilibrados en un entorno tranquilo y cercano al centro de la ciudad.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1783125127195-46eaaac89437?auto=format&fit=crop&w=1200&q=80',
        label: 'Fachada y frente',
        alt: 'Casa residencial con jardín al frente en Barrio Asturias, San Carlos',
      },
      {
        src: 'https://images.unsplash.com/photo-1757924461488-ef9ad0670978?auto=format&fit=crop&w=1200&q=80',
        label: 'Living principal',
        alt: 'Sala de estar amplia con ventanales hacia el jardín',
      },
      {
        src: 'https://images.unsplash.com/photo-1758565811352-a439bd6f956e?auto=format&fit=crop&w=1200&q=80',
        label: 'Cocina y comedor',
        alt: 'Cocina moderna con isla y comedor integrado',
      },
      {
        src: 'https://images.unsplash.com/photo-1649817018876-c05473c7e5a4?auto=format&fit=crop&w=1200&q=80',
        label: 'Dormitorio principal',
        alt: 'Dormitorio residencial con cama y entrada de luz natural',
      },
    ],
  },
  {
    id: 'casa-barrio-norte-maldonado',
    title: 'Casa en Barrio Norte, Maldonado',
    operation: 'Venta',
    type: 'Casas',
    zone: 'Maldonado',
    location: 'Barrio Norte, Maldonado',
    price: 'U$S 130.000',
    priceSuffix: '',
    area: '65 m²',
    bedrooms: 2,
    bathrooms: 1,
    highlights: ['Living-comedor con estufa', 'Cocina', 'Patio privado'],
    summary: '2 dormitorios, 1 baño, living-comedor con estufa, cocina y patio.',
    description:
      'Acogedora casa de 65 m² en Barrio Norte, Maldonado. Dispone de living-comedor con estufa a leña para disfrutar todo el año, cocina práctica, dos dormitorios, un baño completo y patio propio ideal para esparcimiento al aire libre.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1674672670977-bcf517fc2376?auto=format&fit=crop&w=1200&q=80',
        label: 'Patio y parrillero',
        alt: 'Patio privado con pérgola y parrillero en Barrio Norte, Maldonado',
      },
      {
        src: 'https://images.unsplash.com/photo-1793986570668-14bdc8ef31fb?auto=format&fit=crop&w=1200&q=80',
        label: 'Living-comedor con estufa',
        alt: 'Living-comedor acogedor con estufa a leña y luz natural',
      },
      {
        src: 'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?auto=format&fit=crop&w=1200&q=80',
        label: 'Cocina',
        alt: 'Cocina funcional con excelente iluminación',
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        label: 'Dormitorio',
        alt: 'Dormitorio luminoso con cama matrimonial y tonos cálidos',
      },
    ],
  },
  {
    id: 'penthouse-centrico-maldonado',
    title: 'Penthouse céntrico en Maldonado',
    operation: 'Venta',
    type: 'Apartamentos',
    zone: 'Maldonado',
    location: 'Centro, Maldonado',
    price: 'U$S 170.000',
    priceSuffix: '',
    area: null,
    bedrooms: 1,
    bathrooms: 1,
    extraFeature: 'Terraza y cochera',
    highlights: ['Living comedor', 'Cocina', 'Terraza panorámica', 'Cochera incluida'],
    summary: '1 dormitorio, 1 baño, living comedor, cocina, terraza y cochera.',
    description:
      'Exclusivo penthouse en el centro de Maldonado que combina privacidad, vistas abiertas y practicidad urbana. Cuenta con un dormitorio, baño completo, living comedor integrado a cocina, amplia terraza de uso exclusivo y cochera propia.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1644695931691-90d9183a7ccd?auto=format&fit=crop&w=1200&q=80',
        label: 'Vista panorámica',
        alt: 'Vista urbana desde terraza alta de penthouse céntrico en Maldonado',
      },
      {
        src: 'https://images.unsplash.com/photo-1748679767437-00b5c0327b1a?auto=format&fit=crop&w=1200&q=80',
        label: 'Living comedor',
        alt: 'Living comedor contemporáneo con mobiliario minimalista',
      },
      {
        src: 'https://images.unsplash.com/photo-1758193431353-87812fbff5cd?auto=format&fit=crop&w=1200&q=80',
        label: 'Terraza de uso exclusivo',
        alt: 'Terraza exterior de apartamento con espacio de estar',
      },
      {
        src: 'https://images.unsplash.com/photo-1768486143865-342d8cc12c90?auto=format&fit=crop&w=1200&q=80',
        label: 'Cocina integrada',
        alt: 'Cocina moderna con isla y líneas limpias',
      },
    ],
  },
  {
    id: 'local-camino-de-los-gauchos',
    title: 'Local comercial en Camino de los Gauchos',
    operation: 'Alquiler',
    type: 'Locales',
    zone: 'Maldonado',
    location: 'Camino de los Gauchos, Maldonado',
    price: '$ 60.000',
    priceSuffix: '/ mes',
    area: '100 m²',
    bedrooms: null,
    bathrooms: null,
    extraFeature: 'Salón comercial amplio',
    highlights: ['100 m² de planta libre', 'Frente comercial estratégico', 'Alto tránsito'],
    summary: 'Salón comercial amplio de 100 m² sobre eje comercial consolidado.',
    description:
      'Amplio salón comercial de 100 m² ubicado sobre Camino de los Gauchos, una de las arterias comerciales con mayor movimiento de Maldonado. Su planta versátil permite adaptarlo fácilmente a showroom, atención al público, depósito o servicios.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1778034758286-d58d597db0a4?auto=format&fit=crop&w=1200&q=80',
        label: 'Salón principal',
        alt: 'Salón comercial amplio e iluminado en Camino de los Gauchos',
      },
      {
        src: 'https://images.unsplash.com/photo-1771033834141-023d630b3965?auto=format&fit=crop&w=1200&q=80',
        label: 'Área de exhibición',
        alt: 'Espacio interior comercial luminoso para exhibición',
      },
      {
        src: 'https://images.unsplash.com/photo-1735217802452-7aa1d548f3b9?auto=format&fit=crop&w=1200&q=80',
        label: 'Zona de atención',
        alt: 'Sector comercial equipado para atención al público',
      },
    ],
  },
  {
    id: 'terreno-fructuoso-rivera',
    title: 'Terreno en Fructuoso Rivera casi Camino de los Gauchos',
    operation: 'Venta',
    type: 'Terrenos',
    zone: 'Maldonado',
    location: 'Fructuoso Rivera casi Cno. de los Gauchos, Maldonado',
    price: 'U$S 85.000',
    priceSuffix: '',
    area: '300 m²',
    bedrooms: null,
    bathrooms: null,
    extraFeature: 'Listo para construir',
    highlights: ['Superficie de 300 m²', 'Lote listo para construir', 'Conectividad inmediata'],
    summary: 'Lote de 300 m² listo para construir en punto estratégico de Maldonado.',
    description:
      'Excelente oportunidad de inversión o proyecto residencial en Fructuoso Rivera casi Camino de los Gauchos. Lote nivelado de 300 m² listo para construir, con rápida conexión a comercios, centros educativos y arterias principales de Maldonado.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1623138860012-c0c4f41d6433?auto=format&fit=crop&w=1200&q=80',
        label: 'Vista del lote',
        alt: 'Terreno verde nivelado de 300 m² listo para construir en Maldonado',
      },
      {
        src: 'https://images.unsplash.com/photo-1602351592699-3e8fe8afe887?auto=format&fit=crop&w=1200&q=80',
        label: 'Entorno arbolado',
        alt: 'Vegetación y orientación soleada del terreno',
      },
      {
        src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
        label: 'Orientación solar',
        alt: 'Vista abierta del terreno y horizonte despejado',
      },
    ],
  },
];

const CATEGORIES = [
  {
    id: 'Casas',
    filterType: 'Casas',
    title: 'Casas',
    subtitle: 'Residencias familiares en barrios consolidados de Maldonado y San Carlos.',
    image:
      'https://images.unsplash.com/photo-1783125127094-ea962d41ba42?auto=format&fit=crop&w=1400&q=80',
    spanClass: 'md:col-span-7',
    icon: Home,
  },
  {
    id: 'Apartamentos',
    filterType: 'Apartamentos',
    title: 'Apartamentos',
    subtitle: 'Unidades céntricas y penthouses con terraza, balcón y cochera.',
    image:
      'https://images.unsplash.com/photo-1757924461488-ef9ad0670978?auto=format&fit=crop&w=1200&q=80',
    spanClass: 'md:col-span-5',
    icon: Building2,
  },
  {
    id: 'Locales',
    filterType: 'Locales',
    title: 'Locales Comerciales',
    subtitle: 'Salones amplios sobre arterias comerciales de alto flujo.',
    image:
      'https://images.unsplash.com/photo-1771033834141-023d630b3965?auto=format&fit=crop&w=1200&q=80',
    spanClass: 'md:col-span-5',
    icon: Store,
  },
  {
    id: 'Terrenos',
    filterType: 'Terrenos',
    title: 'Terrenos / Oficinas',
    subtitle: 'Lotes listos para construir y espacios profesionales en puntos clave.',
    image:
      'https://images.unsplash.com/photo-1602351592699-3e8fe8afe887?auto=format&fit=crop&w=1400&q=80',
    spanClass: 'md:col-span-7',
    icon: Trees,
  },
];

const COMPANY_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Transparencia en cada operación',
    description:
      'Información clara, documentación verificada y acompañamiento honesto desde el primer contacto hasta la firma definitiva.',
  },
  {
    icon: Award,
    title: 'Tasaciones reales de mercado',
    description:
      'Tres décadas operando en Maldonado y San Carlos nos permiten valorar cada inmueble con criterio técnico y pulso real de cada barrio.',
  },
  {
    icon: Users,
    title: 'Acompañamiento personalizado',
    description:
      'Atención directa en nuestra oficina de Torre del Banco, adaptada tanto a quienes buscan su primer hogar como a inversores y comercios.',
  },
];

const OPERATIONS = ['Todas', 'Venta', 'Alquiler'];
const TYPES = ['Todos', 'Casas', 'Apartamentos', 'Locales', 'Terrenos'];
const ZONES = ['Todas', 'Maldonado', 'San Carlos'];
const NAV_LINKS = [
  { label: 'Propiedades', id: 'propiedades' },
  { label: 'Categorías', id: 'categorias' },
  { label: 'Nuestra Empresa', id: 'nuestra-empresa' },
  { label: 'Contacto', id: 'contacto' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}

function validateContactForm(values) {
  const errors = {};
  if (!values.nombre.trim() || values.nombre.trim().length < 2) {
    errors.nombre = 'Ingresa tu nombre completo (al menos 2 caracteres).';
  }
  const contact = values.contacto.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const digits = contact.replace(/\D/g, '');
  if (!contact || (!isEmail && digits.length < 7)) {
    errors.contacto = 'Ingresa un correo electrónico válido o un teléfono de contacto.';
  }
  if (!values.mensaje.trim() || values.mensaje.trim().length < 8) {
    errors.mensaje = 'Cuéntanos brevemente qué propiedad o asesoramiento buscas.';
  }
  return errors;
}

export default function PropiedadesMaldonado() {
  const [operation, setOperation] = useState('Todas');
  const [type, setType] = useState('Todos');
  const [zone, setZone] = useState('Todas');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const [formValues, setFormValues] = useState({
    nombre: '',
    contacto: '',
    propiedadInteres: '',
    mensaje: '',
  });
  const [touched, setTouched] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const modalCloseRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const nombreInputRef = useRef(null);
  const contactoInputRef = useRef(null);
  const mensajeInputRef = useRef(null);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((item) => {
      const matchOp = operation === 'Todas' || item.operation === operation;
      const matchType = type === 'Todos' || item.type === type;
      const matchZone = zone === 'Todas' || item.zone === zone;
      return matchOp && matchType && matchZone;
    });
  }, [operation, type, zone]);

  const hasActiveFilters = operation !== 'Todas' || type !== 'Todos' || zone !== 'Todas';

  const formErrors = useMemo(() => validateContactForm(formValues), [formValues]);

  // Accessible modal lifecycle: focus trap, Escape dismiss, scroll lock & focus restore
  useEffect(() => {
    if (!selectedProperty) return;
    lastFocusedRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      modalCloseRef.current?.focus();
    }, 10);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProperty(null);
        return;
      }
      if (e.key === 'ArrowRight' && selectedProperty.gallery.length > 1) {
        setShowAllPhotos(false);
        setActivePhotoIndex((prev) => (prev + 1) % selectedProperty.gallery.length);
        return;
      }
      if (e.key === 'ArrowLeft' && selectedProperty.gallery.length > 1) {
        setShowAllPhotos(false);
        setActivePhotoIndex(
          (prev) => (prev - 1 + selectedProperty.gallery.length) % selectedProperty.gallery.length
        );
        return;
      }
      if (e.key === 'Tab') {
        const dialog = document.getElementById('property-detail-dialog');
        if (!dialog) return;
        const focusables = dialog.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') {
        lastFocusedRef.current.focus();
      }
    };
  }, [selectedProperty]);

  const openPropertyModal = (property) => {
    setActivePhotoIndex(0);
    setShowAllPhotos(false);
    setSelectedProperty(property);
  };

  const resetFilters = () => {
    setOperation('Todas');
    setType('Todos');
    setZone('Todas');
  };

  const applyFilterAndScroll = (nextFilters) => {
    if (nextFilters.operation !== undefined) setOperation(nextFilters.operation);
    if (nextFilters.type !== undefined) setType(nextFilters.type);
    if (nextFilters.zone !== undefined) setZone(nextFilters.zone);
    setMobileMenuOpen(false);
    scrollToSection('propiedades');
  };

  const openContactWithContext = (interestText, defaultMessage) => {
    setFormSubmitted(false);
    setSubmitAttempted(false);
    setTouched({});
    setFormValues((prev) => ({
      ...prev,
      propiedadInteres: interestText,
      mensaje: defaultMessage || prev.mensaje,
    }));
    setSelectedProperty(null);
    setMobileMenuOpen(false);
    scrollToSection('contacto');
    window.setTimeout(() => {
      nombreInputRef.current?.focus();
    }, 350);
  };

  const handleFieldChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleFieldBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setTouched({ nombre: true, contacto: true, mensaje: true });

    if (Object.keys(formErrors).length > 0) {
      if (formErrors.nombre) nombreInputRef.current?.focus();
      else if (formErrors.contacto) contactoInputRef.current?.focus();
      else if (formErrors.mensaje) mensajeInputRef.current?.focus();
      return;
    }

    setFormSubmitted(true);
  };

  const showError = (field) => Boolean((touched[field] || submitAttempted) && formErrors[field]);

  return (
    <div
      className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] antialiased selection:bg-[#0066CC]/15 selection:text-[#1D1D1F]"
      style={{ fontFamily: FONT_STACK }}
    >
      <a
        href="#propiedades"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#1D1D1F] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
      >
        Ir al catálogo de propiedades
      </a>

      {/* 1. Navegación Glassmorphism */}
      <header className="sticky top-0 z-40 border-b border-[#D2D2D7]/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
            className="flex items-center gap-2.5 text-[#1D1D1F] transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded-lg py-1"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1D1D1F] text-white">
              <Building2 className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.02em] sm:text-base">
              Propiedades Maldonado
            </span>
          </a>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-[13px] font-medium text-[#1D1D1F]/80 transition-colors duration-200 hover:text-[#1D1D1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded-md px-1 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                openContactWithContext(
                  'Consulta general / Tasación',
                  'Hola, me gustaría agendar una consulta con un asesor de Propiedades Maldonado.'
                )
              }
              className="hidden sm:inline-flex min-h-[38px] items-center justify-center rounded-full bg-[#0066CC] px-4 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#0055B3] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]/35"
            >
              Agendar consulta
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1D1D1F] transition-colors hover:bg-[#F5F5F7] md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <nav
            aria-label="Navegación móvil"
            className="border-t border-[#D2D2D7]/60 bg-white/95 px-4 pb-5 pt-3 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    scrollToSection(link.id);
                  }}
                  className="flex min-h-[44px] items-center justify-between rounded-xl px-3 text-[15px] font-medium text-[#1D1D1F] transition-colors hover:bg-[#F5F5F7]"
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                </a>
              ))}
              <button
                type="button"
                onClick={() =>
                  openContactWithContext(
                    'Consulta general / Tasación',
                    'Hola, me gustaría agendar una consulta con un asesor de Propiedades Maldonado.'
                  )
                }
                className="mt-3 flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#0066CC] px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-[#0055B3]"
              >
                Agendar consulta
              </button>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* 2. Hero Section + Buscador Flotante Minimalista */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#F5F5F7] pt-12 pb-16 sm:pt-20 sm:pb-24"
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D2D2D7]/80 bg-[#F5F5F7] px-3.5 py-1 text-[12px] font-medium tracking-[0.04em] text-[#6E6E73] uppercase">
                Maldonado &amp; San Carlos · Desde 1996
              </p>

              <h1 className="text-[36px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#1D1D1F] sm:text-[56px] lg:text-[64px]">
                30 años encontrando tu lugar en Maldonado.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-[17px] font-normal leading-[1.5] text-[#6E6E73] sm:text-[20px]">
                Propiedades seleccionadas en Maldonado y San Carlos con el respaldo de tres décadas de experiencia.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <button
                  type="button"
                  onClick={() => scrollToSection('propiedades')}
                  className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center rounded-full bg-[#1D1D1F] px-7 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#333336] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]/35"
                >
                  Explorar propiedades
                </button>

                <button
                  type="button"
                  onClick={() =>
                    openContactWithContext(
                      'Asesoramiento personalizado',
                      'Hola, quisiera recibir asesoramiento sobre propiedades disponibles en Maldonado o San Carlos.'
                    )
                  }
                  className="group inline-flex min-h-[44px] items-center justify-center gap-1 rounded-full px-3 py-2 text-[16px] font-medium text-[#0066CC] transition-colors duration-200 hover:text-[#0055B3] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]/30"
                >
                  <span>Contactar un asesor</span>
                  <ChevronRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            {/* Marco arquitectónico estilo Apple + Buscador Flotante */}
            <div className="relative mt-10 sm:mt-14">
              <div className="overflow-hidden rounded-3xl border border-[#D2D2D7]/50 bg-[#F5F5F7] shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
                  <img
                    src={HERO_IMAGE}
                    alt="Arquitectura residencial luminosa en Maldonado"
                    className="h-full w-full object-cover object-center"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Buscador Flotante Minimalista */}
              <div
                aria-label="Buscador de propiedades en tiempo real"
                className="relative z-10 mx-auto -mt-8 max-w-5xl rounded-3xl border border-[#D2D2D7]/80 bg-white/95 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-md sm:-mt-10 md:rounded-full md:px-5 md:py-3"
              >
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 md:flex md:items-center md:justify-between md:gap-3">
                  {/* Operación */}
                  <div className="flex min-w-0 flex-1 flex-col rounded-2xl px-3 py-1.5 transition-colors hover:bg-[#F5F5F7] md:rounded-full">
                    <label
                      htmlFor="filter-operation"
                      className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#86868B]"
                    >
                      Operación
                    </label>
                    <select
                      id="filter-operation"
                      value={operation}
                      onChange={(e) => setOperation(e.target.value)}
                      className="mt-0.5 w-full cursor-pointer bg-transparent text-[14px] font-medium text-[#1D1D1F] focus:outline-none"
                    >
                      {OPERATIONS.map((op) => (
                        <option key={op} value={op}>
                          {op}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="hidden h-7 w-px shrink-0 bg-[#D2D2D7]/80 md:block" aria-hidden="true" />

                  {/* Tipo */}
                  <div className="flex min-w-0 flex-1 flex-col rounded-2xl px-3 py-1.5 transition-colors hover:bg-[#F5F5F7] md:rounded-full">
                    <label
                      htmlFor="filter-type"
                      className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#86868B]"
                    >
                      Tipo
                    </label>
                    <select
                      id="filter-type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="mt-0.5 w-full cursor-pointer bg-transparent text-[14px] font-medium text-[#1D1D1F] focus:outline-none"
                    >
                      {TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t === 'Todos' ? 'Todos los tipos' : t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="hidden h-7 w-px shrink-0 bg-[#D2D2D7]/80 md:block" aria-hidden="true" />

                  {/* Zona */}
                  <div className="flex min-w-0 flex-1 flex-col rounded-2xl px-3 py-1.5 transition-colors hover:bg-[#F5F5F7] md:rounded-full">
                    <label
                      htmlFor="filter-zone"
                      className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#86868B]"
                    >
                      Zona
                    </label>
                    <select
                      id="filter-zone"
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="mt-0.5 w-full cursor-pointer bg-transparent text-[14px] font-medium text-[#1D1D1F] focus:outline-none"
                    >
                      {ZONES.map((z) => (
                        <option key={z} value={z}>
                          {z === 'Todas' ? 'Todas las zonas' : z}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Acción rápida */}
                  <div className="sm:col-span-3 md:col-span-1 flex shrink-0 items-center justify-end gap-2 pt-1 md:pt-0">
                    {hasActiveFilters && (
                      <button
                        type="button"
                        onClick={resetFilters}
                        aria-label="Restablecer filtros"
                        className="inline-flex min-h-[42px] shrink-0 whitespace-nowrap items-center justify-center gap-1.5 rounded-full border border-[#D2D2D7] px-4 text-[13px] font-medium text-[#1D1D1F] transition-colors hover:bg-[#F5F5F7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Limpiar</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => scrollToSection('propiedades')}
                      className="inline-flex min-h-[44px] w-full shrink-0 whitespace-nowrap md:w-auto items-center justify-center gap-2 rounded-full bg-[#0066CC] px-5 py-2.5 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#0055B3] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]/35"
                    >
                      <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                      <span>
                        Ver {filteredProperties.length}{' '}
                        {filteredProperties.length === 1 ? 'propiedad' : 'propiedades'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bento Grid de Categorías */}
        <section id="categorias" className="bg-[#F5F5F7] py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#86868B]">
                  Explorar por categoría
                </p>
                <h2 className="mt-2 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1D1D1F] sm:text-[42px]">
                  Cada espacio, una elección precisa.
                </h2>
              </div>
              <p className="max-w-md text-[15px] leading-[1.5] text-[#6E6E73]">
                Selecciona una categoría para filtrar el catálogo en tiempo real según tu proyecto de vida o inversión.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
              {CATEGORIES.map((category) => {
                const CategoryIcon = category.icon;
                const count = PROPERTIES.filter((p) => p.type === category.filterType).length;
                const isSelected = type === category.filterType;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      applyFilterAndScroll({
                        type: category.filterType,
                        operation: 'Todas',
                        zone: 'Todas',
                      })
                    }
                    className={`group relative flex min-h-[280px] sm:min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]/40 ${
                      category.spanClass
                    } ${isSelected ? 'ring-2 ring-[#0066CC] ring-offset-2 ring-offset-[#F5F5F7]' : ''}`}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 flex w-full items-end justify-between gap-4 p-6 sm:p-8">
                      <div>
                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-md">
                          <CategoryIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>
                            {count} {count === 1 ? 'disponible' : 'disponibles'}
                          </span>
                        </span>
                        <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[28px]">
                          {category.title}
                        </h3>
                        <p className="mt-1.5 max-w-md text-[14px] leading-[1.45] text-white/85">
                          {category.subtitle}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#1D1D1F] transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Catálogo de Propiedades Destacadas */}
        <section id="propiedades" className="bg-[#FFFFFF] py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#E8E8ED] pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#86868B]">
                  Catálogo seleccionado
                </p>
                <h2 className="mt-2 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1D1D1F] sm:text-[42px]">
                  Propiedades destacadas.
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {OPERATIONS.map((op) => (
                  <button
                    key={op}
                    type="button"
                    onClick={() => setOperation(op)}
                    aria-pressed={operation === op}
                    className={`min-h-[38px] rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] ${
                      operation === op
                        ? 'bg-[#1D1D1F] text-white'
                        : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]'
                    }`}
                  >
                    {op}
                  </button>
                ))}
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium text-[#0066CC] transition-colors hover:bg-[#0066CC]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Ver todas ({PROPERTIES.length})</span>
                  </button>
                )}
              </div>
            </div>

            {filteredProperties.length === 0 ? (
              <div
                role="status"
                className="mx-auto max-w-xl rounded-3xl border border-[#E8E8ED] bg-[#F5F5F7] px-6 py-14 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#86868B] shadow-sm">
                  <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-[21px] font-semibold tracking-[-0.02em] text-[#1D1D1F]">
                  No hay propiedades para esa combinación
                </h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-[#6E6E73]">
                  Prueba ajustando la operación, el tipo de inmueble o la zona, o consulta directamente con nuestros asesores por opciones fuera de cartera pública.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#1D1D1F] px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#333336]"
                  >
                    Ver todas las propiedades
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      openContactWithContext(
                        `Búsqueda: ${type} en ${zone} (${operation})`,
                        `Hola, estoy buscando ${type === 'Todos' ? 'una propiedad' : type.toLowerCase()} para ${operation === 'Todas' ? 'compra o alquiler' : operation.toLowerCase()} en ${zone === 'Todas' ? 'Maldonado o San Carlos' : zone}.`
                      )
                    }
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-2.5 text-[14px] font-medium text-[#0066CC] hover:bg-[#0066CC]/10"
                  >
                    Consultar a un asesor
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {filteredProperties.map((property) => (
                  <article
                    key={property.id}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8E8ED] bg-[#F5F5F7]/65 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:shadow-[0_20px_44px_rgba(0,0,0,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <button
                      type="button"
                      onClick={() => openPropertyModal(property)}
                      aria-label={`Ver ficha y galería de ${property.title}`}
                      className="flex h-full flex-col text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#0066CC]/40 rounded-3xl"
                    >
                      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E8E8ED]">
                        <img
                          src={property.gallery[0].src}
                          alt={property.gallery[0].alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                        />
                        <div className="absolute left-4 top-4 flex items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] backdrop-blur-md ${
                              property.operation === 'Venta'
                                ? 'bg-[#1D1D1F]/85 text-white'
                                : 'bg-white/90 text-[#1D1D1F]'
                            }`}
                          >
                            {property.operation}
                          </span>
                          <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-[#1D1D1F] backdrop-blur-md">
                            {property.zone}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                          <Images className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{property.gallery.length} fotos</span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <div className="flex items-start gap-1.5 text-[13px] font-medium leading-[1.35] text-[#6E6E73]">
                            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#86868B]" aria-hidden="true" />
                            <span>{property.location}</span>
                          </div>

                          <h3 className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#1D1D1F]">
                            {property.title}
                          </h3>

                          <p className="mt-2 text-[14px] leading-[1.5] text-[#6E6E73]">
                            {property.summary}
                          </p>
                        </div>

                        <div className="mt-6">
                          {/* Especificaciones clave */}
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#D2D2D7]/70 pt-4 text-[13px] font-medium text-[#1D1D1F]">
                            {property.bedrooms !== null && (
                              <span className="inline-flex items-center gap-1.5">
                                <BedDouble className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                                {property.bedrooms}{' '}
                                {property.bedrooms === 1 ? 'dorm.' : 'dorms.'}
                              </span>
                            )}
                            {property.bathrooms !== null && (
                              <span className="inline-flex items-center gap-1.5">
                                <Bath className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                                {property.bathrooms}{' '}
                                {property.bathrooms === 1 ? 'baño' : 'baños'}
                              </span>
                            )}
                            {property.area && (
                              <span className="inline-flex items-center gap-1.5">
                                <Maximize2 className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                                {property.area}
                              </span>
                            )}
                            {!property.area && property.extraFeature && (
                              <span className="inline-flex items-center gap-1.5">
                                <Car className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                                {property.extraFeature}
                              </span>
                            )}
                            {property.bedrooms === null && property.extraFeature && (
                              <span className="inline-flex items-center gap-1.5">
                                <Sun className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                                {property.extraFeature}
                              </span>
                            )}
                          </div>

                          <div className="mt-4 flex items-baseline justify-between gap-2">
                            <p className="text-[22px] font-semibold tracking-[-0.02em] text-[#1D1D1F]">
                              {property.price}
                              {property.priceSuffix && (
                                <span className="ml-1 text-[13px] font-normal text-[#86868B]">
                                  {property.priceSuffix}
                                </span>
                              )}
                            </p>

                            <span className="inline-flex items-center gap-0.5 text-[14px] font-medium text-[#0066CC] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none">
                              <span>Ver ficha</span>
                              <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 5. Nuestra Empresa (Bloque Oscuro de Alto Contraste) */}
        <section
          id="nuestra-empresa"
          className="relative overflow-hidden bg-[#000000] py-20 text-white sm:py-28"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,102,204,0.16),transparent_60%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#86868B]">
                  Nuestra Empresa
                </p>
                <h2 className="mt-3 text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[54px]">
                  Tres décadas construyendo confianza en cada metro cuadrado.
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[17px] leading-[1.55] text-[#A1A1A6]">
                  Desde nuestra oficina en la emblemática Torre del Banco, acompañamos a familias, comerciantes e inversores en Maldonado y San Carlos con criterio profesional, tasaciones honestas y trato directo.
                </p>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
              {COMPANY_PILLARS.map((pillar) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1D1D1F] to-[#141416] p-7 sm:p-8"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <PillarIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.55] text-[#A1A1A6]">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-[#161618] p-7 sm:flex-row sm:items-center sm:p-9">
              <div>
                <p className="text-[13px] font-medium text-[#86868B]">
                  ¿Pensando en vender o alquilar tu propiedad?
                </p>
                <p className="mt-1 text-[21px] font-semibold tracking-[-0.02em] text-white">
                  Solicita una tasación real respaldada por 30 años de trayectoria.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  openContactWithContext(
                    'Solicitud de tasación',
                    'Hola, deseo solicitar una tasación profesional para mi propiedad en Maldonado / San Carlos.'
                  )
                }
                className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#1D1D1F] transition-all duration-300 hover:bg-[#F5F5F7] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                <span>Solicitar tasación</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* 6. Contacto Minimalista */}
        <section id="contacto" className="bg-[#FFFFFF] py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Información Real de la Oficina */}
              <div className="lg:col-span-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#86868B]">
                  Contacto directo
                </p>
                <h2 className="mt-2 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1D1D1F] sm:text-[42px]">
                  Hablemos de tu próxima propiedad.
                </h2>
                <p className="mt-4 text-[16px] leading-[1.55] text-[#6E6E73]">
                  Visítanos en el corazón de Maldonado o envíanos tu consulta. Respondemos de forma personalizada para coordinar visitas y tasaciones.
                </p>

                <div className="mt-8 space-y-4 rounded-3xl border border-[#E8E8ED] bg-[#F5F5F7] p-6 sm:p-7">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1D1D1F] shadow-sm">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868B]">
                        Dirección
                      </p>
                      <p className="mt-0.5 text-[15px] font-medium text-[#1D1D1F]">
                        {OFFICE_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#D2D2D7]/70 pt-4 flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1D1D1F] shadow-sm">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868B]">
                        Teléfono
                      </p>
                      <a
                        href={OFFICE_INFO.phoneHref}
                        className="mt-0.5 inline-block text-[15px] font-medium text-[#0066CC] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded"
                      >
                        {OFFICE_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-[#D2D2D7]/70 pt-4 flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1D1D1F] shadow-sm">
                      <Printer className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868B]">
                        Fax
                      </p>
                      <p className="mt-0.5 text-[15px] font-medium text-[#1D1D1F]">
                        {OFFICE_INFO.fax}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#D2D2D7]/70 pt-4 flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1D1D1F] shadow-sm">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868B]">
                        Email
                      </p>
                      <a
                        href={OFFICE_INFO.emailHref}
                        className="mt-0.5 inline-block break-all text-[15px] font-medium text-[#0066CC] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded"
                      >
                        {OFFICE_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario Limpio */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-[#E8E8ED] bg-[#FFFFFF] p-6 shadow-[0_12px_36px_rgba(0,0,0,0.04)] sm:p-10">
                  {formSubmitted ? (
                    <div role="status" className="py-8 text-center sm:py-12">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0066CC]/10 text-[#0066CC]">
                        <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 text-[24px] font-semibold tracking-[-0.02em] text-[#1D1D1F]">
                        Consulta recibida
                      </h3>
                      <p className="mx-auto mt-2.5 max-w-md text-[15px] leading-[1.55] text-[#6E6E73]">
                        Gracias, <strong className="font-medium text-[#1D1D1F]">{formValues.nombre}</strong>. Registramos tu mensaje
                        {formValues.propiedadInteres
                          ? ` sobre "${formValues.propiedadInteres}"`
                          : ''}
                        . Un asesor se pondrá en contacto a través de{' '}
                        <span className="font-medium text-[#1D1D1F]">{formValues.contacto}</span>.
                      </p>
                      <p className="mt-3 text-[13px] text-[#86868B]">
                        Para atención telefónica inmediata: {OFFICE_INFO.phone} · {OFFICE_INFO.email}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setSubmitAttempted(false);
                          setTouched({});
                          setFormValues({
                            nombre: '',
                            contacto: '',
                            propiedadInteres: '',
                            mensaje: '',
                          });
                        }}
                        className="mt-7 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#1D1D1F] px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#333336]"
                      >
                        Enviar otra consulta
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div>
                        <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#1D1D1F]">
                          Agendar consulta
                        </h3>
                        <p className="mt-1 text-[14px] text-[#6E6E73]">
                          Completa tus datos y coordinamos una entrevista o visita sin compromiso.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-nombre"
                            className="block text-[13px] font-medium text-[#1D1D1F]"
                          >
                            Nombre completo <span className="text-[#86868B]">*</span>
                          </label>
                          <input
                            ref={nombreInputRef}
                            id="contact-nombre"
                            type="text"
                            autoComplete="name"
                            required
                            value={formValues.nombre}
                            onChange={(e) => handleFieldChange('nombre', e.target.value)}
                            onBlur={() => handleFieldBlur('nombre')}
                            aria-invalid={showError('nombre')}
                            aria-describedby={showError('nombre') ? 'error-nombre' : undefined}
                            placeholder="Ej. María Rodríguez"
                            className={`mt-1.5 w-full rounded-2xl border bg-[#F5F5F7]/60 px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] transition-colors focus:bg-white focus:outline-none focus:ring-4 ${
                              showError('nombre')
                                ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15'
                                : 'border-[#D2D2D7] focus:border-[#0066CC] focus:ring-[#0066CC]/15'
                            }`}
                          />
                          {showError('nombre') && (
                            <p
                              id="error-nombre"
                              role="alert"
                              className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-[#DC2626]"
                            >
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              <span>{formErrors.nombre}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-info"
                            className="block text-[13px] font-medium text-[#1D1D1F]"
                          >
                            Teléfono o Email <span className="text-[#86868B]">*</span>
                          </label>
                          <input
                            ref={contactoInputRef}
                            id="contact-info"
                            type="text"
                            autoComplete="email"
                            required
                            value={formValues.contacto}
                            onChange={(e) => handleFieldChange('contacto', e.target.value)}
                            onBlur={() => handleFieldBlur('contacto')}
                            aria-invalid={showError('contacto')}
                            aria-describedby={showError('contacto') ? 'error-contacto' : undefined}
                            placeholder="nombre@correo.com o 099 123 456"
                            className={`mt-1.5 w-full rounded-2xl border bg-[#F5F5F7]/60 px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] transition-colors focus:bg-white focus:outline-none focus:ring-4 ${
                              showError('contacto')
                                ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15'
                                : 'border-[#D2D2D7] focus:border-[#0066CC] focus:ring-[#0066CC]/15'
                            }`}
                          />
                          {showError('contacto') && (
                            <p
                              id="error-contacto"
                              role="alert"
                              className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-[#DC2626]"
                            >
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              <span>{formErrors.contacto}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-propiedad"
                          className="block text-[13px] font-medium text-[#1D1D1F]"
                        >
                          Propiedad o motivo de consulta
                        </label>
                        <input
                          id="contact-propiedad"
                          type="text"
                          value={formValues.propiedadInteres}
                          onChange={(e) => handleFieldChange('propiedadInteres', e.target.value)}
                          placeholder="Ej. Penthouse céntrico en Maldonado / Tasación"
                          className="mt-1.5 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7]/60 px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] transition-colors focus:border-[#0066CC] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0066CC]/15"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-mensaje"
                          className="block text-[13px] font-medium text-[#1D1D1F]"
                        >
                          Mensaje <span className="text-[#86868B]">*</span>
                        </label>
                        <textarea
                          ref={mensajeInputRef}
                          id="contact-mensaje"
                          rows={4}
                          required
                          value={formValues.mensaje}
                          onChange={(e) => handleFieldChange('mensaje', e.target.value)}
                          onBlur={() => handleFieldBlur('mensaje')}
                          aria-invalid={showError('mensaje')}
                          aria-describedby={showError('mensaje') ? 'error-mensaje' : undefined}
                          placeholder="Cuéntanos en qué podemos ayudarte o qué horario prefieres para coordinar una visita."
                          className={`mt-1.5 w-full resize-y rounded-2xl border bg-[#F5F5F7]/60 px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] transition-colors focus:bg-white focus:outline-none focus:ring-4 ${
                            showError('mensaje')
                              ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15'
                              : 'border-[#D2D2D7] focus:border-[#0066CC] focus:ring-[#0066CC]/15'
                          }`}
                        />
                        {showError('mensaje') && (
                          <p
                            id="error-mensaje"
                            role="alert"
                            className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-[#DC2626]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>{formErrors.mensaje}</span>
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[12px] text-[#86868B]">
                          Atención personalizada en Maldonado y San Carlos.
                        </p>
                        <button
                          type="submit"
                          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#0066CC] px-7 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#0055B3] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]/35"
                        >
                          <span>Enviar consulta</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimalista estilo Apple */}
      <footer className="border-t border-[#D2D2D7]/80 bg-[#F5F5F7] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-[#D2D2D7]/80 pb-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5 text-[#1D1D1F]">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1D1D1F] text-white">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-[15px] font-semibold tracking-[-0.02em]">
                  {OFFICE_INFO.brand}
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-[1.55] text-[#6E6E73]">
                Treinta años de trayectoria inmobiliaria en el Departamento de Maldonado, acompañando ventas, alquileres y tasaciones reales.
              </p>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold text-[#1D1D1F]">Categorías</h3>
              <ul className="mt-3 space-y-2.5 text-[13px] text-[#6E6E73]">
                {['Casas', 'Apartamentos', 'Locales', 'Terrenos'].map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => applyFilterAndScroll({ type: cat, operation: 'Todas', zone: 'Todas' })}
                      className="transition-colors hover:text-[#1D1D1F] focus:outline-none focus-visible:underline"
                    >
                      {cat === 'Locales' ? 'Locales Comerciales' : cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold text-[#1D1D1F]">Operaciones y Zonas</h3>
              <ul className="mt-3 space-y-2.5 text-[13px] text-[#6E6E73]">
                <li>
                  <button
                    type="button"
                    onClick={() => applyFilterAndScroll({ operation: 'Venta', type: 'Todos', zone: 'Todas' })}
                    className="transition-colors hover:text-[#1D1D1F] focus:outline-none focus-visible:underline"
                  >
                    Propiedades en Venta
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => applyFilterAndScroll({ operation: 'Alquiler', type: 'Todos', zone: 'Todas' })}
                    className="transition-colors hover:text-[#1D1D1F] focus:outline-none focus-visible:underline"
                  >
                    Propiedades en Alquiler
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => applyFilterAndScroll({ zone: 'Maldonado', operation: 'Todas', type: 'Todos' })}
                    className="transition-colors hover:text-[#1D1D1F] focus:outline-none focus-visible:underline"
                  >
                    Maldonado
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => applyFilterAndScroll({ zone: 'San Carlos', operation: 'Todas', type: 'Todos' })}
                    className="transition-colors hover:text-[#1D1D1F] focus:outline-none focus-visible:underline"
                  >
                    San Carlos
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold text-[#1D1D1F]">Oficina Central</h3>
              <ul className="mt-3 space-y-2.5 text-[13px] text-[#6E6E73]">
                <li>{OFFICE_INFO.address}</li>
                <li>
                  Tel:{' '}
                  <a href={OFFICE_INFO.phoneHref} className="text-[#1D1D1F] hover:text-[#0066CC]">
                    {OFFICE_INFO.phone}
                  </a>
                </li>
                <li>Fax: {OFFICE_INFO.fax}</li>
                <li>
                  <a
                    href={OFFICE_INFO.emailHref}
                    className="break-all text-[#0066CC] hover:underline"
                  >
                    {OFFICE_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-2 text-[12px] text-[#86868B] sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {OFFICE_INFO.brand}. Todos los derechos reservados.
            </p>
            <p>{OFFICE_INFO.domain} · Maldonado, Uruguay</p>
          </div>
        </div>
      </footer>

      {/* Modal de Detalle y Repositorio de Fotos de la Propiedad (Estilo Apple) */}
      {selectedProperty && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            id="property-detail-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-property-title"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-[0_28px_80px_rgba(0,0,0,0.24)] sm:rounded-3xl"
          >
            {showAllPhotos ? (
              <div className="border-b border-[#E8E8ED] bg-[#F5F5F7] p-5 sm:p-7">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setShowAllPhotos(false)}
                      className="inline-flex min-h-[36px] shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#1D1D1F] shadow-sm transition-colors hover:bg-[#E8E8ED] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      <span>Volver al visor</span>
                    </button>
                    <span className="truncate text-[13px] font-medium text-[#6E6E73]">
                      <span className="hidden sm:inline">Repositorio de fotos</span>
                      <span className="sm:hidden">Fotos</span> ({selectedProperty.gallery.length})
                    </span>
                  </div>

                  <button
                    ref={modalCloseRef}
                    type="button"
                    onClick={() => setSelectedProperty(null)}
                    aria-label="Cerrar ficha de propiedad"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1D1D1F] shadow-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedProperty.gallery.map((photo, index) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => {
                        setActivePhotoIndex(index);
                        setShowAllPhotos(false);
                      }}
                      className={`group relative overflow-hidden rounded-2xl bg-white text-left transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]/40 ${
                        index === activePhotoIndex
                          ? 'ring-2 ring-[#0066CC]'
                          : 'ring-1 ring-[#D2D2D7]/80 hover:ring-[#86868B]'
                      }`}
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-[#E8E8ED]">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex items-center justify-between px-3.5 py-2 text-[12px] font-medium text-[#1D1D1F]">
                        <span>{photo.label}</span>
                        <span className="text-[#86868B]">
                          {index + 1} / {selectedProperty.gallery.length}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="relative h-56 w-full overflow-hidden bg-[#F5F5F7] sm:h-64">
                  <img
                    src={selectedProperty.gallery[activePhotoIndex]?.src}
                    alt={selectedProperty.gallery[activePhotoIndex]?.alt}
                    className="h-full w-full object-cover"
                  />

                  <button
                    ref={modalCloseRef}
                    type="button"
                    onClick={() => setSelectedProperty(null)}
                    aria-label="Cerrar ficha de propiedad"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1D1D1F] shadow-md backdrop-blur-md transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {selectedProperty.gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActivePhotoIndex(
                            (prev) =>
                              (prev - 1 + selectedProperty.gallery.length) %
                              selectedProperty.gallery.length
                          )
                        }
                        aria-label="Foto anterior"
                        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1D1D1F] shadow-md backdrop-blur-md transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]"
                      >
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActivePhotoIndex(
                            (prev) => (prev + 1) % selectedProperty.gallery.length
                          )
                        }
                        aria-label="Siguiente foto"
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1D1D1F] shadow-md backdrop-blur-md transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]"
                      >
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </>
                  )}

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />

                  <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 pr-14">
                    <span className="rounded-full bg-[#1D1D1F]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white backdrop-blur-md">
                      {selectedProperty.operation}
                    </span>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-[#1D1D1F] backdrop-blur-md">
                      {selectedProperty.type} · {selectedProperty.zone}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-black/65 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-md">
                      {activePhotoIndex + 1} / {selectedProperty.gallery.length} ·{' '}
                      {selectedProperty.gallery[activePhotoIndex]?.label}
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowAllPhotos(true)}
                      className="inline-flex min-h-[32px] items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-medium text-[#1D1D1F] shadow-sm backdrop-blur-md transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]"
                    >
                      <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Ver todas ({selectedProperty.gallery.length})</span>
                    </button>
                  </div>
                </div>

                {/* Tira de miniaturas del repositorio de fotos */}
                <div
                  aria-label="Galería de fotos de la propiedad"
                  className="flex items-center gap-2.5 overflow-x-auto border-b border-[#E8E8ED] bg-[#F5F5F7] px-5 py-2.5 sm:px-7"
                >
                  {selectedProperty.gallery.map((photo, index) => {
                    const isActive = index === activePhotoIndex;
                    return (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setActivePhotoIndex(index)}
                        aria-label={`Ver foto ${index + 1}: ${photo.label}`}
                        aria-current={isActive ? 'true' : undefined}
                        className={`group relative h-12 w-20 shrink-0 overflow-hidden rounded-xl bg-[#E8E8ED] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] sm:h-14 sm:w-24 ${
                          isActive
                            ? 'ring-2 ring-[#0066CC] ring-offset-2 ring-offset-[#F5F5F7]'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.label}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            <div className="p-5 sm:p-7">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#6E6E73]">
                    <MapPin className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                    <span>{selectedProperty.location}</span>
                  </div>
                  <h3
                    id="modal-property-title"
                    className="mt-1 text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1D1D1F] sm:text-[26px]"
                  >
                    {selectedProperty.title}
                  </h3>
                </div>

                <div className="shrink-0 sm:text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#86868B]">
                    Valor de {selectedProperty.operation}
                  </p>
                  <p className="text-[24px] font-semibold tracking-[-0.02em] text-[#1D1D1F] sm:text-[26px]">
                    {selectedProperty.price}
                    {selectedProperty.priceSuffix && (
                      <span className="ml-1 text-[14px] font-normal text-[#86868B]">
                        {selectedProperty.priceSuffix}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Especificaciones en tarjetas compactas */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {selectedProperty.bedrooms !== null && (
                  <div className="rounded-2xl bg-[#F5F5F7] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#86868B]">
                      Dormitorios
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-[#1D1D1F]">
                      <BedDouble className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                      {selectedProperty.bedrooms}
                    </p>
                  </div>
                )}
                {selectedProperty.bathrooms !== null && (
                  <div className="rounded-2xl bg-[#F5F5F7] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#86868B]">
                      Baños
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-[#1D1D1F]">
                      <Bath className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                      {selectedProperty.bathrooms}
                    </p>
                  </div>
                )}
                {selectedProperty.area && (
                  <div className="rounded-2xl bg-[#F5F5F7] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#86868B]">
                      Superficie
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-[#1D1D1F]">
                      <Maximize2 className="h-4 w-4 text-[#86868B]" aria-hidden="true" />
                      {selectedProperty.area}
                    </p>
                  </div>
                )}
                {selectedProperty.extraFeature && (
                  <div className="rounded-2xl bg-[#F5F5F7] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#86868B]">
                      Destacado
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-[#1D1D1F]">
                      {selectedProperty.extraFeature}
                    </p>
                  </div>
                )}
              </div>

              <p className="mt-5 text-[15px] leading-[1.55] text-[#424245]">
                {selectedProperty.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProperty.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1 text-[12px] font-medium text-[#1D1D1F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-[#E8E8ED] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={OFFICE_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#D2D2D7] px-5 py-2.5 text-[14px] font-medium text-[#1D1D1F] transition-colors hover:bg-[#F5F5F7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]"
                >
                  <Phone className="h-4 w-4 text-[#0066CC]" aria-hidden="true" />
                  <span>Llamar ({OFFICE_INFO.phone})</span>
                </a>

                <button
                  type="button"
                  onClick={() =>
                    openContactWithContext(
                      `${selectedProperty.title} (${selectedProperty.operation} · ${selectedProperty.price})`,
                      `Hola, me interesa recibir más información y coordinar una visita por "${selectedProperty.title}" (${selectedProperty.operation}, ${selectedProperty.price}).`
                    )
                  }
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#0066CC] px-6 py-2.5 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#0055B3] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066CC]/35"
                >
                  <span>Consultar por esta propiedad</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
