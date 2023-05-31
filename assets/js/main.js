import { mostrar, mostrarIngredientesExtras } from "./mostrarIngredientes.js";

let carne = document.getElementById("carne");
let pollo = document.getElementById("pollo");
let tocino = document.getElementById("tocino");
let mozzarella = document.getElementById("mozzarella");
let champinon = document.getElementById("champinon");
let cebolla = document.getElementById("cebolla");
let pina = document.getElementById("pina");
let pimenton = document.getElementById("pimenton");

let ingredientesMostrar = document.getElementById("ingredientesMostrar");
let ingredientesExtrasMostrar = document.getElementById("ingredientesExtrasMostrar");

let totalIngredientes = 0;
let cantidadIngredientes = 0;

//let textoIngredientes = document.getElementById("idIngredientesExtras").textContent;
let textIngredientesB = document.getElementById("idIngredientesExtras");

let btnEnviar = document.getElementById("btnEnviar");

let propinaP = document.getElementById("propinaP");

let totalId = document.getElementById("totalId");

let ingredientes = [];
let ingredientesExtras = [];

let total = 0;

carne.addEventListener("click",()=> {
    if(carne.checked){
        cantidadIngredientes++;        
        if(cantidadIngredientes > 3){
            ingredientesExtras.push("Carne");                        
            totalIngredientes = totalIngredientes + 800;
            textIngredientesB.innerHTML = `$${totalIngredientes}`;
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
            ingredientesExtrasMostrar.innerHTML = mostrarIngredientesExtras(ingredientesExtras);
            total +=800;
            return;
        }else{
            ingredientes.push("Carne");
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
        }        
    }
});

pollo.addEventListener("click",()=> {
    if(pollo.checked){
        cantidadIngredientes++;        
        if(cantidadIngredientes > 3){
            ingredientesExtras.push("Pollo");
            totalIngredientes = totalIngredientes + 800;
            textIngredientesB.innerHTML = `$${totalIngredientes}`;            
            ingredientesExtrasMostrar.innerHTML = mostrarIngredientesExtras(ingredientesExtras);
            total +=800;
            return;
        }else{
            ingredientes.push("Pollo");
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
        }        
    }
});

tocino.addEventListener("click",()=> {
    if(tocino.checked){
        cantidadIngredientes++;        
        if(cantidadIngredientes > 3){
            ingredientesExtras.push("Tocino");
            totalIngredientes = totalIngredientes + 800;            
            textIngredientesB.innerHTML = `$${totalIngredientes}`;            
            ingredientesExtrasMostrar.innerHTML = mostrarIngredientesExtras(ingredientesExtras);
            total +=800;
            return;
        }else{
            ingredientes.push("Tocino");
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
        }        
    }
});

mozzarella.addEventListener("click",()=> {
    if(mozzarella.checked){
        cantidadIngredientes++;        
        if(cantidadIngredientes > 3){
            ingredientesExtras.push("Mozzarella");
            totalIngredientes = totalIngredientes + 800;            
            textIngredientesB.innerHTML = `$${totalIngredientes}`;
            ingredientesExtrasMostrar.innerHTML = mostrarIngredientesExtras(ingredientesExtras);
            total +=800;
            return;
        }else{
            ingredientes.push("Mozzarella");
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
        }        
    }
});

champinon.addEventListener("click",()=> {
    if(champinon.checked){
        cantidadIngredientes++;        
        if(cantidadIngredientes > 3){
            ingredientesExtras.push("Champinon");
            totalIngredientes = totalIngredientes + 800;  
            textIngredientesB.innerHTML = `$${totalIngredientes}`;
            ingredientesExtrasMostrar.innerHTML = mostrarIngredientesExtras(ingredientesExtras);
            total +=800;
            return;
        }else{
            ingredientes.push("Champinon");
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
        }        
    }
});

cebolla.addEventListener("click",()=> {
    if(cebolla.checked){
        cantidadIngredientes++;
        if(cantidadIngredientes > 3){
            ingredientesExtras.push("Cebolla");
            totalIngredientes = totalIngredientes + 800;  
            textIngredientesB.innerHTML = `$${totalIngredientes}`;
            ingredientesExtrasMostrar.innerHTML = mostrarIngredientesExtras(ingredientesExtras);
            total +=800;
            return;
        }else{
            ingredientes.push("Cebolla");
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
        }        
    }
});

pina.addEventListener("click",()=> {
    if(pina.checked){
        cantidadIngredientes++;        
        if(cantidadIngredientes > 3){
            ingredientesExtras.push("Piña");
            totalIngredientes = totalIngredientes + 800;            
            textIngredientesB.innerHTML = `$${totalIngredientes}`;            
            ingredientesExtrasMostrar.innerHTML = mostrarIngredientesExtras(ingredientesExtras);
            total +=800;
            return;
        }else{
            ingredientes.push("Piña");
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
        }                
    }
});

pimenton.addEventListener("click",()=> {
    if(pimenton.checked){
        cantidadIngredientes++;        
        if(cantidadIngredientes > 3){
            ingredientesExtras.push("Pimenton");
            totalIngredientes = totalIngredientes + 800; 
            textIngredientesB.innerHTML = `$${totalIngredientes} `;
            ingredientesExtrasMostrar.innerHTML = mostrarIngredientesExtras(ingredientesExtras);
            total +=800;
            return;
        }else {
            ingredientes.push("Pimenton");
            ingredientesMostrar.innerHTML = mostrar(ingredientes);
        }        
    }
});

btnEnviar.addEventListener("click", () => {
    let propina = parseInt(document.getElementById("txtPropina").value);
    
    if(!propina){
        alert("Aun no ha ingresado la propina");
        return;
    }            
    if(propina <= 0){
        alert("Propina debe ser mayor a 0");
        return;
    }

    propinaP.innerHTML = propina;

    total+=propina;

    let valorPizza = document.getElementById("valorPizza").textContent;
    valorPizza = valorPizza.substring(1);
    valorPizza = parseInt(valorPizza.replace(".",""));
        
    total+=valorPizza;
    totalId.innerHTML = `$${total}`;
});





