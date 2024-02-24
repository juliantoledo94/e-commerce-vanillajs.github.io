# GamerClub

Este proyecto fue desarrollado como parte de mi examen final de Programación 1. Consiste en una página web creada principalmente mediante manipulación del DOM y LocalStorage utilizando JavaScript, HTML, CSS y Bootstrap.

## Descripción

La página web tiene como objetivo simular un proceso de compra completo en un sitio web. Proporciona una experiencia interactiva que incluye:

- Selección de productos, ya sea un producto específico o filtrado por categoría.
- Agregar productos al carrito de compras, donde se pueden ajustar las cantidades o eliminar productos.
- Proceso completo de checkout y finalización de la compra.

Además, se destacan las siguientes características:

- La página web es responsiva, lo que significa que se adapta a diferentes tamaños de pantalla y dispositivos.
- La información del carrito de compras y otros datos relevantes se almacenan de manera persistente en el `localStorage`, lo que proporciona una experiencia consistente incluso después de recargar la página o cerrar el navegador.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Bootstrap

## Estructura del Proyecto

El proyecto está organizado de acuerdo con la consigna que requería utilizar un único archivo HTML. Los archivos están distribuidos de la siguiente manera:

- `index.html`: Este archivo HTML contiene la estructura básica de la página web y enlaza con los archivos JavaScript y CSS necesarios.
- `index.js`: Este archivo JavaScript se encarga de la lógica principal de la aplicación, incluyendo la manipulación del DOM para interactuar con los elementos de la página y gestionar el proceso de compra.
- `main.js`: Aquí se encuentra el código adicional de JavaScript, como funciones de utilidad o complementarias para la funcionalidad principal de la aplicación.
- `styles.css`: Este archivo CSS contiene los estilos y la presentación visual de la página web.
- `images/`: Esta carpeta contiene las imágenes utilizadas en la página web.

Esta estructura de archivos permite mantener el proyecto organizado y cumplir con la consigna de utilizar un único archivo HTML para la página web.

## Funcionalidades Destacadas

El proyecto incluye las siguientes funcionalidades destacadas:

- **Filtrar Productos:** Los usuarios pueden filtrar productos por categoría o realizar una búsqueda específica para encontrar el producto deseado de manera rápida y sencilla.

- **Añadir Productos al Carrito:** Los usuarios pueden agregar productos al carrito de compras con un solo clic, lo que les permite recopilar los artículos que desean comprar.

- **Gestión del Carrito de Compras:** Los usuarios pueden ajustar la cantidad de productos en el carrito, incrementar o decrementar las unidades, así como eliminar productos individualmente o vaciar completamente el carrito. Todas estas acciones se realizan de forma persistente gracias al uso del `localStorage`, lo que garantiza que los datos del carrito se conserven incluso después de recargar la página o cerrar el navegador.

- **Sección de Checkout:** Una vez que los usuarios han agregado los productos deseados al carrito, pueden proceder al checkout. Esta sección incluye un formulario donde los clientes pueden ingresar su información de envío y pago. Se utilizan validaciones personalizadas (custom validity) para garantizar que los datos ingresados sean válidos y se proporciona una experiencia de compra segura y sin problemas.

Estas funcionalidades clave proporcionan una experiencia de usuario completa y satisfactoria, permitiendo a los usuarios explorar, seleccionar y comprar productos de manera eficiente y conveniente.




---
Desarrollado por Julian Toledo
