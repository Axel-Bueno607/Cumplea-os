# 🧪 GUÍA DE PRUEBAS - REGALO DIGITAL

## Cómo Probar el Proyecto

### Opción 1: Abrir directamente en el navegador
1. Navega a: `C:\Users\AxelH\Downloads\cumple\`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

### Opción 2: Usar Visual Studio Code
1. Abre la carpeta en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server" (si tienes la extensión)

---

## ✅ CHECKLIST DE PRUEBAS

### Sección: Bienvenida
- [ ] Texto "Feliz Cumpleaños" visible y legible
- [ ] Párrafo con mensaje personalizado
- [ ] Botón "Comenzar" visible
- [ ] Hover del botón eleva el elemento (-4px)
- [ ] Hover muestra shimmer effect en el botón

### Sección: Tarjeta
- [ ] Transición suave desde bienvenida (fade + scale)
- [ ] Mensaje "Hay un regalo esperándote" visible
- [ ] Botón "Abrir regalo" funciona
- [ ] Hover similar al botón anterior

### Sección: Regalo (La Caja)
- [ ] Caja visible con color gradiente rosa
- [ ] Tapa tiene más claridad que la base (profundidad)
- [ ] Al hacer clic en "Abrir regalo":
  - [ ] La tapa se abre rotando desde la esquina inferior izquierda
  - [ ] La apertura es suave y elegante (NO brusca)
  - [ ] La rotación es visible en 3D (perspectiva)
  - [ ] Aparece un brillo elegante que pulsea

### Sección: Ramo (Construcción Paso a Paso)
Después de abrir la caja:
- [ ] **Papel**: Aparece primero (parte blanca/rosa)
- [ ] **Tallo**: Aparece verde abajo del papel
- [ ] **Hojas**: Dos hojas verdes en ángulos distintos
- [ ] **Flores 1-5**: Aparecen una por una en orden
  - [ ] Flor 1 (arriba izquierda) - blanca con centro amarillo
  - [ ] Flor 2 (izquierda) - naranja con centro naranja claro
  - [ ] Flor 3 (centro) - púrpura con centro lavanda
  - [ ] Flor 4 (derecha) - rosa claro con centro muy claro
  - [ ] Flor 5 (arriba derecha) - rosa coral con centro melocotón
- [ ] **Moño**: Aparece al final en rosa
- [ ] Cada elemento sube desde abajo con efecto bounce en flores
- [ ] Las flores tienen rotaciones distintas (NO todas iguales)
- [ ] Las flores tienen escalas ligeramente diferentes (NO todas del mismo tamaño)
- [ ] Botón "Ver próximo detalle" aparece después del moño

### Sección: Ramo Terminado
- [ ] El ramo se mueve muy sutilmente (brisa)
  - [ ] Movimiento es casi imperceptible
  - [ ] NO es exagerado
  - [ ] Dura aproximadamente 5 segundos el ciclo completo
- [ ] Pétalos pequeños caen continuamente
  - [ ] Aparecen desde el borde superior
  - [ ] Caen lentamente
  - [ ] Cada pétalo tiene velocidad, tamaño y ángulo distintos
  - [ ] Se desvanecen al llegar al fondo
  - [ ] NO hay acumulación de pétalos en el DOM

### Sección: Carta
Al hacer clic en "Ver próximo detalle":
- [ ] La sección regalo desaparece suavemente
- [ ] La carta aparece con animación fade-up
  - [ ] Sube desde abajo con opacidad 0 → 1
  - [ ] Duración aprox 700ms
  - [ ] Muy suave y elegante
- [ ] Título "Feliz Cumpleaños" visible
- [ ] El texto se escribe letra por letra
  - [ ] No aparece todo de golpe
  - [ ] Se escribe con pequeñas pausas (typewriter)
  - [ ] Hay un cursor parpadeante al final mientras escribe
  - [ ] El cursor desaparece cuando termina
- [ ] Velocidad de escritura es cómoda (no demasiado rápido)
- [ ] Mensaje completo:
  > "Que este día esté lleno de risas, abrazos y momentos bonitos. Gracias por ser especial y por dejarme compartir este pequeño regalo contigo."

### Sección: Final
- [ ] Después de ~5.6 segundos la carta desaparece
- [ ] Aparece la sección final
- [ ] Mensaje de despedida visible
- [ ] Transición es suave

---

## 📱 PRUEBAS DE RESPONSIVE

### Dispositivos a Probar:

#### Ultra Móvil (320px - iPhone SE)
- [ ] Abre DevTools (F12)
- [ ] Selecciona "Mobile" y elige "iPhone SE"
- [ ] Verifica que:
  - [ ] Todo es legible
  - [ ] Botones tienen buen tamaño para tocar
  - [ ] La caja y ramo se ven bien reducidos
  - [ ] No hay scrolling horizontal
  - [ ] Spacing es correcto

#### Móvil Estándar (375px - iPhone 12)
- [ ] Selecciona "iPhone 12"
- [ ] Verifica que todo se vea bien
- [ ] Botones son tocables

#### Móvil Grande (425px - iPhone 14 Pro Max)
- [ ] Selecciona "iPhone 14 Pro Max"
- [ ] Verifica proporciones

#### Tablet (768px - iPad)
- [ ] Selecciona "iPad"
- [ ] Caja debe estar más grande
- [ ] Flores bien proporcionadas
- [ ] Espacios generosos

#### Tablet Grande (1024px - iPad Pro)
- [ ] Selecciona "iPad Pro"
- [ ] Verifica que no sea demasiado grande
- [ ] Proporciones armoniosas

#### Desktop (1920px)
- [ ] Abre navegador en pantalla completa
- [ ] Verifica que:
  - [ ] No es demasiado grande
  - [ ] Card tiene max-width correcto
  - [ ] Espacios son elegantes

---

## 🎨 PRUEBAS DE DISEÑO

### Colores y Gradientes
- [ ] Fondo es un gradiente suave rosa/melocotón
- [ ] Caja tiene gradiente realista (no plana)
- [ ] Flores tienen colores distintos (blanco, naranja, púrpura, rosado, coral)
- [ ] Centros de flores tienen colores diferenciados

### Sombras
- [ ] Botones tienen sombra cuando estás fuera de hover
- [ ] Sombra se intensifica en hover
- [ ] Caja tiene sombra para mostrar profundidad
- [ ] Flores tienen drop-shadow sutil

### Tipografía
- [ ] Títulos (H1, H2) son claros y legibles
- [ ] Párrafos son legibles
- [ ] Espaciado entre líneas es cómodo
- [ ] Letter-spacing es profesional (no apretado)

### Animaciones
- [ ] TODAS las animaciones son suaves (no stuttering)
- [ ] NO hay movimientos bruscos
- [ ] Las transiciones son elegantes
- [ ] Los tiempos son coherentes

---

## ⚡ PRUEBAS DE RENDIMIENTO

### Inspector de Navegador (F12 → Performance)
1. Abre las DevTools
2. Ve a "Performance"
3. Haz clic en Record
4. Completa el flujo (click-click-click)
5. Detén la grabación
6. Verifica:
   - [ ] No hay frames rojos (jank/stutter)
   - [ ] Frame rate se mantiene cerca de 60fps
   - [ ] Los drops de FPS no son frecuentes

### Verificación de Memory Leaks
1. Abre DevTools → Memory
2. Haz click en "Take heap snapshot"
3. Completa varias veces el flujo
4. Toma otra snapshot
5. Verifica:
   - [ ] El tamaño del heap no crece excesivamente
   - [ ] No hay pétalos acumulándose en DOM (verificar que se limpian)

---

## 🎯 PRUEBAS DE INTERACTIVIDAD

### Botones
- [ ] "Comenzar" → Funciona y transiciona a tarjeta
- [ ] "Abrir regalo" → Funciona y abre la caja
- [ ] "Ver próximo detalle" → Funciona y muestra carta

### Keyboard Navigation (Tab)
- [ ] Puedes navegar con Tab entre botones
- [ ] Focus visible (outline) es visible
- [ ] Puedes activar botones con Enter

### Touch/Click
- [ ] Botones responden al click
- [ ] No hay retraso en la respuesta
- [ ] Animaciones ocurren correctamente

---

## 🐛 PROBLEMAS COMUNES A BUSCAR

### Nunca debería pasar:
- [ ] ❌ Texto no está alineado al centro
- [ ] ❌ Botones no responden
- [ ] ❌ Animaciones entrecortadas (stuttering)
- [ ] ❌ Memoria acumulada (heap leak)
- [ ] ❌ Pétalos desapareciendo incorrectamente
- [ ] ❌ Flores superpuestas perfectamente (deben estar en ángulos)
- [ ] ❌ Scroll horizontal en móvil
- [ ] ❌ Brillo demasiado brillante o inexistente
- [ ] ❌ Tarjeta no completamente visible
- [ ] ❌ Cursor del typewriter continuando parpadear después de terminar

---

## 📝 FORMATO DE REPORTE

Si encuentras algo diferente a lo esperado:

```
PROBLEMA: [Describe qué no funciona]
DISPOSITIVO: [Samsung S21, iPhone 12, Desktop 1920px, etc.]
NAVEGADOR: [Chrome, Firefox, Safari, etc.]
PASOS: 
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]
RESULTADO ESPERADO: [Qué debería suceder]
RESULTADO ACTUAL: [Qué sucede realmente]
```

---

**✅ Si todos los puntos pasan, ¡el proyecto está listo!**
