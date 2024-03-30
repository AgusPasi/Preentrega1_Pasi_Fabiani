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
        name = "Desconocido"
        alert("Al parecer sigues muy aturdido como para leer tu nombre...\nTe llamaras " + name + " durante toda la aventura.")
        return name
    }

}

function camino() { 
    let choice
    let condition = true
    do {
        choice = Number(prompt('Decidido a cumplir con ese contrato recoges tu espada y sacas tu mapa para orientarte.\nPuedes optar por 2 caminos:\nEl camino real el cual te llevara 2 dias llegar a Wyzima o bien puedes tomar un atajo a traves de un peligroso pantano el cual en pocas horas te llevara a la ciudad.\n\n¿Que decides?\n\n1.Camino real\n2.Pantano'))
        if(choice === 1){
        alert("Transitas el camino real para dirigirte hacia la ciudad.\nUnos metros mas adelante observas una carreta rota, al acercarte sientes como si el viento se cortara... ¡Una flecha!\nSe trata de 2 bandidos que intentan asaltarte...\nNo tienes otra alternativa que pelear")
        condition = false
        return choice
        }
        if(choice === 2){
        alert("Escoges el camino del pantano y comienzas tu marcha, efectivamente al cabo de unas horas llegas a la ciudad, para tu sorpresa no te has topado ningun peligro")
        condition = false
        return choice
        } 
    } while (condition);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function huir(value){

}
function pelear(hpBrujo, hpEnemigo, nombreEnemigo, dañoMax) {
    let dañoBrujo
    let dañoEnemigo
    let huir
    do {
        huir = prompt("Tu vida es de " + hpBrujo +"\nEl enemigo tiene "+ hpEnemigo+"\n¿Quieres huir o seguir peleando?\n1.Huir\n2.Seguir peleando")

        if (huir === null || huir === "") {
            continue
        } else if (huir === "1") {
            return "Has huido"
        } else if (huir !== "2") {
            continue
        } else if (huir === NaN) {
            continue
        }
        dañoBrujo = getRandomNumber(1, 10)
        dañoEnemigo = getRandomNumber(1, dañoMax)
        hpBrujo -= dañoEnemigo
        hpEnemigo -= dañoBrujo
        if (hpBrujo < 0) {
            hpBrujo = 0
        }
        if (hpEnemigo < 0) {
            hpEnemigo = 0
        }
        alert(nombreEnemigo + " te ha pegado por " + dañoEnemigo + " te restan " + hpBrujo + " puntos de vida\n\nLe has pegado a " + nombreEnemigo + " " + dañoBrujo + " le restan " + hpEnemigo)
    } while (hpBrujo > 0 && hpEnemigo > 0 && huir !== 1);    

    if (hpBrujo <= 0) {
        alert("Has muerto, termina la aventura")
    } else if (hpEnemigo <= 0) {
        alert("Has matado a " + nombreEnemigo)
    }
    return hpBrujo
}
function comprobarVitalidad (hp){
    let flag = false
    if(hp === 0){
        return flag = true
    } else {return flag}
}
function main() {
    let hpBrujo = 10
    let decision 
    alert("Te encuentras tumbado en el suelo de un bosque oscuro y misterioso.\n\nTodavia aturdido, te despiertas, a tu lado se encuentra una extraña criatura atravesada por una espada.\n\nTe sientas sobre el pasto para comprobar tus heridas, todo parece estar bien, salvo por una cosa...\n\nNo recuerdas tu nombre")
    let name = nombrarBrujo()
    alert('"Se convoca al brujo ' + name + ' para dar caza al grifo que aterra los bosques de Wyzima\nSe ofrece una recompensa de 10000 coronas\nFirma rey Radovid IV"')
    decision = camino()
    if(decision === 1){
        hpBrujo = pelear(hpBrujo, 6, "Bandido 1 ", 3)
        if(comprobarVitalidad(hpBrujo)){
        return 0
        }
        alert("Matas al primer bandido, rápidamente.\nAgilmente tomas un frasquito rojo de tu cinturon y lo bebes, ¡te has curado!")
        hpBrujo = 10
        hpBrujo = pelear(hpBrujo,6,"Bandido 2 ",3)
        if(comprobarVitalidad(hpBrujo)){
          return 0
        }
        alert("Habilmente neutralizas al segundo bandido.\nContinuas tu camino hacia la ciudad de Wyzima")
    }
    
}


main()


