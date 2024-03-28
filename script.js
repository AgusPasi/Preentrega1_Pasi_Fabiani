/* Opciones proyecto final 
 Juego de rol/elige tu propia aventura lineal
 Pequeño ecommerce => login, agregar producto al carrito, eliminar del carrito, aumentar cantidad, disminuir cantidad, pagar, salir, ver catalogo, etc
*/
function nombrarBrujo() {
    let name = prompt("Decides revisar tu morral en busca de algo que te ayude a recordar tu nombre, dentro encuentras una carta con el sello del rey, roto.\n\nDecides leer la carta, en ella ves tu nombre a simple vista...\n\nTe llamas")
    let flag = false
    if (name === null || name === "") {
        for (let i = 0; i < 3; i++) {
            name = prompt("Esta escrito en el papel...\n¿Cual es tu nombre?")
            if (name !== null && name !== "") {
                flag = true
                break
            }
        }
    } else {
        return name
    }
    if (flag) {
        return name
    } else {
        name = "Roberto"
        alert("Al parecer sigues muy aturdido como para leer tu nombre...\nTe llamaras " + name + " durante toda la aventura.")
        return name
    }

}
//me quede aca, elegir camino, camino real=> pelea con 2 bandidos, pantano => fuiste tan sigiloso que no te escucho nadie
function camino (){
    prompt('Decidido a cumplir con ese contrato recoges tu espada y sacas tu mapa para orientarte.\nPuedes optar por 2 caminos:\nEl camino real el cual te llevara 2 dias llegar a Wyzima o bien puedes tomar un atajo a traves de un peligroso pantano el cual en pocas horas te llevara a la ciudad.\n\n¿Que decides?\n\n1.Camino real\n2.Pantano')
}

function pelear(hpBrujo, hpEnemigo, nombreBrujo, nombreEnemigo) {

}

function main() {
    let hpBrujo = 10
    alert("Te encuentras tumbado en el suelo de un bosque oscuro y misterioso.\n\nTodavia aturdido, te despiertas, a tu lado se encuentra una extraña criatura atravesada por una espada.\n\nTe sientas sobre el pasto para comprobar tus heridas, todo parece estar bien, salvo por una cosa...\n\nNo recuerdas tu nombre")
    let name = nombrarBrujo()
    alert('"Se convoca al brujo ' + name + ' para dar caza al grifo que aterra los bosques de Wyzima\nSe ofrece una recompensa de 10000 coronas\nFirma rey Radovid IV"')
    camino()
}


main()


