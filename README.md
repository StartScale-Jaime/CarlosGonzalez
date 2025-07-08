# 🌍 EuroTraveñ - MVP de Calculadora de Viajes

> **Planifica tu viaje por Europa en 15 minutos**

Un pronosticador rápido de viajes que ayuda a los usuarios a obtener una idea completa del costo total de su viaje, incluyendo transporte, alojamiento y comidas.

## 🎯 Problema Solucionado

Elimina el proceso tedioso de ir destino por destino calculando precios manualmente. Con EuroTraveñ, obtienes un presupuesto completo en minutos.

## ✨ Características Principales

### 🚀 **Funcionalidades Implementadas**

1. **💰 Gestión de Presupuesto Dinámico**
   - Input de presupuesto inicial editable
   - Cálculo automático en tiempo real
   - Visualización de presupuesto restante
   - Alertas visuales cuando se excede el presupuesto

2. **🗺️ Selección de Países**
   - Países disponibles: España 🇪🇸, Francia 🇫🇷, Andorra 🇦🇩
   - Selección de origen y destino
   - Validación de rutas disponibles

3. **✈️ Opciones de Transporte**
   - Múltiples tipos: Avión, Tren, Autobús
   - Precios reales estimados
   - Horarios y compañías
   - Duración del viaje

4. **🏨 Alojamiento**
   - 3 categorías: Hostel, Hotel Medio, Hotel Lujo
   - Precios por noche
   - Descripciones detalladas
   - Iconografía diferenciada

5. **🍽️ Comidas**
   - 3 niveles: Económico, Medio, Alto
   - Precios promedio por día
   - Descripción de opciones gastronómicas
   - Codificación por colores

6. **📊 Resumen de Selecciones**
   - Lista de elementos seleccionados
   - Cantidades editables
   - Precios individuales y totales
   - Opción de eliminar elementos

### 🎨 **Diseño y UX**

- **Diseño Clean & Minimal** (estilo Apple)
- **Mobile-First** completamente responsivo
- **Animaciones suaves** con Framer Motion
- **Gradientes modernos** y efectos visuales
- **Tipografía profesional** con Inter
- **Iconografía consistente** con Lucide React
- **Estados de carga** y feedback visual

### 🛠️ **Stack Tecnológico**

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Estilos**: TailwindCSS v4 + Shadcn/UI
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuentes**: Inter (Google Fonts)

## 🔧 **Funcionalidades Mockeadas** 

*Como se especifica en el template, algunas funcionalidades complejas fueron simuladas para acelerar el desarrollo:*

### ❌ **No Implementado (Por Simplicidad del MVP)**

1. **💳 Pagos Reales**
   - No hay integración con pasarelas de pago
   - Los precios son estimaciones
   
2. **🗄️ Base de Datos Real**
   - Datos hardcodeados en archivos TypeScript
   - No hay persistencia de datos
   - No hay API backend

3. **👤 Autenticación**
   - No hay login/registro (según especificación)
   - Aplicación completamente pública

4. **📧 Reservas y Confirmaciones**
   - No hay sistema de reservas
   - No se envían emails de confirmación

5. **🔍 Búsqueda Avanzada**
   - Búsqueda limitada a los 3 países
   - Sin filtros de fecha o disponibilidad real

6. **💱 Conversión de Monedas**
   - Solo muestra precios en EUR
   - No hay conversión dinámica

### ✅ **Por Qué Estas Decisiones**

- **Velocidad de desarrollo**: MVP funcional en 24-48 horas
- **Enfoque en UX**: Priorizar diseño hermoso sobre lógica compleja
- **Validación de concepto**: Probar la idea antes de invertir en infraestructura
- **Feedback rápido**: Lanzar rápido para obtener feedback de usuarios

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]
cd eurotraven

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
npm start
```

### Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── calculator/         # Página de calculadora
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Landing page
├── components/             # Componentes reutilizables
│   └── ui/                 # Componentes UI base
└── lib/                    # Utilidades y datos
    ├── data.ts             # Base de datos mock
    └── utils.ts            # Funciones utilitarias
```

## 🎨 Decisiones de Diseño

### Paleta de Colores
- **Primario**: Azul (#3b82f6) - Confianza y profesionalismo
- **Secundario**: Gris neutro - Legibilidad y elegancia
- **Acentos**: Verde (presupuesto positivo), Rojo (exceso de presupuesto)

### Tipografía
- **Inter**: Fuente moderna y legible en todos los tamaños
- **Jerarquía clara**: Tamaños diferenciados para mejor legibilidad

### Componentes
- **Cards elevadas**: Sombras sutiles y hover effects
- **Botones con gradientes**: Visual impact y feedback
- **Espaciado generoso**: Breathing room para mejor UX

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botones y targets de 44px mínimo

## 🌟 Próximos Pasos (V2)

1. **Base de datos real** con Supabase
2. **Autenticación de usuarios**
3. **Sistema de reservas**
4. **Más países europeos**
5. **Integración con APIs de viajes**
6. **Notificaciones push**
7. **Exportar itinerarios a PDF**

## 📊 Métricas de Éxito

- **Tiempo de cálculo**: < 15 minutos
- **Facilidad de uso**: Interfaz intuitiva sin manual
- **Diseño atractivo**: "Wow factor" al entrar

## 🤝 Contribuir

Este es un MVP de demostración. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**🚀 ¡EuroTraveñ hace que planificar viajes sea rápido, fácil y hermoso!**

