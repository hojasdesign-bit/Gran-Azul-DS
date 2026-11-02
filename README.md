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

## Contenido demo

Las historias usan solo hechos del home de Gran Azul: las 4 soluciones, más de 15 oficinas
en EE. UU. y los pasos del envío (Recogido / En tránsito / En Cuba / Entregado).
La calculadora de envío muestra su resultado como **ejemplo demo** y dice explícitamente
que no son tarifas reales de Gran Azul. No se inventan testimonios, cifras de clientes
ni redes sociales reales.
