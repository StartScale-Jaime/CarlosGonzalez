# ⚡ MVP Requirements Template (Speed-Optimized + Design-First)

> **Goal**: Build your MVP in 24-48 hours. This template is optimized for rapid development with **STUNNING VISUAL DESIGN** that makes users fall in love at first sight.

## 🎨 **DESIGN-FIRST PHILOSOPHY:**
**Your MVP should be visually STUNNING. Users must be impressed by the design before even using the features.**
**You decide wich complex functionality you mock,if you do it create a README.md that explains why and what.**

- 🎯 **Design > Complex Logic** - Simple functionality with beautiful UI beats complex features with poor design
- No cargar demasiado la vista, tiene que ser legible y que no duela a los ojos
- 👁️ **Visual Impact Priority** - Users should "eat the page with their eyes"
- ✨ **Modern, Professional Look** - Every element should feel polished and intentional
- 📱 **Mobile-First Excellence** - Looks amazing on all devices

## 📋 **HOW TO USE THIS TEMPLATE:**

### **✅ For Checkboxes:**
- **Mark with X**: `- [X] Option I want` 
- **Leave unmarked**: `- [ ] Option I don't want`

### **📝 For Placeholders:**
- **Replace completely**: `[Your MVP Name]` → `TaskMaster Pro`
- **Replace everything inside brackets**: `[What does it do?]` → `Helps teams track project deadlines`

### **💡 Example:**
**BEFORE:**
```
- MVP Name: `[Your MVP Name]`
- [ ] 🛍️ E-commerce/Marketplace
- [ ] 📊 Dashboard/Analytics
```

**AFTER:**
```
- MVP Name: `TaskMaster Pro`
- [ ] 🛍️ E-commerce/Marketplace  
- [X] 📊 Dashboard/Analytics
```

---

## 🎯 Project Essentials

### **Project Identity**
- **MVP Name**: EuroTraveñ
- **One-Line Description**: Un pronosticador rápido de viajes para que un usuario pueda tener una idea de a cuánto le puede salir en total (incluyendo desplazamiento, alojamiento, comidas…)
- **Problem**: El proceso tedioso de tener que estar yendo destino por destino para ver cual es el precio sumando todo

### **Target Users** ⚡ *This helps Claude choose perfect colors & design*
- **Primary User**: Cualquier persona que desee viajar
- **User Vibe**: Calmada y relajada, que se va de vacaciones

### **MVP Category** ⚡ *Pick ONE*
- [ ] 🛍️ E-commerce/Marketplace
- [ ] 📊 Dashboard/Analytics
- [X] 🏢 SaaS Tool
- [ ] 📝 Content/Blog Platform
- [ ] 🗓️ Booking/Scheduling
- [ ] 👥 Social/Community
- [ ] 📄 Landing Page + Signup
- [ ] 🔧 Other: `[Specify]`

---

## 🚀 Core Features (MAX 5) - KEEP IT SIMPLE!

> **🚨 CRITICAL**: List ONLY the absolute essentials. **NO COMPLEX LOGIC NEEDED IN MVP!**> 

> **Focus on**: Basic CRUD operations, simple forms, display data beautifully
> **Avoid**: Complex algorithms, advanced workflows, intricate business logic

### **✅ Good MVP Features:**
- User can create/edit/delete items
- Display data in beautiful cards/lists
- Simple search/filter
- Basic user profiles
- Email notifications

### **❌ Save for Later (NOT in MVP):**
- Complex calculations
- Advanced permissions
- Multi-step workflows  
- Payment processing
- Advanced integrations

**Your 5 Simple Features:**
El usuario solo debe introducir una poca información para poder saber que opciones tiene para un presupuesto concreto
El usuario debe poder saber que opciones de hoteles y viajes tiene que se ajusten a su presupuesto
El usuario debe poder calcular el presupuesto que la quedando.
Base de datos falsa, para tres paises. Francia, España, Andorra. 
El usuario debe poder buscar opcion de viaje para el pais destino y origen concreto y dia concreto
1. **Añadir presupuesto**: El usuario debe poder añadir su presupuesto y que se vaya restando segun opcion escoja 
2. **Añadir viajes**: El usuario debe poder añadir viajes boton de escoger destino y origen y que le aparezca horarios y que escoja. 
3. **Añadir comidas**: El usuario debe poder visualizar cual es la media de la comida que hay en el pais que escoja. Debe haber tres niveles, alto medio y bajo.
4. **Añadir alojamiento**: El usuario debe poder escoger alojamiento del pais que escoja. Debe haber dos opciones hostal, hotel calidad media o hotel calidad alta. El programa pone la media en ese pais y una foto y el cliente escoge
5. **Presupuesto dinamico**: Cada vez que se escoge comida, alojamiento o viaje, el usuario debe poder ver el presupuesto bajando y una lista de costes que han reducido ese presupuesto. el usuario debe poder cambiar el presupuesto inicial dinamicamente.

TOdo viaje alojamiento y comida debe mostrarse en tarhjetas bonitas y con fotos. No sobrecargar demasiado.

### **Primary User Journey** 🛤️
```
Landing Page → Pagina de calculos 
```

---

## 👤 Users & Authentication

### **Authentication Type** ⚡ *Pick ONE*
- [X] 🚫 No auth needed (public app)
- [ ] 📧 Email + Password (simple)
- [ ] 🔗 Magic Link (passwordless)
- [ ] 🔐 Google OAuth (fastest signup)

### **User Types** ⚡ *Pick ONE*
- [X] Single user type (everyone same permissions)
- [ ] Two types: `[Type 1]` and `[Type 2]`
- [ ] Admin + Users (admin can manage everything)

---

## 🗃️ Data Structure (SIMPLE ONLY!)

> **Keep database design SIMPLE. Complex relationships = slower development.**

### **Main Data Objects**
> What does your app store? Maximum 3 objects for MVP.


**Object 1: Alojamientos**
```
- pais: string
- precio medio: number
```

**Object 2: Comidas**
```
- pais: string
- precio medio: number
- calidad/opiniones: number
```

**Object 3: Desplazamientos (if needed)**
```
- pais origen
- pais destino
- horario
```
---

## 🎨 Design & UI (VISUAL IMPACT PRIORITY!)

> **🚨 MOST IMPORTANT SECTION - This is what makes users fall in love!**

### **Visual Style Direction** ⚡ *Pick ONE - This defines everything!*
- [X] 🎯 **Clean & Minimal** (Apple-style, lots of white space)
- [ ] 💼 **Professional/Corporate** (LinkedIn, Notion style)
- [ ] 🎨 **Modern/Trendy** (Figma, Dribbble style)
- [ ] 🌙 **Dark Mode** (GitHub, Discord style)
- [ ] 🌈 **Colorful & Vibrant** (Spotify, Slack style)
- [ ] ✨ **Luxury/Premium** (Tesla, Apple style)


### **Visual Priorities** ⚡ *Check ALL that apply*
- [X] **Hero section must be STUNNING** (big impact on landing)
- [X] **Beautiful typography** (modern fonts, proper hierarchy)
- [X] **Professional photography/illustrations** (high-quality visuals)
- [X] **Smooth animations** (subtle hover effects, transitions)
- [X] **Perfect spacing** (generous white space, breathing room)
- [X] **Color harmony** (cohesive color palette throughout)
- [X] **Mobile-first perfection** (looks amazing on phones)
- [X] **NO SOBRECARGAR CON EFECTOS ANIMACIONES QUE SEA LEGIBLE**

### **Component Strategy** ⚡ *Auto-Selected for Beauty + Speed*
- ✅ **Shadcn/UI Components** (pre-built, beautiful)
- ✅ **TailwindCSS** (rapid styling)
- ✅ **Framer Motion** (smooth animations)
- ✅ **Lucide Icons** (consistent iconography)
- ✅ **Inter/Geist Font** (modern typography)

### **Colors & Visual Effects** ⚡ *Auto-Selected by Claude*
> **Claude will automatically choose the perfect color palette and visual effects based on:**
> - Your target users (professional, young, creative, etc.)
> - Your MVP category (SaaS, e-commerce, social, etc.)
> - Your chosen visual style direction
> 
> ✅ **No need to pick colors manually** - Claude knows what works best!

---

## 📱 Pages & Structure

### **Required Pages** ⚡ *List ALL pages*
1. **Landing**: Landing, con boton que te direcciona a calculos
2. **Pagina de calculos**: El usuario introduce su presupuesto y empieza a calcular con opciones

### **Navigation** 
```
Header:  Calcula tu viaje
```

### **Homepage Must-Haves** ⚡ *For Visual Impact*
- [ ] **Stunning hero section** (large headline, beautiful visual)
- [X] **Clear value proposition** No pierdas tiempo planificando, hazlo en 15 minutos usando EuroTravel
- [ ] **Beautiful feature showcase** (3-4 main benefits with icons/images)
- [ ] **Social proof** (testimonials, logos, stats)
- [X] **Strong call-to-action** calcula tu viaje

---

## ⚡ Tech Stack (Speed + Beauty Optimized)

### **Frontend** ⚡ *Auto-Selected for Beautiful UIs*
- ✅ **Next.js 15** (React framework)
- ✅ **TypeScript** (type safety)
- ✅ **TailwindCSS** (rapid styling)
- ✅ **Shadcn/UI** (beautiful components)
- ✅ **Framer Motion** (animations)

### **Database** ⚡ *Auto-Selected for Speed*
- ✅ **Supabase** (PostgreSQL + Auth + Real-time)
- ✅ **Instant setup, zero config**

### **Key Integrations** ⚡ *Check if needed*
- [ ] 💳 **Stripe** (payments)
- [ ] 📧 **Resend** (emails) 
- [ ] 📷 **Cloudinary** (image uploads)
- [ ] 📈 **Vercel Analytics** (tracking)
- [ ] 🔍 **Algolia** (search)

### **Deployment** ⚡ *Auto-Selected*
- ✅ **Vercel + GitHub** (automatic deployments)

---

## 📧 Communications

### **Email Needs** ⚡ *Check what's needed*
- [ ] Welcome email
- [ ] Password reset
- [ ] Notifications
- [ ] Marketing emails

### **Notifications**
- [ ] Success/error messages (beautiful toast notifications)
- [ ] Email notifications
- [ ] Real-time updates

---

## 💼 Business Logic (KEEP SIMPLE!)

> **🚨 REMEMBER: Simple logic = faster development = better design focus**

### **Key Rules** (if any - MAX 3 simple rules)
1. No se puede escoger el mismo viaje dos veces, que ponga cantidad para escoger

### **Special Features** ⚡ *Check if needed (keep simple!)*
- [X] Search/Filter (basic text search only)
- [ ] File uploads (drag & drop with progress)
- [ ] Real-time updates (simple live data)
- [ ] Export data (CSV download)
- [ ] Email notifications (simple triggers)

### **🚫 NOT in MVP (Save for V2):**
- ❌ Complex calculations
- ❌ Advanced permissions/roles
- ❌ Multi-step workflows
- ❌ Payment processing
- ❌ Advanced integrations
- ❌ Complex business rules

---

## 🎯 Success & Analytics

### **What Makes This MVP Successful?**
- Success Metric 1: El cliente pueda calcular su viaje sin problemas, con interfaz bonita y clara.

---

## 📝 Context & References

### **Additional Context**
```
[Anything else I should know? Special requirements? Constraints?]
```

### **Design Inspiration** ⚡ *REQUIRED*
- Primary design reference: `[URL of website you love]`
- Secondary reference: `[URL of another beautiful site]`
- Color inspiration: `[URL or description]`

### **Timeline**
- Target Launch: `[Date or "ASAP"]`
- Priority Level: `[High/Medium/Low]`

---

## 🤖 Instructions for Claude

**When building this MVP, Claude should:**

### **🎨 DESIGN PRIORITIES (MOST IMPORTANT!):**
- [ ] ✅ **Visual impact is priority #1** - Make it stunning
- [ ] ✅ **Spend extra time on homepage design** - First impression is everything
- [ ] ✅ **Use modern design patterns** - Gradients, shadows, beautiful typography
- [ ] ✅ **Mobile-first responsive** - Perfect on all screen sizes
- [ ] ✅ **Smooth animations** - Subtle hover effects and transitions
- [ ] ✅ **Professional imagery** - High-quality photos/illustrations
- [ ] ✅ **Smart color selection** - Choose perfect palette based on target users & app type
- [ ] ✅ **Intelligent visual effects** - Select appropriate gradients, shadows, etc. automatically

### **💻 TECHNICAL APPROACH:**
- [ ] ✅ **Generate complete, production-ready code**
- [ ] ✅ **Include all necessary imports and dependencies**
- [ ] ✅ **Add beautiful loading states and error handling**
- [ ] ✅ **Create responsive design with mobile-first approach**
- [ ] ✅ **Include TypeScript types for all data structures**
- [ ] ✅ **KEEP LOGIC SIMPLE** - Focus on basic CRUD operations

### **🚫 WHAT NOT TO BUILD:**
- ❌ **Complex business logic** - Keep it simple!
- ❌ **Advanced features** - Basic functionality only
- ❌ **Over-engineering** - MVP means minimal viable product

---

## ✅ Pre-Submission Checklist

**Before sending this to Claude:**

- [ ] Project name and description completed
- [ ] **TARGET USERS DESCRIBED** (Primary user + desired vibe)
- [ ] MVP category selected  
- [ ] Core features listed (MAX 5, SIMPLE ONLY)
- [ ] User journey mapped out
- [ ] Authentication type chosen
- [ ] Data structure defined (SIMPLE)
- [ ] **DESIGN INSPIRATION PROVIDED** (This is critical!)
- [ ] **VISUAL STYLE SELECTED** (Clean/Corporate/Modern/etc.)
- [ ] Required pages listed
- [ ] Integration needs checked
- [ ] Business rules specified (MAX 3, SIMPLE ONLY)

## 📤 **HOW TO SUBMIT:**

### **Step 1: Complete the Template**
- Replace ALL `[placeholders]` with your actual content
- Mark checkboxes with `[X]` for selected options
- **ESPECIALLY focus on the DESIGN section** - this is most important!
- Delete unused optional sections if not needed

### **Step 2: Review Design Requirements**
- Make sure you've provided design inspiration URLs
- Ensure your visual style direction is selected
- Confirm your target users are clearly described

### **Step 3: Send to Claude**
Copy and paste the ENTIRE completed template in your message to Claude, along with:
```
"Hi Claude, please build this MVP based on the template below. 

IMPORTANT: Focus heavily on making this visually STUNNING - the design should make users fall in love at first sight. Keep the logic simple but make the UI/UX exceptional.

[PASTE YOUR COMPLETED TEMPLATE HERE]
```

### **❌ Don't Send:**
- Incomplete design section (most important!)
- Templates with `[placeholders]` still showing
- Vague features like "user management" (be specific!)
- Complex business logic requirements

### **✅ Do Send:**
- **Complete design inspiration and target user description**
- Fully completed template with specific details
- Clear, simple feature descriptions  
- Single choices made for all "Pick ONE" sections

---

## 🚀 Speed + Beauty Optimization Notes

**This template prioritizes:**
- 🎨 **STUNNING VISUAL DESIGN** (users fall in love immediately)
- ⚡ **Fastest development** (24-48 hours)
- 🛠️ **Proven tech stack** (Next.js + Supabase + Vercel)
- 🎯 **Simple logic only** (complex features slow down MVPs)
- 📦 **Beautiful pre-built components** (Shadcn/UI + Framer Motion)
- 🔄 **Zero configuration** (sensible defaults)

**Result**: Your MVP launches faster, looks AMAZING, and makes users want to use it! 

**Remember**: Beautiful design + simple functionality > Complex features + poor design 