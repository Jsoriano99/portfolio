// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Amazon Product Scraper',
    shortDescription:
      'Scraper en Python y Playwright para extraer precios, stock, valoraciones y número de reseñas de productos de Amazon. Pensado para monitorizar productos y estudiar la competencia.',
    cover:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop',
    livePreview: '#',
    type: 'Data Scraping 📦',
    siteAge: 'Personal project',
    visitors: 'Uso interno',
    earned: 'Usado como base en proyectos de clientes',
  },
  {
    priority: 2,
    title: 'E-commerce Price & Stock Monitor',
    shortDescription:
      'Sistema que monitoriza precios y stock en varias tiendas online, guarda histórico y permite generar alertas cuando hay cambios importantes.',
    cover:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    livePreview: '#',
    type: 'Automation ⚙️',
    siteAge: 'New',
    visitors: 'N/A',
    earned: 'Orientado a pequeños e-commerce',
  },
  {
    priority: 3,
    title: 'Social Media Data Collector',
    shortDescription:
      'Herramienta para recopilar comentarios, métricas y engagement de plataformas como TikTok o Reddit, preparada para análisis de contenido y marketing.',
    cover:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    livePreview: '#',
    type: 'Data 📊',
    siteAge: 'New',
    visitors: 'N/A',
    earned: 'Útil para creadores y agencias',
  },
  {
    priority: 4,
    title: 'Local Business Automation Suite',
    shortDescription:
      'Sistema que automatiza tareas de pequeños negocios: extracción de datos de proveedores, actualización automática de precios y envío diario de reportes a Google Sheets y WhatsApp.',
    cover:
      'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2070&auto=format&fit=crop',
    livePreview: '#',
    type: 'Automation 🔄',
    siteAge: 'New',
    visitors: 'N/A',
    earned: 'Prototipo listo para clientes locales',
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Nest.js',
    icon: NestjsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
