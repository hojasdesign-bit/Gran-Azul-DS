# Gran Azul DS

Sistema de diseño de **Gran Azul** para envíos, compras, trámites legales y viajes a Cuba.

**No es un proyecto crypto.** No hay monedas, wallets, intercambios ni mercado crypto en este sistema.
Su estructura parte de un sistema genérico (React + Storybook), adaptada con los tokens propios
de Gran Azul y con historias en español sobre envíos a Cuba, oficinas en EE. UU. y rastreo de envíos.

## Marca

- Marca: `#0075A7`
- Cian: `#13C1DF`
- CTA azul: `#0F6FC4`
- Noche: `#071D2F` / `#0A2A45`
- Fondo pálido: `#F4F8FB`
- Tipografía: **DM Sans** (Google Fonts)
- Tokens con prefijo `--ga-*` en `src/tokens.css`
- Texto: display 48, H2 28, H3 24, H4 20, cuerpo 16/1.5
- Tema claro por defecto, tema oscuro disponible

## Uso

```bash
npm install
npm run storybook
npm run build-storybook
```

El logo de marca está en `public/logo.svg` (archivo enviado por el usuario en este proyecto).
Versiones derivadas de ese archivo, en `public/logo/`:
- Completo (símbolo + «Gran Azul» + lema): `gran-azul-completo.svg`
- Isotipo solo (símbolo, 3 trazados): `gran-azul-isotipo.svg`
- Logotipo solo (solo el texto «Gran Azul», 8 trazados): `gran-azul-logotipo.svg`
- Cada una en monocromo noche `#071D2F`, blanco `#FFFFFF`, azul `#0075A7` y cian `#13C1DF`
  (`gran-azul-<versión>-mono-<noche|blanco|azul|cian>.svg`).
- Favicon: `public/favicon.svg`, isotipo blanco sobre cuadrado azul `#0075A7` redondeado,
  referenciado en `index.html` (antes el favicon era el logo completo, demasiado ancho para una pestaña).

## Iconos

Fuente única: [HugeIcons](https://hugeicons.com/icons), estilo **Stroke Rounded**
(el set gratuito, `@hugeicons/core-free-icons`, rejilla 24×24).

- **Estilo:** Stroke Rounded, siempre. No mezclar Sharp, Standard, Solid,
  Duotone ni Bulk en el mismo conjunto. Solid solo como excepción para
  un estado relleno (favorito activo, estrella), nunca como estilo general.
- **Grosor:** `stroke-width="1.8"` en todos los iconos de interfaz, a
  cualquier tamaño. Es el grosor mayoritario que ya usa el DS y el que
  mejor se lee a 16-20 px sobre fondo claro y oscuro. (El valor por
  defecto de HugeIcons es 1.5: al copiar un SVG hay que cambiarlo a 1.8.)
- **Color y relleno:** `stroke="currentColor"`, `fill="none"`,
  `stroke-linecap="round"`, `stroke-linejoin="round"`, para que el icono
  herede el color del texto que lo acompaña.
- **Tamaños de uso:** 16 px (botones y texto pequeño), 20 px (controles
  y campos) y 24 px (navegación, tarjetas y cabeceras). Copiar el SVG en
  línea en el proyecto, nunca enlazado en caliente.
- **En código:** componente `Icon` (`src/components/Icon/`), con los
  datos del paquete oficial gratuito `@hugeicons/core-free-icons`
  (dependencia del proyecto) normalizados a 1.8 y `currentColor`.
  La historia `Gran Azul/Icon` define la regla en Storybook con la
  galería completa y los tres tamaños. Los componentes nuevos usan
  `Icon` donde toca (búsqueda en TrackingSearch, estrella en
  QuoteOptions, flecha en FeaturedDestinations).
- **Excepciones vigentes:** unos pocos glifos usan grosores distintos
  por legibilidad (cierres y checks a 2-2.2); al tocar esos componentes,
  normalizarlos a 1.8 salvo que el glifo se pierda a ese grosor.

## Contenido demo

Las historias usan solo hechos del home de Gran Azul: las 4 soluciones, más de 15 oficinas
en EE. UU. y los pasos del envío (Recogido / En tránsito / En Cuba / Entregado).
La calculadora de envío muestra su resultado como **ejemplo demo** y dice explícitamente
que no son tarifas reales de Gran Azul. No se inventan testimonios, cifras de clientes
ni redes sociales reales.
