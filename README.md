# 🔥 Alessio V3ntas FF

Web de venta de cuentas premium de Free Fire. Skins legendarias, armas exclusivas y entrega inmediata por WhatsApp.

## ✨ Características

- Diseño moderno, dark mode con gradientes (morado/rosa/azul)
- 100% responsivo (móvil, tablet, desktop)
- Catálogo de cuentas con precios y botón directo a WhatsApp
- Testimonios, FAQ acordeón, sección de métodos de pago
- Cursor glow animado, scroll reveal, contadores animados
- SEO optimizado (meta tags, Open Graph)
- Sin frameworks, HTML + CSS + JS vanilla → súper rápido
- Cero dependencias, deploy instantáneo en Vercel

## 📁 Estructura

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
├── vercel.json
├── .gitignore
└── README.md
```

## 🚀 Deploy en Vercel (con GitHub)

### 1. Sube el código a GitHub

```bash
cd "ventas de ff"
git init
git add .
git commit -m "feat: initial commit - Alessio V3ntas FF"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/alessio-v3ntas-ff.git
git push -u origin main
```

### 2. Conecta con Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Click en **"Add New Project"**
3. Selecciona el repo `alessio-v3ntas-ff`
4. Vercel detecta automáticamente que es un sitio estático
5. Click en **"Deploy"**

¡Listo! En menos de 1 minuto tendrás tu web en `https://alessio-v3ntas-ff.vercel.app`

### 3. Deploy automático

Cada vez que hagas `git push` a `main`, Vercel redespliega automáticamente.

```bash
git add .
git commit -m "update: nuevos precios"
git push
```

## ⚙️ Configuración importante

### Cambiar número de WhatsApp

Edita `js/main.js`, línea 9:

```js
const WHATSAPP_NUMBER = '51999999999'; // tu número con código de país, sin +
```

### Cambiar dominio personalizado

En Vercel: **Settings → Domains → Add** y configura tu dominio (`ventasff.com`, etc).

## 🛠️ Personalización

| Archivo         | Qué editar                                          |
| --------------- | --------------------------------------------------- |
| `js/main.js`    | Número de WhatsApp                                  |
| `index.html`    | Precios, descripciones, testimonios, FAQs           |
| `css/styles.css`| Colores (variables en `:root`), tipografías, layout |

## 📱 Contacto

- WhatsApp: [Configurar en `js/main.js`](#cambiar-número-de-whatsapp)

---

Hecho con ♥ por Alessio V3ntas FF
