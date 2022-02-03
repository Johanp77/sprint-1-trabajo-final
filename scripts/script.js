let contenedor1 = document.getElementById('contenedor1');
let contenedor2 = document.getElementById('contenedor2'); //Contenedor Template
let contenedor_nuevo = document.getElementById('contenedor_nuevo'); //Contenedor Nuevo
const input1 = document.getElementById('input1');
const inputDescuento = document.getElementById('inputDescuento');
let p = document.getElementById('p')



 //Intentos fallidos de imprimir el dinero
let precio = 2000000;

let almacen = localStorage.setItem(input1.value, "coin")

let dinero = almacen * precio
console.log(dinero)


let valor_base = document.getElementById('input1.'.value)

let valor_final = valor_base* precio
    console.log(valor_final)

let valor1 = (input1.value  * precio)
    let valor2 = valor1 + precio

console.log("total", valor1);


let boton2 = document.getElementById('boton2')

boton2.addEventListener('click', () => {
    if (input1.value != "") {
        contenedor1.classList.add('hidden')
        contenedor_nuevo.classList.remove('hidden')
        contenedor_grande()
    }
    else {
        alert('debe ingresar un valor')
    }

})

let contenedor_grande = () => {

    contenedor_nuevo.innerHTML +=

        `
<form >
    <div class="calculador3">
        <h3 class="letra2">PC Express </h3>
        <h4 class="letra2 titulo4">Ordén de compra</h4>

        <label class="letra2">valor de compra</label>
        <input class="input input-1" value=${input1.value + "000000"}></input>

        <label class="letra2">valor de descuento</label>
        <input class="input input-2" id="inputDescuento" value="0">  </input>

        <label class="letra2">total</label>
        <input class="input input-3" value=${input1.value + "000000"}></input>
        <p  id="p">NO HAY DESCUENTO EN ESTA COMPRA</p>
        <button id="buton3" class="buton3" onclick="calcular"> calcular</button>

        
        

    </div>
</form>
`
}


 // ISAAC //

    
 
/*
    inputDescuento.addEventListener('event', () => {
    if(inputDescuento.value ==" "){
        p.classList.add('hidden')
    }
     else{
        p.classList.remove('hidden')
    }

})

*/





// let contenedor = document.getElementById('contenedor1') //No hace nada
// let fragment = document.createDocumentFragment();
// let  clone = contenedor2.cloneNode(true)

// fragment.appendChild(clone)
// contenedor_nuevo.appendChild(fragment)



console.log(contenedor1)






