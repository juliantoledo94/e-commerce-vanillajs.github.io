const productos =[
    {
        id: 0,
        nombre: "Final Fantasy 15",
        descripcion: "Final Fantasy 15: Adéntrate en un mundo de fantasía épica, combates emocionantes y amistades inquebrantables en esta aventura RPG moderna.",
        precio: 10000,
        img: "img/final-fantasy-xv.jpg",
        categoria:"rpg",
        cantidad:1
    },
    {
        id: 2,
        nombre: "Final Fantasy 7",
        descripcion: "Final Fantasy 7 Remake: Redescubre la épica historia de Cloud y sus aliados con gráficos asombrosos y un combate renovado.",
        precio: 11000,
        img: "img/final-fantasy-7.jpg",
        categoria:"rpg",
        cantidad:1
    },
    {
        id: 3,
        nombre: "The Legend of Zelda TotK",
        descripcion: "The Legend of Zelda: Tears of the Kingdom (hipotético): Embárcate en una nueva epopeya con Link, enfrentando desafíos y descubriendo secretos en Hyrule.",
        precio: 12000,
        img: "img/tears-of-the-kingdome.jpg",
        categoria:"aventura",
        cantidad:1
    },
    {
        id: 4,
        nombre: "The Legend of Zelda BotW",
        descripcion: "The Legend of Zelda: Breath of the Wild: Explora Hyrule con total libertad, resuelve puzles y enfréntate a criaturas en este juego revolucionario.",
        precio: 13000,
        img: "img/breath-of-the-wild.jpg",
        categoria:"aventura",
        cantidad:1
    },
    {
        id: 5,
        nombre: "Resident Evil 4 Remake",
        descripcion: "Resident Evil 4 Remake: Revive la acción intensa de Leon Kennedy en HD con mejoras visuales y un sistema de control actualizado",
        precio: 14000,
        img: "img/re4.jpg",
        categoria:"terror",
        cantidad:1
    },
    {
        id: 6,
        nombre: "Resident Evil 2 Remake",
        descripcion: "Resident Evil 2 Remake: Sobrevive al horror zombi en Raccoon City con gráficos impresionantes y una experiencia inmersiva renovada.",
        precio: 15000,
        img: "img/re2.jpg",
        categoria:"terror",
        cantidad:1
    },
]

let productos_contenedor = document.querySelector("#productos")

//Traigo el carrito con get item
let carrito = [];
carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let cantidad_elementos_carrito = document.querySelector(".cantidad_elementos_carrito")
let precio_en_carrito = document.querySelector(".monto_pesos")
let div_principal_contenedor_productos= document.createElement("div");
div_principal_contenedor_productos.classList.add("d-flex","flex-wrap","justify-content-center","contenedor_productos","row","container")

productos_contenedor.appendChild(div_principal_contenedor_productos)





//Creo Cards por cada producto.
productos.forEach((producto) =>{
    let div_contenedor_cards = document.createElement("div");
    div_contenedor_cards.classList.add("contenedor_cards","col-lg-4","col-md-6","col-sm-12")
    //div_contenedor_cards.setAttribute("style","width: 18rem;")
    div_principal_contenedor_productos.appendChild(div_contenedor_cards)

    let div_card = document.createElement("div")
    div_card.classList.add("card")

    div_contenedor_cards.appendChild(div_card)

    let div_imagen = document.createElement("div")
    div_card.appendChild(div_imagen)
    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.alt=`${producto.nombre}`
    imagen.src=producto.img
    div_imagen.appendChild(imagen)

    let div_textos = document.createElement("div")
    div_textos.classList.add("div_textos")
    div_card.appendChild(div_textos)
    let nombre_producto = document.createElement("h2")
    nombre_producto.classList.add("card-title","d-flex","justify-content-center")
    nombre_producto.innerHTML=producto.nombre
    div_textos.appendChild(nombre_producto)

    let descripcion_producto = document.createElement("p")
    descripcion_producto.classList.add("card-text")
    descripcion_producto.innerHTML=producto.descripcion
    div_textos.appendChild(descripcion_producto)

    let div_ul = document.createElement("div")
    div_ul.classList.add("d-flex","justify-content-center")
    div_card.appendChild(div_ul)
    let ul= document.createElement("ul");
    ul.classList.add("list-group","list-group-flush","ul_boostrap");

    let li_categoria = document.createElement("li")
    li_categoria.classList.add("list-group-item")
    li_categoria.innerHTML=`${producto.categoria.toUpperCase()}`
    ul.appendChild(li_categoria)

    let li_precio = document.createElement("li")
    li_precio.classList.add("list-group-item")
    li_precio.innerHTML=`$${producto.precio}`
    ul.appendChild(li_precio)

    div_ul.appendChild(ul)

    let div_boton = document.createElement("div")
    div_boton.classList.add("d-flex","justify-content-center")
    div_card.appendChild(div_boton)

    let boton_card = document.createElement("button")
    boton_card.classList.add("btn","btn-primary","btn-sm")
    boton_card.innerText="Agregar al carrito"

    div_boton.appendChild(boton_card)

    boton_card.addEventListener("click",()=>{

        
        agregarProductoAlCarrito(producto)
        

    })

})

//Esta funcion se utiliza para calcular la cantidad del contador que esta en el icono del carrito de
const calcularCantidadTotal = (carrito) => {
    let cantidadTotal = 0;
    for (let producto of carrito) {
        cantidadTotal += producto.cantidad;
    }
    localStorage.setItem("cantidad_carrito", cantidadTotal);
    return cantidadTotal;
};
//Esta funcion se utiliza para calcular el precio total que esta al lado del icono del carrito
const calcular_precio_total = (carrito) =>{
    let precioTotal = 0;
    precioTotal = carrito.reduce((acc,producto) => acc+producto.cantidad * (producto.precio/producto.cantidad), 0)
    localStorage.setItem("precio_total",precioTotal)
    return precioTotal
}

//Funcion para que el boton de cada card agregue un producto al carrito.
const agregarProductoAlCarrito = (producto) => {
    // Paso 1: Recuperar la lista actual de productos en el carrito desde el localStorage
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Paso 2: Verificar si el producto ya está en el carrito
    const existeEnCarrito = carrito.some((item) => item.id === producto.id);

    if (!existeEnCarrito) {
        
        // Paso 3: Si no está en el carrito, lo agregas a la lista
        carrito.push(producto);
         // Paso 4: Guardar la lista actualizada en el localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log("Producto agregado al carrito:", producto);
        
        
        
    } else {
        console.log("El producto ya está en el carrito.");
        carrito = carrito.map((item) => {
            if (item.id === producto.id) {
                let precioOriginal = item.precio / item.cantidad; // Calculamos el precio original
                item.cantidad++;
                item.precio= precioOriginal* item.cantidad;
                console.log("Cantidad actualizada:", item.cantidad, "precio actualizado", item.precio);
            }
            return item;
        });
        
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
    }
    precio_en_carrito.innerText=calcular_precio_total(carrito)
    cantidad_elementos_carrito.innerText = calcularCantidadTotal(carrito);
    cargar_productos_a_modal()
    
};



const reducirProductoEnCarrito = (producto) => {
    // Paso 1: Recuperar la lista actual de productos en el carrito desde el localStorage
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Paso 2: Verificar si el producto está en el carrito y tiene una cantidad mayor a 1
    const existeEnCarrito = carrito.some((item) => item.id === producto.id && item.cantidad > 1);

    if (existeEnCarrito) {
        // Paso 3: Si está en el carrito y la cantidad es mayor a 1, reducimos la cantidad
        carrito = carrito.map((item) => {
            if (item.id === producto.id && item.cantidad > 1) {
                let precioOriginal = item.precio / item.cantidad; // Calculamos el precio original
                item.cantidad--;
                item.precio = precioOriginal * item.cantidad;
                console.log("Cantidad actualizada:", item.cantidad, "precio actualizado", item.precio);
            }
            return item;
        });

        // Paso 4: Guardar la lista actualizada en el localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        cargar_productos_a_modal(); // Puedes llamar a la función que actualiza el modal aquí
        cantidad_elementos_carrito.innerText = calcularCantidadTotal(carrito);
        precio_en_carrito.innerText=calcular_precio_total(carrito)
    } else {
        console.log("No se puede reducir la cantidad a menos de 1.");
    }
};


const cargar_productos_a_modal =() =>{
    const modal_body = document.querySelector(".modal-body")
    const precio_total = document.querySelector(".precio_total")
    const precio_total_actualizado = document.querySelector(".precio_total_actualizado")
    const select_cuotas = document.querySelector(".select_cuotas")
    const vaciar_carrito_modal = document.querySelector(".btn_vaciar_carrito")
    const continuar_compra = document.querySelector(".continuar_compra")
    modal_body.innerHTML=""
    carrito.forEach((producto)=>{
        let div_contenedor_modal = document.createElement("div")
        div_contenedor_modal.classList.add("modal-contenedor")
        modal_body.appendChild(div_contenedor_modal)

        let div_modal_img = document.createElement("div")
        div_modal_img.classList.add("div_img_modal")
        div_modal_img.id="div_modal_img"
        div_contenedor_modal.appendChild(div_modal_img)

        let modal_img = document.createElement("img")
        modal_img.classList.add("img-fluid","img_modal")
        modal_img.alt=`${producto.nombre}`
        modal_img.src=producto.img
        div_modal_img.appendChild(modal_img)

        let div_contenido = document.createElement("div")
        div_contenido.classList.add("div_contenido")
        div_contenedor_modal.appendChild(div_contenido)

        let modal_nombre = document.createElement("h3")
        modal_nombre.classList.add("modal_nombre")
        modal_nombre.innerHTML= producto.nombre
        div_contenido.appendChild(modal_nombre)

        let modal_precio = document.createElement("p")
        modal_precio.innerHTML=`$${producto.precio}`
        div_contenido.appendChild(modal_precio)

        let div_modal_cantidad = document.createElement("div")
        div_modal_cantidad.classList.add("div_modal_cantidad")
        div_contenido.appendChild(div_modal_cantidad)

        boton_menos = document.createElement("button")
        boton_menos.classList.add("btn","btn-primary","btn-sm")
        boton_menos.innerHTML= "-"
        div_modal_cantidad.appendChild(boton_menos)

        boton_menos.addEventListener("click",()=>{
            reducirProductoEnCarrito(producto)
        } )

        let modal_cantidad = document.createElement("p")
        modal_cantidad.innerHTML=`Cantidad: ${producto.cantidad}`;
        div_modal_cantidad.appendChild(modal_cantidad)

        boton_mas = document.createElement("button")
        boton_mas.classList.add("btn","btn-primary","btn-sm")
        boton_mas.innerHTML= "+"
        div_modal_cantidad.appendChild(boton_mas)

        boton_mas.addEventListener("click",()=>{
            agregarProductoAlCarrito(producto)
        })
        
        let boton_modal = document.createElement("button")
        boton_modal.classList.add("btn","btn-danger","btn-sm")
        boton_modal.innerHTML="Eliminar Producto"
        div_contenido.appendChild(boton_modal)


        boton_modal.addEventListener("click",() =>{
            eliminar_del_carrito(producto.id)
            
        })

        vaciar_carrito_modal.addEventListener("click",()=>{
            continuar_compra.classList.add("disabled")
            vaciar_carrito()
            
        })

        continuar_compra.addEventListener("click", ()=>{
            console.log("modal")
            precio_total_actualizado.innerText =`Total: $${carrito.reduce((acc,producto) => acc+producto.cantidad * (producto.precio/producto.cantidad), 0)}`;
            
        })

    })
    if(carrito.length == 0){ 
        
        let noHay = document.createElement("p");
        noHay.classList.add("text-center","text-primary","parrafo");
        noHay.innerText = "¡Aun no agregaste nada!";
        modal_body.appendChild(noHay);
        continuar_compra.classList.add("disabled")
        

    }else{
        continuar_compra.classList.remove("disabled")
    }
    
    select_cuotas.addEventListener("change", () => {
        precio_total_actualizado.innerText = `Total: $${calcularPrecioTotalActualizado(carrito, select_cuotas.value).toFixed(2)}`;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });
    
    
    function calcularPrecioTotalActualizado(carrito, cuotas) {
        return carrito.reduce((acc, producto) => acc + producto.cantidad * (producto.precio / producto.cantidad), 0) / parseInt(cuotas);
    }
    
    precio_total.innerText = `Total: $${carrito.reduce((acc,producto) => acc+producto.cantidad * (producto.precio/producto.cantidad), 0)}`;
    
    localStorage.setItem("carrito",JSON.stringify(carrito));
    
    
    
}



const eliminar_del_carrito = (id) => {
    let modal_id = id
    carrito = carrito.filter((item) => item.id != modal_id)
    localStorage.setItem("carrito",JSON.stringify(carrito));
    cargar_productos_a_modal()
    cantidad_elementos_carrito.innerText = calcularCantidadTotal(carrito);
    precio_en_carrito.innerText=calcular_precio_total(carrito)
}

const vaciar_carrito = () =>{
    carrito = [];  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargar_productos_a_modal();
    cantidad_elementos_carrito.innerText = calcularCantidadTotal(carrito);
    precio_en_carrito.innerText=calcular_precio_total(carrito)
}



/* CREAMOS LA PRIMERA Y SEGUNDA MODAL, TAMBIEN EL FORMULARIO CON SUS VALIDACIONES Y SU EVENTO SUBMIT */
document.addEventListener('DOMContentLoaded', function () {
    // Tu arreglo de productos y otros elementos
    
    // Crear la estructura de la modal
    let modal = document.createElement('div');
    modal.setAttribute('class', 'modal fade');
    modal.setAttribute('id', 'exampleModal');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'exampleModalLabel');
    modal.setAttribute('aria-hidden', 'true');

    let modalDialog = document.createElement('div');
    modalDialog.setAttribute('class', 'modal-dialog');

    let modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');

    let modalHeader = document.createElement('div');
    modalHeader.setAttribute('class', 'modal-header');

    let modalTitle = document.createElement('h2');
    modalTitle.setAttribute('class', 'modal-title fs-5');
    modalTitle.setAttribute('id', 'exampleModalLabel');
    modalTitle.textContent = 'Carrito de compras';

    let closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('class', 'btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.id="closeButton"

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    let modalBody = document.createElement('div');
    modalBody.setAttribute('class', 'modal-body');
    modalBody.textContent = '...';

    let modalFooter = document.createElement('div');
    modalFooter.setAttribute('class', 'modal-footer');

    let span_precio_total = document.createElement("span")

    let precio_total = document.createElement("p")
    precio_total.classList.add("precio_total")
    precio_total.id="precio_total"
    precio_total.innerText=("Precio total = $0")
    span_precio_total.appendChild(precio_total)

    let closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('class', 'btn btn-secondary');
    closeBtn.classList.add("btn_vaciar_carrito")
    closeBtn.textContent = 'Vaciar Carrito';

    let saveChangesBtn = document.createElement('button');
    saveChangesBtn.setAttribute('type', 'button');
    saveChangesBtn.setAttribute('class', 'btn btn-primary');
    saveChangesBtn.classList.add("continuar_compra","disabled")
    saveChangesBtn.id="openModalButton2"
    saveChangesBtn.textContent = 'Continuar Compra';

    modalFooter.appendChild(span_precio_total)
    modalFooter.appendChild(closeBtn);
    modalFooter.appendChild(saveChangesBtn);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    document.body.appendChild(modal);

    //tuve que crear la variable global afuera del event listener de openModalButton por que no podia ocultar esta modal cuando abria la segunda.
    var primeraModalInstance = new bootstrap.Modal(document.getElementById('exampleModal'), {
        backdrop: 'static',
        keyboard: false
    });

    // Agregro el evento click para mostrar la modal
    let openModalButton = document.getElementById('openModalButton');
    openModalButton.addEventListener('click', function () {
        
        primeraModalInstance.show();
        cargar_productos_a_modal()
        
    });
    
    /*AÑADO LA SEGUNDA MODAL */

    let segundaModal = document.createElement('div');
    segundaModal.setAttribute('class', 'modal fade');
    segundaModal.setAttribute('id', 'segundaModal');
    segundaModal.setAttribute('tabindex', '-1');
    segundaModal.setAttribute('aria-labelledby', 'segundaModalLabel');
    segundaModal.setAttribute('aria-hidden', 'true');

    let modalDialog2 = document.createElement('div');
    modalDialog2.setAttribute('class', 'modal-dialog');

    let modalContent2 = document.createElement('div');
    modalContent2.setAttribute('class', 'modal-content');

    let modalHeader2 = document.createElement('div');
    modalHeader2.setAttribute('class', 'modal-header');

    let modalTitle2 = document.createElement('h2');
    modalTitle2.setAttribute('class', 'modal-title fs-5');
    modalTitle2.setAttribute('id', 'segundaModalLabel');
    modalTitle2.textContent = 'CheckOut';

    let closeButton2 = document.createElement('button');
    closeButton2.setAttribute('type', 'button');
    closeButton2.setAttribute('class', 'btn-close');
    closeButton2.setAttribute('data-bs-dismiss', 'modal');
    closeButton2.setAttribute('aria-label', 'Close');
    closeButton2.id="closeButton2"

    modalHeader2.appendChild(modalTitle2);
    modalHeader2.appendChild(closeButton2);

    let modalBody2 = document.createElement('div');
    modalBody2.setAttribute('class', 'modal-body');


    /* CARGO EL FORMULARIO A LA SEGUNDA MODAL*/ 


    let formulario = document.createElement('form');
    formulario.classList.add("formulario")
    formulario.id="formulario"

    let div_contenedor_elementos_formulario = document.createElement("div")
    div_contenedor_elementos_formulario.classList.add("container","div_contenedor_elementos_formulario")
    formulario.appendChild(div_contenedor_elementos_formulario)

    let label_nombre = document.createElement("label")
    label_nombre.for="nombre"
    label_nombre.innerHTML="Nombre completo"

    let input_nombre = document.createElement("input")
    input_nombre.id="nombre"
    input_nombre.setAttribute("type","text")
    input_nombre.name="nombre"
    input_nombre.placeholder="ingrese su nombre completo"
    input_nombre.required=true
    input_nombre.setAttribute("autocomplete","off")

    div_contenedor_elementos_formulario.appendChild(label_nombre)
    div_contenedor_elementos_formulario.appendChild(input_nombre)

    let label_email = document.createElement("label");
    label_email.for="correo"
    label_email.innerHTML="Email"

    let input_email = document.createElement("input")
    input_email.id="correo"
    input_email.setAttribute("type","email")
    input_email.name="correo"
    input_email.placeholder="Ingrese su correo electrónico"
    input_email.required=true
    input_email.setAttribute("autocomplete","off")

    div_contenedor_elementos_formulario.appendChild(label_email)
    div_contenedor_elementos_formulario.appendChild(input_email)

    let label_telefono = document.createElement("label")
    label_telefono.for="telefono"
    label_telefono.innerHTML="Teléfono"

    let input_telefono = document.createElement("input")
    input_telefono.id="telefono"
    input_telefono.setAttribute("type","number")
    input_telefono.name="telefono"
    input_telefono.placeholder="ingrese su teléfono"
    input_telefono.required=true
    input_telefono.setAttribute("autocomplete","off")

    div_contenedor_elementos_formulario.appendChild(label_telefono)
    div_contenedor_elementos_formulario.appendChild(input_telefono)

    let label_direccion = document.createElement("label")
    label_direccion.for="direccion"
    label_direccion.innerHTML="Direccion de entrega"

    let input_direccion = document.createElement("input")
    input_direccion.id="direccion"
    input_direccion.setAttribute("type","text")
    input_direccion.name="direccion"
    input_direccion.placeholder="Ingrese domicilio de entrega"
    input_direccion.required=true
    input_direccion.setAttribute("autocomplete","off")

    div_contenedor_elementos_formulario.appendChild(label_direccion)
    div_contenedor_elementos_formulario.appendChild(input_direccion)
    
    let label_fecha = document.createElement("label")
    label_fecha.for="fecha"
    label_fecha.innerText="Fecha de entrega"

    let input_fecha = document.createElement("input")
    input_fecha.id="fecha"
    input_fecha.setAttribute("type","date")
    input_fecha.name="fecha"
    input_fecha.required=true
    

    div_contenedor_elementos_formulario.appendChild(label_fecha)
    div_contenedor_elementos_formulario.appendChild(input_fecha)

    let div_metodo_pago = document.createElement("div")
    div_metodo_pago.classList.add("div_metodo_pago")
    
    let label_metodo_pago = document.createElement("label")
    label_metodo_pago.innerText="Metodo de pago"

    let input_debito = document.createElement("input")
    input_debito.setAttribute("type","radio")
    input_debito.id="debito"
    input_debito.name="metodo_pago"
    input_debito.value="debito"
    input_debito.required=true
    
    let label_debito = document.createElement("label");
    label_debito.setAttribute("for", "debito");
    label_debito.innerHTML = "Débito";

    let input_credito = document.createElement("input");
    input_credito.setAttribute("type", "radio");
    input_credito.id = "credito";
    input_credito.name = "metodo_pago";
    input_credito.value = "credito";
    input_credito.required=true

    let label_credito = document.createElement("label");
    label_credito.setAttribute("for", "credito");
    label_credito.innerHTML = "Credito";

    div_contenedor_elementos_formulario.appendChild(label_metodo_pago);
    div_metodo_pago.appendChild(input_debito);
    div_metodo_pago.appendChild(label_debito);
    div_metodo_pago.appendChild(input_credito);
    div_metodo_pago.appendChild(label_credito);

    div_contenedor_elementos_formulario.appendChild(div_metodo_pago);

    let label_nombre_pago = document.createElement("div")
    label_nombre_pago.for="nombre_pago"
    label_nombre_pago.innerText="Titular de la tarjeta"

    let input_nombre_pago = document.createElement("input")
    input_nombre_pago.id="nombre_pago"
    input_nombre_pago.setAttribute("type","text")
    input_nombre_pago.name="nombre_pago"
    input_nombre_pago.placeholder="Nombre completo del titular de la tarjeta"
    input_nombre_pago.required=true
    input_nombre_pago.setAttribute("autocomplete","off")

    div_contenedor_elementos_formulario.appendChild(label_nombre_pago)
    div_contenedor_elementos_formulario.appendChild(input_nombre_pago)

    let label_numero_tarjeta = document.createElement("label")
    label_numero_tarjeta.for="numero_tarjeta"
    label_numero_tarjeta.innerText="Número de la tarjeta"

    let input_numero_tarjeta = document.createElement("input")
    input_numero_tarjeta.id="numero_tarjeta"
    input_numero_tarjeta.setAttribute("type","number")
    input_numero_tarjeta.name="numero_tarjeta"
    input_numero_tarjeta.placeholder="ingrese los números de la tarjeta"
    input_numero_tarjeta.required=true
    input_numero_tarjeta.setAttribute("autocomplete","off")

    div_contenedor_elementos_formulario.appendChild(label_numero_tarjeta)
    div_contenedor_elementos_formulario.appendChild(input_numero_tarjeta)

    let label_fecha_vencimiento = document.createElement("label")
    label_fecha_vencimiento.for="fecha_vencimiento"
    label_fecha_vencimiento.innerText="Vencimiento de la tarjeta"

    let input_fecha_vencimiento = document.createElement("input")
    input_fecha_vencimiento.id="fecha_vencimiento"
    input_fecha_vencimiento.setAttribute("type","month")
    input_fecha_vencimiento.name="fecha_vencimiento"
    input_fecha_vencimiento.placeholder="ingrese año y mes de vencimineto que figura en la tarjeta"
    input_fecha_vencimiento.required=true
    input_fecha_vencimiento.setAttribute("autocomplete","off")

    div_contenedor_elementos_formulario.appendChild(label_fecha_vencimiento)
    div_contenedor_elementos_formulario.appendChild(input_fecha_vencimiento)

    let label_codigo_seguridad = document.createElement("label")
    label_codigo_seguridad.for="codigo_seguridad"
    label_codigo_seguridad.innerText="Código de seguridad"
    
    let input_codigo_seguridad = document.createElement("input")
    input_codigo_seguridad.for="codigo_seguridad"
    input_codigo_seguridad.setAttribute("type","number")
    input_codigo_seguridad.name="codigo_seguridad"
    input_codigo_seguridad.placeholder="ingrese el código de seguridad"
    input_codigo_seguridad.required=true
    input_codigo_seguridad.setAttribute("autocomplete","off")

    div_contenedor_elementos_formulario.appendChild(label_codigo_seguridad)
    div_contenedor_elementos_formulario.appendChild(input_codigo_seguridad)

    let div_cuotas = document.createElement("div")
    div_cuotas.classList.add("div_cuotas")

    let label_cuotas = document.createElement("label");
    label_cuotas.innerText = "Número de cuotas";

    let select_cuotas = document.createElement("select");
    select_cuotas.classList.add("select_cuotas")
    select_cuotas.id = "cuotas";
    select_cuotas.name = "cuotas";

    // Opciones de cuotas
    let opcionesCuotas = ["1", "3", "6"];

    for (let i = 0; i < opcionesCuotas.length; i++) {
        let option = document.createElement("option");
        option.value = opcionesCuotas[i];
        option.text = opcionesCuotas[i];
        select_cuotas.appendChild(option);
    }

    let span_precio_total_actualizado = document.createElement("span")

    let precio_total_actualizado = document.createElement("p")
    precio_total_actualizado.classList.add("precio_total_actualizado")
    precio_total_actualizado.innerText=("Precio total = $0")
    span_precio_total_actualizado.appendChild(precio_total_actualizado)

    div_cuotas.appendChild(label_cuotas);
    div_cuotas.appendChild(select_cuotas);
    div_cuotas.appendChild(span_precio_total_actualizado)

    
    div_contenedor_elementos_formulario.appendChild(div_cuotas)
    
    let boton_enviar_formulario = document.createElement('button');
    boton_enviar_formulario.setAttribute('type', 'submit');
    boton_enviar_formulario.setAttribute('class', 'btn btn-primary');
    boton_enviar_formulario.textContent = 'Enviar';
    
    div_contenedor_elementos_formulario.appendChild(boton_enviar_formulario)

    

    // Agregar un evento al input para validar cuando cambie
    input_nombre.addEventListener('input', function () {
        // Expresión regular para permitir solo letras (mayúsculas y minúsculas) y espacios en blanco
        let regex = /^[a-zA-Z\s]+$/;
    
        // Verificar si el campo está vacío o no cumple con la expresión regular
        if (input_nombre.value.trim() === '' || !regex.test(input_nombre.value)) {
            // Si la validación falla, establecer el mensaje de error personalizado
            input_nombre.setCustomValidity('Ingrese un nombre válido sin números.');
        } else {
            // Si la validación es exitosa, borrar el mensaje de error personalizado
            input_nombre.setCustomValidity('');
        }
    });

    input_nombre_pago.addEventListener('input', function () {
        // Expresión regular para permitir solo letras (mayúsculas y minúsculas) y espacios en blanco
        let regex = /^[a-zA-Z\s]+$/;
    
        // Verificar si el campo está vacío o no cumple con la expresión regular
        if (input_nombre_pago.value.trim() === '' || !regex.test(input_nombre_pago.value)) {
            // Si la validación falla, establecer el mensaje de error personalizado
            input_nombre_pago.setCustomValidity('Ingrese un nombre válido sin números.');
        } else {
            // Si la validación es exitosa, borrar el mensaje de error personalizado
            input_nombre_pago.setCustomValidity('');
        }
    });

    input_telefono.addEventListener('input', function () {
        
        let regex = /^\d+$/;
    
        
        if (!regex.test(input_telefono.value) || input_telefono.value.length < 8 || input_telefono.value.length >8) {
            
            input_telefono.setCustomValidity('Ingrese un número de teléfono válido con un mínimo y maximo de 8 ');
        } else {
            
            input_telefono.setCustomValidity('');
        }
    });

    input_numero_tarjeta.addEventListener('input', function () {
        
        let regex = /^\d+$/;
    
        
        if (!regex.test(input_numero_tarjeta.value) || input_numero_tarjeta.value.length < 16 || input_numero_tarjeta.value.length >16) {
            
            input_numero_tarjeta.setCustomValidity('El número minimo y maximo de tarjeta es de 16 digitos.');
        } else {
            
            input_numero_tarjeta.setCustomValidity('');
        }
    });

    input_codigo_seguridad.addEventListener('input', function () {
        
        let regex = /^\d+$/;
    
        
        if (!regex.test(input_codigo_seguridad.value) || input_codigo_seguridad.value.length < 3 || input_codigo_seguridad.value.length >3 ) {
            
            input_codigo_seguridad.setCustomValidity('El número de seguridad es de 3 digitios.');
        } else {
            
            input_codigo_seguridad.setCustomValidity('');
        }
    });



    formulario.addEventListener('submit', function (event) {
        event.preventDefault();  // Evita la acción por defecto del envío del formulario (recargar la página)
    
        console.log("formulario enviado con éxito")
        //
        
        
    
        let modalBody2 = document.querySelector('#segundaModal .modal-body');
        
        let closeBtn2 = document.querySelector("#closeBtn2")
        closeBtn2.parentNode.removeChild(closeBtn2)


        // Crea un nuevo elemento de modalBody
        let nuevoModalBody = document.createElement('div');
        nuevoModalBody.setAttribute('class', 'modal-body');
        nuevoModalBody.classList.add("nuevo_modal_body")
        
        let resumen_compra = document.createElement('h3');
        resumen_compra.innerText = 'Resumen de su compra';
        nuevoModalBody.appendChild(resumen_compra);

        carrito.forEach((producto)=>{
            let div_contendedor_checkout = document.createElement("div")
            div_contendedor_checkout.classList.add("container","div_contendedor_checkout")

            let div_contendedor_checkout_informacion = document.createElement("div")
            div_contendedor_checkout_informacion.classList.add("div_contenedor_checkout_informacion","container","d-flex", "justify-content-evenly")

            let nombre_producto_checkout = document.createElement("span")
            nombre_producto_checkout.innerHTML=producto.nombre
            div_contendedor_checkout_informacion.appendChild(nombre_producto_checkout);
            
            let cantidad_checkout = document.createElement("span")
            cantidad_checkout.innerHTML=`Unidades: ${producto.cantidad}`
            div_contendedor_checkout_informacion.appendChild(cantidad_checkout)

            div_contendedor_checkout.appendChild(div_contendedor_checkout_informacion)

            nuevoModalBody.appendChild(div_contendedor_checkout)
        })
        
        

        
        let cuotas_checkout = select_cuotas.value

        let precio_total_checkout = precio_total_actualizado.value
        console.log(cuotas_checkout)
        let span_cuotas_checkout = document.createElement("span")
        span_cuotas_checkout.innerHTML=`Pago realizado en ${cuotas_checkout} cuotas de:`;
        
        nuevoModalBody.appendChild(span_cuotas_checkout)
        nuevoModalBody.appendChild(precio_total_actualizado)
        
        let mensajeAgradecimiento = document.createElement('span');
        mensajeAgradecimiento.innerText = '¡Gracias por su compra!';
        nuevoModalBody.appendChild(mensajeAgradecimiento);
        
        vaciar_carrito()
        // Reemplaza el modalBody existente con el nuevo
        modalBody2.parentNode.replaceChild(nuevoModalBody, modalBody2);

        let cerrarModalButton = document.createElement('button');
        cerrarModalButton.setAttribute('type', 'button');
        cerrarModalButton.setAttribute('class', 'btn btn-primary');
        cerrarModalButton.innerText = 'Volver a la tienda';
        cerrarModalButton.addEventListener('click', function () {
        segundaModalInstance.hide(); 
        location.reload(); 
    });

        nuevoModalBody.appendChild(cerrarModalButton);
    });

  
    

    modalBody2.appendChild(formulario);



    let modalFooter2 = document.createElement('div');
    modalFooter2.setAttribute('class', 'modal-footer');
    modalFooter2.id="modal_footer2"

   

    let closeBtn2 = document.createElement('button');
    closeBtn2.id="closeBtn2"
    closeBtn2.setAttribute('type', 'button');
    closeBtn2.setAttribute('class', 'btn btn-secondary');
    closeBtn2.setAttribute('data-bs-dismiss', 'modal');
    closeBtn2.textContent = 'Cerrar';

    modalFooter2.appendChild(closeBtn2);

    modalContent2.appendChild(modalHeader2);
    modalContent2.appendChild(modalBody2);
    modalContent2.appendChild(modalFooter2);

    modalDialog2.appendChild(modalContent2);
    segundaModal.appendChild(modalDialog2);

    document.body.appendChild(segundaModal);

    // Obtengo instancias de ambas modales
    
    var segundaModalInstance = new bootstrap.Modal(document.getElementById('segundaModal'), {
        backdrop: 'static',
        keyboard: false
    });


    // Modifico el botón "Continuar Compra" para mostrar la segunda modal y ocultar la primera
    let continuarCompraBtn = document.querySelector('.continuar_compra');
    continuarCompraBtn.addEventListener('click', function () {
        
        primeraModalInstance.hide();
        segundaModalInstance.show();
    });


    /*Actualizo el contador que puse en el carrito. */ 

    let cantidad_elementos_carrito = document.querySelector(".cantidad_elementos_carrito");

    // Recupero la cantidad del localStorage
    let cantidadGuardada = parseInt(localStorage.getItem('cantidad_carrito'));
    if (!isNaN(cantidadGuardada)) {
        cantidad_elementos_carrito.innerText = cantidadGuardada;
    }
    
    /*Actualizo el contenido del simbolo pesos que esta al lado del boton carrito */
    let precio_en_carrito = document.querySelector(".monto_pesos") 

    let precioGuardado = parseInt(localStorage.getItem("precio_total"));
    if(!isNaN(precioGuardado)){
        precio_en_carrito.innerText=precioGuardado
    }

});

/*SECCION DE FILTRADO DE PRODUCTOS */

const textos_oferta_especial = [
    "¡Descuento especial por tiempo limitado!",
    "¡Compra ahora y llévate un regalo!",
    "¡Oferta relámpago, no te lo pierdas!",
    "¡Increíbles descuentos en esta categoría!"
    
];


const obtenerTextoAleatorio = () => {
    const indice = Math.floor(Math.random() * textos_oferta_especial.length);
    return textos_oferta_especial[indice];
};


const mostrarOfertaEspecial = () => {
    const ofertaEspecial = document.getElementById("oferta-especial");
    ofertaEspecial.innerText = obtenerTextoAleatorio();
    ofertaEspecial.style.display = "block";
    setTimeout(() => {
        ofertaEspecial.style.display = "none";
    }, 10000); // Desaparecer después de 10 segundos
};


const filtrar_productos_por_categoria = (categoria) => {
    if (categoria === "todos") {
        return productos;
    } else {
        return productos.filter(producto => producto.categoria === categoria);
    }
};


const mostrar_productos = (producto_filtrados) => {
    const producto_contenedor = document.querySelector("#productos");
    producto_contenedor.innerHTML = "";
    const nuevo_contenedor = document.createElement("div");
    nuevo_contenedor.classList.add("nuevo_contenedor", "d-flex", "flex-wrap", "justify-content-center", "row", "container");
    producto_contenedor.appendChild(nuevo_contenedor);
    if (producto_filtrados.length === 0) {
        console.log("no hay productos para mostrar");
        return;
    }

    producto_filtrados.forEach((producto) => {
        const div_producto = crearTarjetaProducto(producto);
        nuevo_contenedor.append(div_producto);
    });
};

// Función para filtrar productos y mostrar la oferta especial
const filtrar_productos = () => {
    const categoria_seleccionada = document.querySelector(".select_categoria").value;
    const producto_filtrados = filtrar_productos_por_categoria(categoria_seleccionada);

    // Mostrar la oferta especial solo si hay productos filtrados y la categoría no es "todos"
    if (producto_filtrados.length > 0 && categoria_seleccionada !== "todos") {
        mostrarOfertaEspecial();
    }

    // Mostrar los productos filtrados en el DOM
    mostrar_productos(producto_filtrados);
};

/***CREACION Y FILTRADO DE CATEGORIAS ***/


let div_contenedor_categorias = document.querySelector("#contenedor_categorias");

let label_categoria = document.createElement("label");
label_categoria.classList.add("label_categoria")
label_categoria.for ="categoria"
label_categoria.innerText="¡Elige tu categoría de juego preferida!:  "
div_contenedor_categorias.appendChild(label_categoria)

let select_categoria = document.createElement("select")
select_categoria.classList.add("select_categoria")
select_categoria.id="categoria"
select_categoria.addEventListener("change",filtrar_productos)
div_contenedor_categorias.appendChild(select_categoria)

let opcion_todos = document.createElement("option")
opcion_todos.value="todos"
opcion_todos.innerText="Todos"
select_categoria.appendChild(opcion_todos)

let opcion_rpg = document.createElement("option")
opcion_rpg.value = "rpg"
opcion_rpg.innerText="Rpg"
select_categoria.appendChild(opcion_rpg)

let opcion_aventura = document.createElement("option")
opcion_aventura.value = "aventura"
opcion_aventura.innerText="Aventura"
select_categoria.appendChild(opcion_aventura)

let opcion_terror = document.createElement("option")
opcion_terror.value = "terror"
opcion_terror.innerText="Terror"
select_categoria.appendChild(opcion_terror)




const crearTarjetaProducto = (producto) => {
    let div_contenedor_cards = document.createElement("div");
    div_contenedor_cards.classList.add("contenedor_cards","col-lg-4","col-md-6","col-sm-12");

    let div_card = document.createElement("div");
    div_card.classList.add("card");

    div_contenedor_cards.appendChild(div_card);

    let div_imagen = document.createElement("div");
    div_card.appendChild(div_imagen);
    let imagen = document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.alt = `${producto.nombre}`;
    imagen.src = producto.img;
    div_imagen.appendChild(imagen);

    let div_textos = document.createElement("div");
    div_textos.classList.add("div_textos");
    div_card.appendChild(div_textos);
    let nombre_producto = document.createElement("h2");
    nombre_producto.classList.add("card-title", "d-flex", "justify-content-center");
    nombre_producto.innerHTML = producto.nombre;
    div_textos.appendChild(nombre_producto);

    let descripcion_producto = document.createElement("p");
    descripcion_producto.classList.add("card-text");
    descripcion_producto.innerHTML = producto.descripcion;
    div_textos.appendChild(descripcion_producto);

    let div_ul = document.createElement("div");
    div_ul.classList.add("d-flex", "justify-content-center");
    div_card.appendChild(div_ul);
    let ul = document.createElement("ul");
    ul.classList.add("list-group", "list-group-flush", "ul_boostrap");

    let li_categoria = document.createElement("li");
    li_categoria.classList.add("list-group-item");
    li_categoria.innerHTML = `${producto.categoria.toUpperCase()}`;
    ul.appendChild(li_categoria);

    let li_precio = document.createElement("li");
    li_precio.classList.add("list-group-item");
    li_precio.innerHTML = `$${producto.precio}`;
    ul.appendChild(li_precio);

    div_ul.appendChild(ul);

    let div_boton = document.createElement("div");
    div_boton.classList.add("d-flex", "justify-content-center");
    div_card.appendChild(div_boton);

    let boton_card = document.createElement("button");
    boton_card.classList.add("btn", "btn-primary", "btn-sm");
    boton_card.innerText = "Agregar al carrito";

    div_boton.appendChild(boton_card);

    boton_card.addEventListener("click", () => {
        agregarProductoAlCarrito(producto);
    });

    return div_contenedor_cards;
};



