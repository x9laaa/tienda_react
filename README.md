# Product Manager App

Aplicación web desarrollada con React para la gestión de productos y simulación de carrito de compras.

## Características

- Registro de productos mediante formulario.
- Visualización dinámica de productos.
- Tarjetas individuales para cada producto.
- Agregado de productos a un carrito de compras.
- Cálculo automático del total del carrito.
- Interfaz responsiva utilizando Bootstrap.
- Arquitectura basada en componentes React.
- Gestión de estado mediante Hooks.

## Tecnologías Utilizadas

- React
- JavaScript (ES6+)
- Bootstrap 5
- HTML5
- CSS3

## Estructura del Proyecto

```text
src/
│
├── App.jsx
├── ProductoForm.jsx
├── ProductoCard.jsx
├── Carrito.jsx
```

## Funcionalidades Implementadas

### Gestión de Productos

Permite registrar nuevos productos mediante un formulario simple que solicita:

- Nombre del producto
- Precio

Los productos se agregan dinámicamente a la lista sin necesidad de recargar la página.

### Catálogo de Productos

Los productos registrados son mostrados mediante tarjetas dinámicas generadas utilizando componentes reutilizables.

### Carrito de Compras

Cada producto puede ser agregado al carrito mediante un botón.

El carrito permite:

- Visualizar productos seleccionados.
- Contabilizar la cantidad de productos.
- Calcular el total de la compra.

## Conceptos React Aplicados

- Componentes Funcionales
- Props
- useState
- Eventos
- Renderizado Condicional
- Renderizado de Listas con map()
- Comunicación Padre-Hijo
- Comunicación Hijo-Padre

## Próximas Mejoras

- Persistencia de datos con Firebase Firestore.
- Autenticación de usuarios.
- Almacenamiento de imágenes con Firebase Storage.
- Búsqueda y filtrado de productos.
- Edición y eliminación de productos.
- Despliegue en Netlify.
- Versión Android mediante Cordova.

## Autor

Alex Carreño
Desarrollador 